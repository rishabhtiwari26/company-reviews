const Sequelize=require('sequelize')

const sequelize = new Sequelize('company-review','root','sean90',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize