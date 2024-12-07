

const port= 4000;
const express = require("express");
const app= express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer= require("multer");
const path = require("path");
const cors = require("cors");
const { type } = require("os");
const bodyParser = require('body-parser');
app.use(express.json());
app.use(cors());

//Database Connection with MongoDB
mongoose.connect("mongodb+srv://rayhan3487:2215151074@cluster0.mmk6c.mongodb.net/StarkGadgetBD");

//API Creation

app.get("/", (req,res)=>{
    res.send("Express App is Running")
})
//Image Storage Engine


//const storage = multer.diskStorage({
  //  destination: './upload/images',
  //  filename: (req,file,cb)=> {
    //    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  //  }
//})

//const upload = multer({storage:storage})

//Creating upload Endpoint for images
//from here 
//app.use('/images',express.static('upload/images'))

//app.post("/upload",upload.single('product'),(req,res)=> {
//res.json({
  //  success:1,
   // image_url:`http://localhost:${port}/images/${req.file.filename}`
//})
//})
//code for postman





//Schema for creating products
const Product = mongoose.model("Product",{
    id:{
        type :Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    }
})

//here we will create a endpoint with the name of add product

app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = product.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    const product= new Product ({
       // id:id,
        id:req.body.id,
        name:req.body.name,
       // image:req.body.image,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });



    // api for the user creation,schema creating for user 
    //--------------------------------------------------------!!!!!!!!!!--------------------
    const Users = mongoose.model('Users',{
        name: {
            type:String,
        },
        email:{
            type:String,
            unique:true,
        },
        password:{
            type:String,
        },
        cartData:{
            type:Object,
        },
        date:{
            type: Date,
            default:Date.now,
        }

    })

//--------------------------api for using that we can create the user---------------------------------
    //creting endpoint for registering users
    app.post('/signup',async(req,res)=>{
        let check = await Users.findOne({email:req.body.email});
        if(check){
            return res.status(400).json({success:false,errors:"existing user found with same email id "})
        }
        let cart = {};
        for (let i = 0; i < 300; i++) {     //empty cart
           cart[i]=0;   
        }
        const user = new Users({
            name:req.body.username,          //create the user
            email:req.body.email,
            password:req.body.password,
            cartData:cart,
        })

        //save the user in the database
        await user.save();   //created data is saved using this save method

        const data = {
            user: {                      
                id:user.id
            }
        }
        const token = jwt.sign(data,'secret_ecom');  //generating the token 
        res.json({success: true,token})
    })

    console.log(product);
    await product.save(); //product details saved in the mongodb database
    console.log("Saved");
    res.json({
        success:true,     //generate response with the key success
        name:req.body.name,
    })

})

app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running in Port"+port)
    }

    else{
        console.log("Error : "+error)
    }

});