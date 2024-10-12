import { useEffect, useState } from 'react'
import './App.css'
import { AddTodo } from './AddTodo';

enum Status {
  done = 'done',
  open = 'open',
  deleted = 'deleted'
}

type Todo = {
  id: number,
  text: string,
  status: Status
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const todos: Todo[] = await fetch(`/api/todos`).then(d => d.json())
      setTodos(todos)
    }
    fetchTodos()
  }, [])


  return (
    <>
      <h1>How are you?</h1>
      <ul>
        {todos.map(t => <div key={t.id}>
          {t.text}:&nbsp;{t.status}
        </div>)}
      </ul>
      <AddTodo />
    </>
  )
}

export default App
