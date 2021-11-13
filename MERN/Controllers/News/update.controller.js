exports.update = (req,res) => {

    const id = req.params.id

    if(!req.body){
        res.status(500).send({
            message: 'Data Cannot be Empty'
        })
    }

    News.findIdAndUpdate(id,req.body,{useFindAndModify : false})

    .then(data =>{
        if(!data){
            res.status(404).send({
                message: 'Cannot update with id {id}'
            })
        }
        else res.send({
            message : 'Upadted Successfuly'
        })
    })
    .catch(err => {
        res.status(500).send({
            message:
            message || 'Some error occured'
        })
    })





}