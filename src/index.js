import { App } from "./app/App";
import { Persisted } from "./core/Persisted";
import { Events } from "./core/Events";
import { Todo } from "./core/Todo";

((app, events) => {
  events.click("#btn", () => {
    console.log(app.todo.save("algo", { hola: "mundo" }));
  });
  
})(new App(new Todo(new Persisted)), new Events);
