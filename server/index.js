const express = require("express");
const app = express();
const multer  = require('multer')
const cors = require('cors');

// Enable CORS
app.use(cors());

// setup multer for file upload in specific folder
var storage = multer.diskStorage(
    {
        destination: '../uploadedFiles',
        filename: function (req, file, cb ) {
            cb( null, file.originalname);
        }
    }
);

const upload = multer({ storage: storage } )

app.use(express.json());

// serving front end build files
app.use(express.static(__dirname + "/../../uploadedFiles"));

// route for file upload
app.post("/api/localFileUpload", upload.single('myFile'), (req, res, next) => {
    console.log(req.file.originalname + " file successfully uploaded !!");
    res.sendStatus(200);
});

app.listen(8000, () => console.log("Listening on port 8000"));
