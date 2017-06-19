function load(page){
  ajax({
    url: `/load_${page}`,
    type: 'get',
    success: function(data){
      console.log(data);
      window.history.pushState({}, 'Моя новая страница', this.url);
      var el = document.createElement( 'html' );
      el.innerHTML = data;
      document.querySelector('.main').innerHTML = (el.querySelector('.main').innerHTML);
    }
  })
}
