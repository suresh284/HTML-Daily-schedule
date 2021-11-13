exports.delete = (req,res) => {
    
    const db = require('../../Models')
    const News = db.news;

    const id = req.params.id

    // De;ete data from mongoose

    News.findByIdAndRemove(id)
    .then(data =>{ 
        if(!data){
            res.status(404).send({
                message: 'Cannot delete data with id {id}'
            })
        }
        else res.send(data)
    })
    .catch(err =>{
        res.status(500).send({
            message:
            message || 'Some Error Occured'
        })
    })





}