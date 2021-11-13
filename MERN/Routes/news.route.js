module.exports = app => {
    const Add = require ('../Controllers/News/add.controller')
    const FindAll = require('../Controllers/News/findall.controller')
    const FindOne = require('../Controllers/News/findone.controller')
    const Update = require('../Controllers/News/update.controller')
    const Delete = require('../Controllers/News/delete.controller')

    var router = require('express').Router()
    //add
    router.post('/',Add.add)
    //Findall
    router.get('/',FindAll.findall)
    //FindOne
    router.get('/:id',FindOne.findone)
    //Update
    router.put('/:id',Update.update)
    //Delete
    router.delete('/:id',Delete.delete)
    app.use('/api/news',router)


}