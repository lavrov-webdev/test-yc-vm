import express from 'express';
import cors from 'cors';

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/todos', async (req, res) => {
  const todos = await prisma.todo.findMany()
  res.json(todos);
});

app.post('/todos', async (req, res) => {
  const todo = await prisma.todo.create({
    data: {
      text: req.body.text,
      status: "open"
    }
  })
  res.status(201).json(todo);
});

// app.put('/todos/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const index = todos.findIndex(todo => todo.id === id);
//   if (index !== -1) {
//     todos[index] = { ...todos[index], ...req.body };
//     res.json(todos[index]);
//   } else {
//     res.status(404).send('Todo not found');
//   }
// });

app.delete('/todos/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  const deletedTodo = await prisma.todo.delete({
    where: {
      id
    }
  })
  res.json(deletedTodo);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});