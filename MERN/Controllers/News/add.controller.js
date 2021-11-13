exports.add = (req,res) => {
    
    const db = require('../../Models')
    const News = db.news;

    if(!req.body.title){

        res.status(400).send({
            message:"Page not found"
        })
    }
    const news = new News({
        title:req.body.title,
        author:req.body.author,
        news:req.body.news
    })
    news.save(news)
    .then(data =>{
        res.send(data)
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "some error occured"
        })
    })




}