// auth.js
function authenticateUser(username, password) {
  if (username === 'admin' && password === '1234') {
    return 'Login successful';
  } else {
    return 'Invalid credentials';
  }
}

console.log(authenticateUser('admin', '1234'));
