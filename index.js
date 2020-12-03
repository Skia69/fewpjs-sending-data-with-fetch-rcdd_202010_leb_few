// Add your code here
const submitData = (name, email) => {

const object = { 
    name,
    email
  }

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }, 
  body: JSON.stringify(object)
};

return fetch('http://localhost:3000/users', options)
  .then(response => response.json())
  .then(object => document.body.innerHTML = object["id"])
  .catch(err => document.body.innerHTML= err.message)
}