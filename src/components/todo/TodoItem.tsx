type TodoItemProps = {
  taskName: string;
  onDelete: () => void;
};
const TodoItem = (props: TodoItemProps) => {
  return (
    <li className="py-3 flex items-center justify-between">
      <div className="flex items-center">
        <input type="checkbox" className="mr-2" placeholder="..." />
        <span>{props.taskName}</span>
      </div>
      <button className="text-red-500 hover:text-red-600 hover:underline" onClick={props.onDelete}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
