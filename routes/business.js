var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const path = require('path');
const Business = require('../models/Business');




/* GET users listing. */
router.get('/', async (req, res) => {
    try {
      const businesses = await Business.find();
      res.json(businesses);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  });

router.post('/', async(req, res, next)=> {
  const business = new Business({
    name:req.body.name,
    tradeLicence:req.body.tradeLicence,
    lat:req.body.lat,
    lng:req.body.lng,
    details:req.body.details,
  });
  try{
    const postBusiness = await business.save();
    res.json(postBusiness);
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
