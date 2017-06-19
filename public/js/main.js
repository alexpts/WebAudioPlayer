function getValue(name){
  return document.querySelector(name).value;
}

function ajax(data){
  let res;
  let xhr = new XMLHttpRequest;
  xhr.open(data.type, data.url, true);
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(JSON.stringify(data.data));
  xhr.onreadystatechange = function() { // (3)
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200) {
          res = xhr.responseText;
          data.success(res);
      }
    }
  }
}