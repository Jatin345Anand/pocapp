const mammoth = require("mammoth");
const path = require("path");
const textract = require('textract');
const PDFPARSE = require('pdf-parse');
const fs = require('fs');
const ESOPERATION = {
    INSERTTEXTFILETOES: function (text) {
        console.log('TEst us ', text);
        var elasticsearch = require('elasticsearch');
        var client = new elasticsearch.Client({
            host: 'localhost:9200'
        });
        
        client.index({
            index: 'resume',
            id: '1',
            type: 'text',
            body: {
                "test": text
            }
        }, function (err, resp, status) {
            console.log(resp);
        });


    },
    TEXTFROMPDF: function (file) {
        console.log(__dirname, typeof __dirname);
        var filePath = path.join(__dirname, '../public/resumes/' + file.filename);
        console.log('Your File Path ', filePath);
        var textract = require('textract');
        // var extract = require('pdf-text-extract')
        // extract(filePath, { splitPages: false }, function (err, text) {
        //     if (err) {
        //         console.dir(err)
        //         return
        //     }
        //     console.dir(text)
        // });
        // textract.fromFileWithPath(filePath, function( error, text ) {
        //     if(error!=null){
        //         console.log(error);
        //     }
        //     console.log(text);
        // })
        // var pdfUtil = require('pdf-to-text');
        // var option = { from: 0, to: 10 };

        // pdfUtil.pdfToText(filePath, option, function (err, data) {
        //     if (err) throw (err);
        //     console.log(data); //print text    
        // });

        // //Omit option to extract all text from the pdf file
        // pdfUtil.pdfToText(filePath, function (err, data) {
        //     if (err) throw (err);
        //     console.log(data); //print all text    
        // });
        const pdfFile = fs.readFileSync(filePath);
        var TEXT = '';
        PDFPARSE(pdfFile).then((data) => {
            // console.log(data.info);
            // console.log(data.numpages);
            // console.log(data.text);
            this.INSERTTEXTFILETOES(data.text);
        });
        // console.log('TEST IS ',TEXT);
    },
    TEXTFROMDOCS: function (file) {

        var filePath = path.join(__dirname, '../public/resumes/' + file.filename);
        var docxParser = require('docx-parser');
        var TEXT = '';
        docxParser.parseDocx(filePath, (data) => {
            this.INSERTTEXTFILETOES(data);
        });

    },
    TEXTExtractfromPDForDOCX: function (OBJ) {
        console.log('in es opr ', OBJ);
        var OriginalName = OBJ.resume.originalname;
        var fileExtension = OriginalName.substring(OriginalName.lastIndexOf('.') + 1);
        console.log('exteniosn is ', fileExtension);
        if (fileExtension === 'pdf') {
            this.TEXTFROMPDF(OBJ.resume);
        }
        else {
            this.TEXTFROMDOCS(OBJ.resume);
        }
    },
    FINDDETSILSFROMES:function () {
        
    }
}
module.exports = ESOPERATION;