module.exports = mongoose =>{

    var schema = mongoose.Schema(
        {
            tittle:String,
            author:String,
            news:String
        },
        {
            timestamps:true
        }
    );
    //convert _id to id

    schema.method('toJson',function(){
        const {__v,_id,...object } =this.toObject()
        object.id=_id
        return object
    })
    const news = mongoose.model("news",schema)
    return news
}
