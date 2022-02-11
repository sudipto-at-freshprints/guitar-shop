const EXPRESS = require("express");
const BODY_PARSER = require("body-parser");
const CORS = require("cors");
const MYSQL = require("mysql2");
//const MULTER=require("multer");

const APP = EXPRESS();

APP.use(CORS());
APP.use(BODY_PARSER.json());
APP.use(EXPRESS.json({limit: '100mb'}));
/*APP.use(EXPRESS.urlencoded({limit: '50mb',extended:true,parameterLimit:50000})); */
/* APP.use(BODY_PARSER.json({limit: "50mb"}));
APP.use(BODY_PARSER.urlencoded({limit: "50mb", extended: true, parameterLimit:50000})); */

var GUITAR_COUNT = 0;
/* const STORAGE=MULTER.diskStorage({
    destination:(req,file,callBack)=>{
        callBack(null,'../src/assets/images')
    },
    filename:(req,file,callBack)=>{
        callBack(null,file.originalname)
    }
});
var upload= MULTER({storage:STORAGE}).single('file');
//const upload = MULTER({ dest: '../src/assets/images' }) */

const DB = MYSQL.createConnection({
  host: "localhost",
  user: "root",
  password: "shovon734",
  database: "guitar-shop",
  port: 3306,
  multipleStatements: true,
});

//check database connection
DB.connect((err) => {
  if (err) console.log(err, "err");
  //console.log('database connected...') ;
});

//get data
APP.get("", (req, res) => {
  let qr =
    "SELECT guitar_id,name,image,description,price,soldOut,dateModified FROM guitars";
  DB.query(qr, (err, result) => {
    if (err) console.log(err, "errs");
    if (result.length > 0) {
      GUITAR_COUNT = result.length;
      res.send({
        data: result,
        count: result.length,
      });
    }
  });
});
APP.get("/guitar/:id", (req, res) => {
  let id = req.params["id"];
  let qr = `SELECT guitar_id,name,image,description,price,soldOut,dateModified FROM guitars where guitar_id=${id}`;
  DB.query(qr, (err, result) => {
    if (err) console.log(err, "errs");
    if (result.length > 0) {
      res.send({
        data: result,
        count: GUITAR_COUNT,
      });
    }
  });
});

APP.get("/guitar/:id/desc", (req, res) => {
  let id = req.params.id;
  let qr = `SELECT longDescription from guitars WHERE guitar_id=${id}`;
  DB.query(qr, (err, result) => {
    if (err) console.log(err, "errs");
    if (result.length > 0) {
      res.send({
        data: result,
      });
    }
  });
});
APP.get("/guitar/:id/reviews", (req, res) => {
  let id = req.params.id;
  let qr = `SELECT * from reviews WHERE guitar_id=${id}`;
  DB.query(qr, (err, result) => {
    if (err) console.log(err, "errs");
    if (result.length > 0) {
      res.send({
        data: result,
      });
    }
  });
});
//InsertingReview
APP.post("/guitar/:id/reviews", (req, res) => {
  let id = req.params["id"];
  let reviewerName = req.body.reviewerName;
  let points = req.body.reviewPoints;
  let review = req.body.reviewBody;
  let date = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
  let qr = `INSERT INTO reviews (guitar_id,reviewer_name,review,star,dateAdded) VALUES('${id}','${reviewerName}','${review}','${points}','${date}')`;
  DB.query(qr, (err, result) => {
    if (err) console.log(err);
    else if (result.length > 0) {
      qr2 = `SELECT * FROM reviews WHERE guitar_id=${id}`;
      DB.query(qr2, (err2, result2) => {
        console.log(result2);
        if (err2) console.log(err2);
        else if (result2.length > 0)
          res.send({
            reviews: result2,
          });
      });
    } else
      res.send({
        message: "Error while adding",
      });
  });
});
APP.post("/add-guitar", (req, res) => {
  let guitarName = req.body.name;
  let image = req.body.image;
  let desc = req.body.description;
  let lDesc = req.body.longDescription;
  let price = req.body.price;
  let category = req.body.category;
  let soldOut = req.body.soldOut;
  let date = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
  let qr = `INSERT INTO guitars (name,image,description,longDescription,price,category,soldOut,dateAdded,dateModified)  VALUES('${guitarName}','${image}','${desc}','${lDesc}',${price},'${category}',${soldOut},'${date}','${date}')`;
  DB.query(qr, (err, result) => {
    if (err) console.log(err);
    else if (result.length > 0) {
      res.send({
        response: "Success",
      });
    } else {
      res.send({
        response: "Error",
      });
    }
  });
});
APP.get("/guitar/edit/:id", (req, res) => {
  let id = req.params["id"];
  let qr = `SELECT * FROM guitars where guitar_id=${id}`;
  DB.query(qr, (err, result) => {
    if (err) console.log(err, "errs");
    if (result.length > 0) {
      res.send({
        data: result,
      });
    }
  });
});
APP.put("/guitar/edit/:id", (req, res) => {
  let id = req.params["id"];
  let guitarName = req.body.name;
  let image = req.body.image;
  let desc = req.body.description;
  let lDesc = req.body.longDescription;
  let price = req.body.price;
  let category = req.body.category;
  let soldOut = req.body.soldOut;
  let date = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
  let qr = `UPDATE guitars SET name='${guitarName}',image='${image}',description='${desc}',longDescription='${lDesc}',price=${price},category='${category}',soldOut=${soldOut},dateModified='${date}' WHERE guitar_id=${id}`;
  DB.query(qr,(err,result)=>{
    if(err)
    console.log(err);
    else if(result.length>0){
      res.send({
        response:'Success'
      })
    }
  })
});
APP.listen(3000, () => {
  //console.log('listening to port 3000');
});
