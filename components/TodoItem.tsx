"use client"

type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  toggleTodo: (id: string, complete: boolean) => void
  deleteTodo: (id: string) => void;
};

const TodoItem = ({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) => {
  return (
    <li className="flex justify-between gap-1 items-center w-full mb-2">
<div>
        <input
          id={id}
          type="checkbox"
          className="cursor-pointer peer mr-2"
          defaultChecked={complete}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
</div>
      <button onClick={() => deleteTodo(id)} className="border rounded p-1 text-xs text-red-500">Delete</button>
    </li>
  );
};

export default TodoItem;
