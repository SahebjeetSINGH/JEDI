import mongoose from 'mongoose'

export default ConnectDB=(url)=>{
    mongoose.set('strictQuery',true)
    mongoose.connect(url)
    .then(()=>{console.log('Server is succesfully connected')})
    .catch((err)=>{console.log(err)})
}
