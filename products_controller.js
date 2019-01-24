module.exports = {
    create: (request, res, next) => {
        const dbInstance = request.app.get('db')
        const {name, description, price, image_url} = request.body
        dbInstance.create_product([name, description, price, image_url])
        .then(response => res.sendStatus(200))
        .catch(err => {
            response.status(500).send({errorMessage:'Shiz gone wrong yo'}) 
            console.log(err)
        })
    },
    getOne: (request, res, next) => {
        const dbInstance = request.app.get('db')
        const {id} = request.params
        dbInstance.read_product([id])
        .then(product => res.status(200).send(product))
        .catch(err => {
            response.status(500).send({errorMessage:'Not werkin yo'})
            console.log(err)
        })
    },
    getAll: (request, res, next) => {
        const dbInstance = request.app.get('db')
        dbInstance.read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
            response.status(500).send({errorMessage:'Noooo iz not werkinggg'})
            console.log(err)
        })
    },
    update: (request, res, next) =>{
        const dbInstance = request.app.get('db')
        const {id} = request.params
        const {desc} = request.query
        console.log(id, desc)
        dbInstance.update_product([id, desc])
        .then(response => res.sendStatus(200))
        .catch(err => {
            response.status(500).send({errorMessage:'sadface, not werkin'})
            console.log(err)
        })
    },
    delete: (request, res, next) => {
        const dbInstance = request.app.get('db')
        const {id} = request.params
        dbInstance.delete_product([id])
        .then(response => res.sendStatus(200))
        .catch(err => {
            response.status(500).send({errorMessage:'Try again, not werkin'})
            console.log(err)
        })
    }
}