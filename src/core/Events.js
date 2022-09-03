export class Events {

  //siempre un evento para realizar una accion
  click(selector, action) {
    document.querySelector(selector).addEventListener("click", action);
  }
  
}
