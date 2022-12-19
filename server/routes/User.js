const router = require("express").Router();
const categorySchema = require("../models/Category")
const itemSchema = require("../models/Item")
const cartSchema = require("../models/Cart")

//getCategories
router.get("/getCategories", async(req,res) => {
    try {
        const allCategories = await categorySchema.find();
        res.status(200).json(allCategories)
    }catch(err){
        console.log("error at user getcategories  route")
        res.status(500).json(err)
    }
})

//get categories with there items
router.get("/getCategoriesWithItems" , async(req,res) => {
    try {
        const allCategoriesWithItems = await categorySchema.find().populate('items');
        res.status(200).json(allCategoriesWithItems)
    }catch(err){
        console.log("error at user getcategorieswithitems  route")
        res.status(500).json(err)
    }
})

//get specific category with its items
router.get("/getSpecificCategoryWithItems/:catId", async(req,res) => {
    try {
        const specificCategoryWithItems = await categorySchema.findById(req.params.catId).populate('items');
        res.status(200).json(specificCategoryWithItems)
    }catch(err){
        console.log("error at user specificCategoryWithItems route")
        res.status(500).json(err)
    }
})

//get item
router.get("/getItem/:itemId", async (req,res) => {
    try {
        const itemFound = await itemSchema.findById(req.params.itemId);
        res.status(200).json(itemFound);

    }catch(err){
        console.log("error at user  getItem route")
        res.status(500).json(err)
    } 
})


//get user cart

router.get("/getCart/:userId" , async (req,res) => {
    try {
        const cartFound = await cartSchema.findOne(
            {userId: req.params.userId},

        );
            const cartWithItems = await cartFound.populate("addedToCart")
            res.status(200).json(cartWithItems)
     
    }catch(err){
        console.log("error at user  getcart route")
        res.status(500).json(err)
    } 
})

//add to cart
router.put("/addTOCart/:itemId/:userId" , async (req,res) => {
    try {
        const itemFound = await itemSchema.findById(req.params.itemId)
        const addToCart = await cartSchema.findOneAndUpdate(
           {userId: req.params.userId} ,
           {$push: {addedToCart: itemFound }},
           {new: true}
        )

        res.status(200).json(addToCart)
    }catch(err){
        console.log("error at user  addtocart route")
        res.status(500).json(err)
    } 
})

//remove from cart

router.put("/removeFromCart/:itemId/:userId" , async (req,res) => {
    try {
        const cartWithoutItem = await cartSchema.findOneAndUpdate(
            {userId: req.params.userId},
            {$pull: {addedToCart: req.params.itemId}},
            {new: true}
        )
        res.status(200).json(cartWithoutItem)
    }catch(err){
        console.log("error at user  addtocart route")
        res.status(500).json(err)
    } 
})

module.exports = router