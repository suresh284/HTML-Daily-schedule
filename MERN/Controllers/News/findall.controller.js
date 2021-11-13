exports.findall = (req,res) => {
    
    const db = require('../../Models')
    const News = db.news;

    News.find()
    .then(data =>{

        res.send(data)
    })
    .catch(err => {
        res.status(500).send
        message:
        message || 'Some Error Occured'
    })


}