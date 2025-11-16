import { useState, useContext } from "react";
import { TodosContext } from "../context/TodosContext";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
function TodoItem({ todo }: { todo: Todo }) {
  // “Is this todo currently being edited?”
  // false → not editing (normal display mode)
  // true → editing (show input box instead of text)
  const [isEditing, setIsEditing] = useState(false);

  // todo.text comes from the todo from TodosContext from line 4
  //.text is from type Todo from TodosContext
  //if text in data is "Design landing page", this is editText and when you type in input, will edit insetEditText
  const [editText, setEditText] = useState(todo.text);
  const context = useContext(TodosContext);

  // If there is no TodosContext, don’t try to render this item.
  if (!context) return null;

  const handleEdit = () => {
    // if the user type anything
    if (editText.trim()) {
      // call editTodo from TodosContext, get newText
      // todo.id=(tells whch todo to update by id)
      // editText=(new text you want to replace it with,)
      context.editTodo(todo.id, editText);

      // Switch back to regular display mode (show normal todo text)
      setIsEditing(false);
    }
  };

  return (
    <div className="flex flex-center gap-10">
      <input
        type="checkbox"
        // when checked box, active completed ex: false
        checked={todo.completed}
        // change completed status by id (ex: false->true)
        onChange={() => context.toggleTodo(todo.id)}
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyPress={(e) => e.key === "Enter" && handleEdit()}
        />
      ) : (
        <span> {todo.text}</span>
      )}
      {/* when click, isEditing become true => edit text */}
      <button className="w-5 h-5" onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "✓" : "✏️"}
      </button>

      <button onClick={() => context.deleteTodo(todo.id)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </div>
  );
}

export default TodoItem;
