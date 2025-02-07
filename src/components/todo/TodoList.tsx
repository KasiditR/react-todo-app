import TodoItem from './TodoItem';

type TodoProps = {
  tasks: { taskName: string }[];
  onDelete: (index: number) => void;
};

const TodoList = (todo: TodoProps) => {
  return (
    <ul className="divide-y divide-gray-200">
      {todo.tasks.map((element, index) => (
        <TodoItem key={index} taskName={element.taskName} onDelete={() => todo.onDelete(index)} />
      ))}
    </ul>
  );
};

export default TodoList;
