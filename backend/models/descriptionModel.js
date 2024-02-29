const Sequelize=require('sequelize')
const sequelize = require("../util/database");

const Description = sequelize.define('descriptive-review',{
    cons:{
        type:Sequelize.STRING,
        allowNull:false
    },
    pros:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

module.exports=Description