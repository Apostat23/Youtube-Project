const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

export async function loginApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'wizeline' && password === 'Rocks!') {
        return resolve(mockedUser);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
}

export async function logoutApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve({message: 'Logout successful'});
    }, 500);
  });
}
