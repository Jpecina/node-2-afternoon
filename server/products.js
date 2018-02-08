module.exports = {
 create:(req,res,next) => {
    const dbInstance = req.app.get('db');
    
    dbInstance.create_product([req.body.name,req.body.description,req.body.price,req.body.imageurl])
        .then ( (product) => res.status(200).json(product) )
        .catch ( (error) => res.status(500).json() )
 },
 getOne: (req,res,next) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_product([req.params.id])
        .then( (product) => res.status(200).json(product) )
        .catch( () => res.status(500).json() )
 },
 getAll:(req,res,next) => {
    const dbInstance = req.app.get('db');

    dbInstance.read_products()
        .then( (products) => res.status(200).json(products) )
        .catch( () => res.status(500).json() )

 },
 update:(req,res,next) => {
    const dbInstance = req.app.get('db');

    dbInstance.update_product([req.params.id , req.query.desc ])
        .then( (products)=> res.status(200).json(products) )
        .catch( (error)=> res.status(500).json(error) )

 },
 delete:(req,res,next)=>{
    const dbInstance = req.app.get('db');

    dbInstance.delete_product([req.params.id,])
        .then( (product) => res.status(200).json(product) )
        .catch( (error) => res.status(500).json(error) )
 }

};

//req.body is the input from the outside input