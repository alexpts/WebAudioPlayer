function ajax(data){
  let res;
  let xhr = new XMLHttpRequest;
  xhr.open(data.type, data.url, true);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(JSON.stringify(data.body));
  xhr.onreadystatechange = function() { // (3)
    if (xhr.readyState != 4) return;
    xhr.status == 200) ? res = xhr.responseText : res = false;
  }
  return res;
}

let user = {
  register(){

  }
}
