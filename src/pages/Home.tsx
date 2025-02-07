import Container from '@/components/main/Container';
import TodoList from '@/components/todo/TodoList';
import { useState } from 'react';

export default function Home() {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState<{ taskName: string }[]>([]);

  const addTask = () => {
    if (taskName === '') {
      return;
    }
    setTasks([...tasks, { taskName }]);
    setTaskName('');
  };

  const removeTask = (deleteIndex: number) => {
    const array = tasks.filter((_, index) => index !== deleteIndex);
    setTasks(array);
  };
  return (
    <Container className="max-w-md mx-auto py-8 pt-20">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">To-Do App</h1>
      </header>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Add a new task"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <button
            className="flex ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all active:scale-110"
            onClick={() => addTask()}
          >
            Add
          </button>
        </div>

        <TodoList tasks={tasks} onDelete={removeTask} />
      </div>
    </Container>
  );
}
