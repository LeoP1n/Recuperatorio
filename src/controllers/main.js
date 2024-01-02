const db = require('../database/models');

const mainController = {
  home: (req, res) => {
    db.Book.findAll({
      include: [{ association: 'authors' }]
    })
      .then((books) => {
        res.render('home', { books });
      })
      .catch((error) => console.log(error));
  },
  authors: (req,res)=>{
    db.Author.findAll()
    .then(author =>{
      res.json(author)
    })
  },
  detail: (req,res)=>{
    let n = req.params.id
    db.Book.findByPk(n ,[{association: "authors"}])
    .then(book=>{
      res.json(book)
    })
  }
};

module.exports = mainController;
