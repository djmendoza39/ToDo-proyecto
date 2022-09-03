export class Persisted {
  //metodos para localStorage
  //en el localStotare se reciben 2 argumentos
  //key y value...

  setItem(key, value) {
    console.log("ingresando al setItems");
    return window.localStorage.setItem(key, JSON.stringify(value));
  }
}
