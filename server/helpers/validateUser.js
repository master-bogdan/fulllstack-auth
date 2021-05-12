const validateUser = (users, email, password) => {
  const foundedUser = users.filter((user) => user.email === email);
  if (foundedUser.length === 0) {
    return 'not exist';
  }

  if (foundedUser[0].password === password) {
    return 'success';
  }

  return 'wrong password';
};

export default validateUser;
