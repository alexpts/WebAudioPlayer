module.exports = {
  show_index: (req, res) =>{
    res.render('index', {'User': req.session.user || 'Guest'})
  }
}
