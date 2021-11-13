exports.findone = (req,res) => {
    
    const db = require('../../Models')
    const News = db.news;

    const id = req.params.id

    News.findByID(id)
    .then(data=>{
        if(!data){
            res.status(404).send({
                message: 'No page found'
            })
        }
        else res.send(data)
    })
    .catch (err =>{
        res.status(500).send({
            message:
            message || 'Some Error Occured'
        })
    })



}