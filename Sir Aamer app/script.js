const proxyUrl = 'http://localhost:3000/api/data';
const params = new URLSearchParams({
  apikey: '6ZtzwNWizYXIOCNrHA3R',
  username: 'aamergcu',
  password: '123456'
});
const url = `${proxyUrl}?${params.toString()}`;

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle the data
    console.log(data);
    // Example: Accessing user_id and name
    console.log("User ID:", data.user_id);
    console.log("Name:", data.name);
    // Example: Accessing resources
    data.resources.forEach(resource => {
      console.log(resource);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
