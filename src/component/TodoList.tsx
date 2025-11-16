import { useContext } from "react";
import { TodosContext } from "../context/TodosContext";
import { FilterContext } from "../context/FilterContext";
import TodoItem from "./TodoItem";

function TodosList() {
  const todosContext = useContext(TodosContext);
  const filterContext = useContext(FilterContext);

  // “If todosContext or filterContext does NOT exist, return nothing”
  if (!todosContext || !filterContext) return null;

  const { todos } = todosContext;
  const { filter } = filterContext;

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      // if todo.completed is false(!false → true)
      // if todo.completed is true(!true → false)
      // “Return true only for TODOS that are not completed.”
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  //todos=(id, text, completed)
  //filter which is not copmleted and (get number of not completed)
  //count number of competed = false(not active)
  const activeCount = todos.filter((t) => !t.completed).length;
  return (
    <div>
      <h2>Todos List</h2>
      <div>Filter: {filter}</div>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <div>
        <span>
          {activeCount} item{activeCount != 1 ? "s" : ""} left
        </span>

        {/* {}=(Putting JavaScript inside HTML) ----> run this JavaScript and put the result into the page*/}
        {/* .some=(Is there at least ONE (t=> t.completed)), If at least one todo is completed → returns true */}
        {/* t=one todo item
                        t.completed= that todo's complete value(true/false) */}
        {todos.some((t) => t.completed) && (
          <button onClick={TodosContext.clearCompleted}>
            {/* //.filter=(get only the completed todos) */}
            Clear Completed ({todos.filter((t) => t.completed).length})
          </button>
        )}
      </div>
    </div>
  );
}

export default TodosList;
