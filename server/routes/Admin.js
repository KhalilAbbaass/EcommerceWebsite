const router = require("express").Router();

const categorySchema = require("../models/Category")
const itemSchema = require("../models/Item")

router.post("/createCategory", async(req,res) => {
    
    try {
        const categoryInfo = req.body
        const newCategory = new categorySchema({
            name: categoryInfo.name
        })
        await newCategory.save()
        res.status(200).json("category has been created successfully")
    } catch(err){
        console.log("error at admin createCategory Route")
        res.status(500).json(err)
    }
})

router.post("/createItem/:catId", async(req,res) => {
    try {
        const itemInfo = req.body
        const newItem = new itemSchema({
            title: itemInfo.title,
            description: itemInfo.description,
            category: itemInfo.category,
            price: itemInfo.price
        })
        await newItem.save()
        
        const specifiedCategory = await categorySchema.findByIdAndUpdate(req.params.catId, {
            $push: {items:newItem}
        },{new:true})

        res.status(200).json("Item added in category:    "+ await specifiedCategory.populate("items"))
    }catch(err){
        console.log("error at admin createItem in category route")
        res.status(500).json(err)
    }
})

router.delete("/deleteCategory/:catId", async(req,res) => {
    try {
        await categorySchema.findByIdAndDelete(req.params.catId)
        res.status(200).json("category has been deleted")
    }catch(err){
        console.log("error at admin deletecategory  route")
        res.status(500).json(err)
    }
})

router.put("/deleteItem/:catId/:itemId", async(req,res) => {
    try {
        await itemSchema.findByIdAndDelete(req.params.itemId)
        categorySchema.findOneAndUpdate(
            {_id: req.params.catId},
            {$pull: {items: req.params.itemId}},
            {new: true},
            function(err) {
                if(err){
                    console.log(err)
                }
            }
        )
            res.status(200).json("item has been deleted from specified category")

    }catch(err){
        console.log("error at admin deleteItem  route")
        res.status(500).json(err)
    }
})

//update category
router.put("/updateCategory/:catId" , async(req,res) => {
    try {
        const categoryInfo = req.body
        await categorySchema.findByIdAndUpdate(req.params.catId, 
            {$set: {name: categoryInfo.name}},
            {new: true}
        )
        res.status(200).json("Category has been updated")
    }catch(err){
        console.log("error at admin updatecategory  route")
        res.status(500).json(err)
    }
})

//get all Categories
router.get("/getCategories", async(req,res) => {
    try {
        const allCategories = await categorySchema.find();
        res.status(200).json(allCategories)
    }catch(err){
        console.log("error at admin getcategories  route")
        res.status(500).json(err)
    }
})

//get categories with there items
router.get("/getCategoriesWithItems" , async(req,res) => {
    try {
        const allCategoriesWithItems = await categorySchema.find().populate('items');
        res.status(200).json(allCategoriesWithItems)
    }catch(err){
        console.log("error at admin getcategorieswithitems  route")
        res.status(500).json(err)
    }
})
//get specific category with its items
router.get("/getSpecificCategoryWithItems/:catId", async(req,res) => {
    try {
        const specificCategoryWithItems = await categorySchema.findById(req.params.catId).populate('items');
        res.status(200).json(specificCategoryWithItems)
    }catch(err){
        console.log("error at admin  specificCategoryWithItems route")
        res.status(500).json(err)
    }
})

//update item
router.put("/updateItem/:itemId" , async (req,res) => {
    try {
        const itemInfo = req.body
        const updatedItem = await itemSchema.findByIdAndUpdate(req.params.itemId, 
            {$set: {
                title: itemInfo.title,
                description: itemInfo.description,
                category: itemInfo.category,
                price: itemInfo.price
            }},
            {new: true}
            )
            res.status(200).json("item has been updated:     "+ updatedItem)
    }catch(err){
        console.log("error at admin  updateItem route")
        res.status(500).json(err)
    }

    
})

//get item
router.get("/getItem/:itemId", async (req,res) => {
    try {
        const itemFound = await itemSchema.findById(req.params.itemId);
        res.status(200).json(itemFound);

    }catch(err){
        console.log("error at admin  getItem route")
        res.status(500).json(err)
    } 
})
module.exports = router