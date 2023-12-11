let users = [
  {
    id: 1,
    name: "user 1",
    email: "example@email.com",
  },
  {
    id: 2,
    name: "user 2",
    email: "example2@email.com",
  },
  {
    id: 3,
    name: "user 3",
    email: "example3@email.com",
  },
];

export const getAll = (req, res) => {
  res.json(users);
};

export const getById = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((b) => b.id === id);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  } else {
    return res.json(user);
  }
};

export const create = (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
};

export const update = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((b) => b.id === id);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  } else {
    user.name = req.body.name;
    user.email = req.body.email;
    return res.json(user);
  }
};

export const remove = (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((b) => b.id === id);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  } else {
    users = users.filter((b) => b.id !== id);
    return res.json(user);
  }
};
