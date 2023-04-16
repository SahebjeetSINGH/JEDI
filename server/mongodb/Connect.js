import mongoose from 'mongoose';

const Connect=(url)=>{
    mongoose.set('strictQuery',true);
    mongoose.connect(url)
    .then(()=>console.log("MongoDB connected!"))
    .catch((err)=>console.log(err));

}

export default Connect;