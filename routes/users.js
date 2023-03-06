var express = require('express');
var router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const path = require('path');
const jwt = require('jsonwebtoken');



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', async(req, res, next)=> {
  const users = await User.findOne({email:req.body.email});
  if(users) return  res.json({message:"Account already exist",type:'error'});
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password,salt);
  const user = new User({
    name:req.body.name,
    email:req.body.email,
    password:hashPassword,
  });
  try{
    const postUser = await user.save();
    res.json(postUser);
  }catch(err){
    res.json({message:err});
  }
});


router.post('/login', async(req, res, next)=> {
  const user = await User.findOne({email:req.body.email});
  if(!user) return  res.json({message:"Email doesnot exist"});
  const validPass = await bcrypt.compare(req.body.password,user.password);
  if(!validPass) return res.json({message:"Invalid password"});
  const token = jwt.sign(user.toJSON(), 'fahimsarat44885');
  res.json({user:user,token:token});
});

router.post('/verify', async(req, res, next)=> {
  try{
    var decoded = jwt.verify(req.body.token, 'fahimsarat44885');
    res.json({user:decoded});
  }catch(err){
    res.json({error:"Invalid token"});
  }
  
});


router.put('/update/profile/', async(req, res, next)=> {
  const investor = await User.updateMany({email:req.body.email},{$set:{name:req.body.name,nid:req.body.nid}});
  return res.json({message:"Profile updated"});
});

module.exports = router;
