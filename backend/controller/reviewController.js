const Company=require('../models/ratingModel')
const Description=require('../models/descriptionModel');


exports.getReview=(req,res,next)=>{
    let companyRating;
    let companyObj;
    Company.findOne({where:{companyName:req.body.companyName}})
        .then(comp=>{
            companyRating=comp.rating
            Description.findAll({where:{companyReviewTableId:comp.id}})
                .then(allDescription=>{
                    companyObj={
                        rating:companyRating,
                        allDescription:allDescription
                    }
                    console.log(companyObj)
                    res.send(companyObj)
                })
        })
}

exports.postReview=(req,res,next)=>{
    console.log(req.body)
    let fetchedCompany;
    let noOfUser=1
    Company.findAll({where:{companyName:req.body.companyName}})
        .then(comp=>{
            fetchedCompany=comp[0]
            return fetchedCompany
    }).then(comp=>{
        if(comp){
            let newNoOfRatings=comp.noOfRatings+1
            
            req.body.rating = parseFloat(req.body.rating);
            // console.log('typeOF',typeof(comp.rating),typeof(comp.noOfRatings),typeof(req.body.rating),typeof(newNoOfRatings))
            comp.rating=((comp.rating*comp.noOfRatings)+(req.body.rating))/(newNoOfRatings)
            comp.noOfRatings=newNoOfRatings
            comp.save()
                .then(comp=>{
                    
                    // console.log('inside create',comp)
                    
                    Description.create({
                        cons:req.body.cons,
                        pros:req.body.pros,
                        companyReviewTableId:comp.id
                    })
                }).then((result)=>{
                    // console.log('success',res)
                    res.send(result)
                })
            
        }
        else{
            Company.create({
                companyName:req.body.companyName,
                noOfRatings:noOfUser,
                rating:req.body.rating
            }).then(company=>{
                console.log(company)
                Description.create({
                    cons:req.body.cons,
                    pros:req.body.pros,
                    companyReviewTableId:company.id
                })
                .then(des=>{
                    res.send(des)
                })
                .catch(e=>console.log(e))
        })
        }
    }).catch(e=>console.log(e))
    
}

