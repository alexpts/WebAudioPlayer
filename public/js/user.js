function getValue(name){
  return document.querySelector(name).value;
}

function ajax(data){
  let res;
  let xhr = new XMLHttpRequest;
  xhr.open(data.type, data.url, true);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(JSON.stringify(data.data));
  xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
          res = xhr.responseText;
          data.success(res);
      }
    }
  }
}

function update_index(){
  ajax({
    url: '/update_main',
    type: 'get',
    success: function(data){
      document.querySelector('.main').innerHTML = (data);
    }
  })
}
update_index()
let user = {
  register(){
    ajax({
      type: 'post',
      url: '/register',
      data: {
        login: getValue('#register_login_field'), //getValue('#register_login_field'),
        password: getValue('#register_password_field') //getValue('#register_password_field')
      },
      success: function(data){
          console.log(data);
          data = JSON.parse(data);
          if(data.status){
            modalClose('register');
            allert.create(data.status, data.message);
            update_index();
          }else{
            allert.create(data.status, data.message);
          }
      }
    })
  },
  auth(){
    ajax({
      type: 'post',
      url: '/auth',
      data: {
        login: getValue('#auth_login_field'), //getValue('#register_login_field'),
        password: getValue('#auth_password_field') //getValue('#register_password_field')
      },
      success: function(data){
          console.log(data);
          data = JSON.parse(data);
          if(data.status){
            modalClose('login');
            allert.create(data.status, data.message);
            update_index();
          }else{
            alert(data.message);
          }
      }
    })
  },
  exit(){
    ajax({
      type: 'post',
      url: '/exit',
      success: function(data){
          console.log(data);
          data = JSON.parse(data);
          if(data.status){
            //alert(data.message);
            allert.create(data.status, data.message);
            update_index();
          }else{
            //alert(data.message);
            allert.create(data.status, data.message);
          }
      }
    })
  }
}
