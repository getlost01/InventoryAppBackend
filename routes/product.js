import express from "express";
import  Product from "../models/product.js";
const router = express.Router();
import * as dotenv from 'dotenv'; 
dotenv.config();

router.post("/create", async (req, res) => {
	try {
		Product.deleteMany({},function(err) {
            if (err) console.log(err)
			const responseData = req.body;
			responseData.forEach( async ele => {
				// console.log(ele)
;				let product = await Product.findOne({ id: `${ele.id}`});
				if(product){
					Product.updateOne({id: ele.id},{...ele},function (err) {
						if (err){console.log(err);} 
					});
				}else
				await new Product({ ...ele}).save();
			});
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.get("/", async (req, res) => {
	try {
		Product.find({}, function(err, products) {
				res.status(200).send({ products,  message: "Fetch Completed"  });
		});
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

export default router;
