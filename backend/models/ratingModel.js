const Sequelize=require('sequelize')
const sequelize=require('../util/database')

const Company = sequelize.define('company-review-table',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    companyName:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    rating:{
        type:Sequelize.DOUBLE
    },
    noOfRatings:{
        type:Sequelize.INTEGER
    }
})

module.exports=Company