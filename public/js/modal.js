function modalOpen(name){
  let modal = document.querySelector(`#${name}`);
  let modalWindow = document.querySelector(`#${name}-window`);
  modal.classList.add("modal_open");
  setTimeout(function(){modalWindow.classList.add("modalWindow_open")}, 10);
}
function modalClose(name){
  let modal = document.querySelector(`#${name}`);
  let modalWindow = document.querySelector(`#${name}-window`);
  setTimeout(function(){modal.classList.remove("modal_open");}, 200);
  modalWindow.classList.remove("modalWindow_open");
}
