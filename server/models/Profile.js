import mongoose from 'mongoose'
const Profile=new mongoose.Schema({
    FirstName:{type:'String',required:true},
    LastName:{type:'String',required:true},
    Alias:{type:'String',required:true},
    Email:{type:'String',required:true},
   

  })
  const ProfileSchema=mongoose.model('Profile',Profile)

  export default ProfileSchema;