const db = require("../../database/models")
module.exports = {
    listProducts: (req, res) => {
        db.Book.findAll()
        .then(book=>{
            res.json(book)
        })
    },
    showProduct: (req, res) => {
        let n = req.params.id
        db.Book.findByPk(n,{include: [{ association: 'authors' }]})
        .then(book=>{
            res.json(book)
        })
    },
    listUsers: (req, res) => {
        db.User.findAll()
        .then(user=>{
            res.json(user)
        })
    },
    showUser: (req, res) => {
        let n = req.params.id
        db.User.findByPk(n)
        .then(user=>{
            res.json(user)
        })
    },
    listCategories: (req, res) => {
        db.Categorie.findAll()
        .then(user=>{
            res.json(user)
        })
    },
    listAuthors: (req, res) => {
        db.Author.findAll()
        .then(author=>{
            res.json(author)
        })
    }
}