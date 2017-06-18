module.exports = {
  index: (req, res) =>{
    res.render('index', {user: req.session.user || {login: 'Guest'}})
  },
  update_main: (req, res) =>{
    res.render('index', {layout: false, user: req.session.user || {login: 'Guest'}})
  }
}
