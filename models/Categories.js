const mongoose = require("mongoose");

const CategoriesSchema = new mongoose.Schema(
    {
        title: { type: String}
        
    });

module.exports = mongoose.model("Categories", CategoriesSchema);