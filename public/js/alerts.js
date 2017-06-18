let alerts = [];
let block = document.getElementById('alerts');
let allert = {
  fremove: function(id){
    let allert_block = document.getElementById(`allert_${id}`);
    allert_block.parentNode.removeChild(allert_block);
  },
  del: function(id){
    if (alerts[id-1]){
      delete alerts[id-1];
      let allert_block = document.getElementById(`allert_${id}`);
      setTimeout(allert.fremove, 600, id);
      allert_block.classList.add('remove_modal');
    }
  },
  create: function(status, text){
    alerts.push({
      status: status,
      text: text
    });
    let color;
    !status ? color= 'red' : color = 'green';
    block.innerHTML += `<div class="alert ${color}" id="allert_${alerts.length}">
      <div class="alert_txt">${text}</div>
      <div class="close_alert" onclick="allert.del('${alerts.length}')">
        X
      </div>
    </div>`;
    setTimeout(this.del, 5000, alerts.length)
  }
}
// document.addEventListener('click', function(e){
//   allert.create();
// })
