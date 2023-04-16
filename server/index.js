import express from 'express';
import cors from 'cors';
import pinataSDK from '@pinata/sdk'

import Connect from './mongodb/Connect.js';
import Profile from './models/Profile.js'
import bcrypt from 'bcrypt'




const app=express()

const port=8080;

let pinata;

pinata=new pinataSDK('79315d7be5e60ffdd152','98ecde8b9fade82fa60dd0d346c013bbf70da7abe226a64c737281721e28c176')

// const corsOptions={
//     origin:[
//         '*'
//     ],
//     optionsSuccessStatus:200
// }
// const upload=multer({dest:"uploads/"})

app.use(cors());
app.use(express.json({limit:'50mb'}))
app.use(
    express.urlencoded({
        limit:'50mb',
        extended:true,
        parameterLimit:50000

    })
)

app.get('/',(req,res)=>{
    res.send("Hello World")
})


app.post('/mint',async (req,res)=>{
    let returnedBody=req.body
    console.log(returnedBody)
    console.log('hello')
    
    if(!returnedBody){
        res.status(500).json({status:false,msg:'No file Provided!'})
    }else{
        const fileName=returnedBody.title
        console.log(fileName)
        await pinata
          .testAuthentication()
          .catch((err)=>{
            res.status(500).json(JSON.stringify(err))
          })
        // const readableStreamForFile=fs.createReadStream(`./uploads/${fileName}`)
        const options={
            pinataMetadata:{
                name:returnedBody.title,
                keyValues:{
                    description:returnedBody.description
                }
            }
        }
        const pinnedFile=await pinata.pinJSONToIPFS(
            returnedBody,
            options
        )
        if(pinnedFile.IpfsHash){
            console.log(pinnedFile.IpfsHash)
            // fs.unlinkSync(`./uploads/${fileName}`)
            const metadata={
                name:req.body.title,
                description:req.body.description,
                symbol:"JEDI",
                artifactUri:`ipfs://${pinnedFile.IpfsHash}`,
                displayUri:`ipfs://${pinnedFile.IpfsHash}`,
                creators:[req.body.creator],
                decimals:0,
                is_transferable:true,



            }
        
            const pinnedMetadata=await pinata.pinJSONToIPFS(metadata,{
              pinataMetadata:{
                 name:'Jedi-metadata'
              }
            })
            if(pinnedMetadata.IpfsHash ){
               res.status(200).json({
                 status: true,
                 msg: {
                    imageHash: pinnedFile.IpfsHash,
                    metadataHash: pinnedMetadata.IpfsHash
                 }
               });
            }
        }
    }


})
app.post('/profile',async(req,res)=>{
    let returnedBody=req.body
    console.log(returnedBody)
    console.log('hello')
    let FirstName=returnedBody.FirstName;
    let LastName=returnedBody.LastName;
    let Alias=returnedBody.Alias;
    let Email=returnedBody.Email
    let PassCode=returnedBody.Passcode
    
    // async function hashPassword(PassCode) {
    //     const hash = await bcrypt.hash(PassCode, 5);
    //     return hash

        
        
    // }
    // const Passcode=hashPassword(PassCode)
    // console.log(Passcode)
        
    // if(!returnedBody){
    //     res.status(500).json({status:false,msg:'No file Provided!'})
    // }else{
    //     const fileName=returnedBody.FirstName
    //     console.log(fileName)
    //     await pinata
    //       .testAuthentication()
    //       .catch((err)=>{
    //         res.status(500).json(JSON.stringify(err))
    //       })
    //     // const readableStreamForFile=fs.createReadStream(`./uploads/${fileName}`)
    //     const options={
    //         pinataMetadata:{
    //             name:returnedBody.Alias,
    //             keyValues:{
    //                 password:returnedBody.Passcode
    //             }
    //         }
    //     }
    //     const pinnedFile=await pinata.pinJSONToIPFS(
    //         returnedBody,
    //         options
    //     )
    //     if(pinnedFile.IpfsHash){
    //         console.log(pinnedFile.IpfsHash)
    //         // fs.unlinkSync(`./uploads/${fileName}`)
    //         const metadata={
    //             name:req.body.FirstName,
    //             description:req.body.Alias,
    //             symbol:"JEDI",
    //             artifactUri:`ipfs://${pinnedFile.IpfsHash}`,
    //             displayUri:`ipfs://${pinnedFile.IpfsHash}`,
    //             creators:[req.body.FirstName],
    //             decimals:0,
    //             is_transferable:true,

    //         }
        
    //         const pinnedMetadata=await pinata.pinJSONToIPFS(metadata,{
    //           pinataMetadata:{
    //              name:'Jedi-metadata'
    //           }
    //         })
    //         if(pinnedMetadata.IpfsHash ){
    //            res.status(200).json({
    //              status: true,
    //              msg: {
    //                 imageHash: pinnedFile.IpfsHash,
    //                 metadataHash: pinnedMetadata.IpfsHash
    //              }
    //            });
    //         }
    //     }
    // }
    const newProfile=await Profile.create({
       FirstName,
       LastName,
       Alias,
       Email,
      
       

    })
    res.status(201).json({success:true,data:newProfile});

})

const StartServer=async ()=>{
    try{
        Connect("mongodb+srv://FirstKenpachi:27442650@cluster0.ryesd.mongodb.net/?retryWrites=true&w=majority")
        app.listen(8080,()=>console.log("Server is started!"))


    }catch(err){
        console.log(err);

    }
    


}
StartServer();