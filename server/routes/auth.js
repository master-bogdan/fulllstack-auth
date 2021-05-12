import { Router } from 'express';
import fs from 'fs';
import path from 'path';
import validateUser from '../helpers/validateUser.js';

const auth = Router();

auth.post('/auth', (req, res) => {
  const { email, password } = req.body;

  const data = fs.readFileSync(path.resolve('./data/users.json'));
  const users = JSON.parse(data, 'utf8');
  const isValid = validateUser(users, email, password);

  switch (isValid) {
    case 'not exist':
      res.status(404).json({ error: 'User not exist' });
      break;
    case 'wrong password':
      res.status(403).json({ error: 'Wrong password' });
      break;
    default:
      res.status(200).json({ success: 'success', username: email });
      break;
  }
});

export default auth;
