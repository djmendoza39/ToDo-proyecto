export class Todo {
  infoTarea;

  constructor(persisted) {
    this.infoTarea = persisted;
  }

  save(key, value) {
    return this.infoTarea.setItem(key, value);
  }
  show() {}
  update() {}
  delete() {}
}
