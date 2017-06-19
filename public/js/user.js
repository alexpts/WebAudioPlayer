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
            load('index');
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
            load('index');
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
            load('index');
          }else{
            //alert(data.message);
            allert.create(data.status, data.message);
          }
      }
    })
  }
}
