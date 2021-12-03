const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const users = [
  {
    id: 1,
    username: 'Lady Gaga',
    description: 'In love with Judas',
  },
];
app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.filter((user) => user.id === userId);
  if (!user) res.sendStatus(404);
  res.send(user[0]);
});

app.post('/users/', (req, res) => {
  const id = users[users.length - 1].id + 1;

  console.log(req.body);
  users.push({ ...req.body, id });

  res.send(users[users.length - 1]);
});

app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  let foundUser = users.find(entry => entry.id === userId)

  if (!foundUser) res.sendStatus(404);

  let foundUserIndex = users.findIndex(entry => entry.id === userId)

  users[foundUserIndex] = { ...foundUser, ...req.body };

  res.send(foundUser);
});

app.listen(8080, () => {
  console.log(`App listening on localhost:8080`);
});
