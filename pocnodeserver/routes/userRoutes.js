const express = require('express');
const Router = express.Router();
const multer = require('multer');
const users = require('../db/schema/userschema');
const path  = require('path');
const ESOPERATIONS = require('../models/userESOpeartion');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(file);
        console.log(typeof file.originalname);
        var fileExtension = file.originalname.substring(file.originalname.lastIndexOf('.') + 1);
        var profileExtenisons = ['jpeg', 'png', 'jpg', 'gif', 'tiff'];
        var resumeExtenisons = ['pdf', 'docx', 'doc'];
        if (profileExtenisons.includes(fileExtension)) {
            console.log('profile ', fileExtension);
            var ClientProfilePath = '';
            // console.log('Client Profile Path',__dirname);
            // ClientProfilePath = path.join(__dirname,'../../pocapp/public');
            // console.log('Client Profile New Path',ClientProfilePath);
            cb(null, 'public/profiles');
        }
        else if (resumeExtenisons.includes(fileExtension)) {
            console.log('resume ', fileExtension);
            cb(null, 'public/resumes');
        }

    },
    filename: function (req, file, cb) {
        console.log('FILE ORG NAME ', file.originalname);
        cb(null, Date.now() + '-' + file.originalname)
    }
});
var upload = multer({ storage: storage }).array('file');
Router.post('/add', (req, res) => {
    // upload.single('file')
    upload(req, res, function (err) {
        let FN = req.body.fn;
        let LN = req.body.ln;
        let skills = req.body.skills;
        let profile = req.files[0];
        let resume = req.files[1];
        let DataObj = {
            fn : FN,
            ln : LN,
            skills : skills,
            profile : profile,
            resume : resume
        }
        console.log('DB obj',DataObj);
        users.insertMany(DataObj,(err,data)=>{
            if(err!=null){
                return console.log(err);
            }
            console.log(data[0]);
        });
        ESOPERATIONS.TEXTExtractfromPDForDOCX(DataObj);
    });
    return res.status(200).send(req.file) 
});
Router.post('/upload', (req, res) => {
    // upload(req, res, function (err) {
    //     // console.log(req.file);
    //     if (err instanceof multer.MulterError) {
    //         return res.status(500).json(err)
    //     } else if (err) {
    //         return res.status(500).json(err)
    //     }
    //     return res.status(200).send(req.file)

    // });
    users.findOne({}, (e, d) => {
        if (e) {
            console.log(e);
        }
        console.log(d);
    });
});
Router.put('/update',(req,res)=>{

});
Router.get('/find',(req,res)=>{
     users.find({},(err,data)=>{
         if(err){
             res.send({});
         }
         res.send(data);
     }) 
});
module.exports = Router;