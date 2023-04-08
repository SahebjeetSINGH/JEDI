const express=require('express')
const pinataSDK=require('@pinata/sdk')
const fs=require('fs')


const cors=require('cors')
const multer=require('multer')

const app=express()

const port=8080;

let pinata;

pinata=new pinataSDK('79315d7be5e60ffdd152','98ecde8b9fade82fa60dd0d346c013bbf70da7abe226a64c737281721e28c176')

const corsOptions={
    origin:[
        'http://localhost:8080'
    ],
    optionsSuccessStatus:200
}
const upload=multer({dest:"uploads/"})

app.use(cors(corsOptions));
app.use(express.json({limit:'50mb'}))
app.use(
    express.urlencoded({
        limit:'50mb',
        extended:true,
        parameterLimit:50000

    })
)

app.post('/mint',upload.single('image'),async (req,res)=>{
    const multerReq=req.body
    if(!multerReq.file){
        res.status(500).json({status:false,msg:'No file Provided!'})
    }else{
        const fileName=multerReq.file.fileName;
        await pinata
          .testAuthentication()
          .catch((err)=>{
            res.status(500).json(JSON.stringify(err))
          })
        const readableStreamForFile=fs.createReadStream(`./uploads/${fileName}`)
        const options={
            pinataMetadata:{
                name:req.body.title.replace(/\s/g,"-"),
                keyValues:{
                    description:req.body.description
                }
            }
        }
        const pinnedFile=await pinata.pinFileToIPFS(
            readableStreamForFile,
            options
        )
        if(pinnedFile.IpfsHash && pinnedFile.PinSize>0){
            fs.unlinkSync(`./uploads/${fileName}`)
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
            if(pinnedMetadata.IpfsHash && pinnedMetadata.PinSize>0){
            //    res.status(200).json({
            //      status: true,
            //      msg: {
            //         imageHash: pinnedFile.IpfsHash,
            //         metadataHash: pinnedMetadata.IpfsHash
            //      }
            //    });
            }
        }
    }


})

app.listen(port,()=>{
    console.log(`Server is succesfully connected! ${port}`)
})
