import { createContext, useState, useEffect } from "react";

const data = [
  {
    id: "1",
    text: "Design landing page",
    //when it is true, it is completed, when it is false, it is active
    completed: true,
  },
  {
    id: "2",
    text: "Set up CI/CD pipeline",
    completed: false,
  },
  {
    id: "3",
    text: "Fix login bug",
    completed: false,
  },
  {
    id: "4",
    text: "Write unit tests",
    completed: true,
  },
  {
    id: "5",
    text: "Deploy to staging",
    completed: false,
  },
];

export const TodosContext = createContext<TodosContextType | null>(null);

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

// => void/returns nothing
interface TodosContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, newText: string) => void;
  clearCompleted: () => void;
}

interface TodosProviderProps {
  children: React.ReactNode;
}

export function TodosProvider({ children }: TodosProviderProps) {
  // State data
  const [todos, setTodos] = useState<Todo[]>(() => {
    //getItem=(read data)
    const saved = localStorage.getItem("todos");
    if (saved) {
      return JSON.parse(saved);
    }
    return data;
  });

  //JSON.stringify=(convert to a string)
  //save todos in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Actions
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        // if id =id, change completed status
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleTodo,
        editTodo,
        clearCompleted,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
