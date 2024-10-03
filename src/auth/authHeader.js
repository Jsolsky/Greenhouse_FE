const token = localStorage.getItem('token');

if (token) {
  fetch('http://your-backend-url/protected-resource', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  })
    .then(response => response.json())
    .then(data => {
      console.log('Protected data:', data);
    })
    .catch(err => console.error(err));
}