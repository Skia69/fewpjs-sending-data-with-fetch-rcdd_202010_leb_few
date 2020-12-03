// Add your code here
function submitData(name, email){
   let p= {
      name,
      email
    }
  

let dataObject = {
  method: "POST",
  credentials: 'same-origin',
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  }, 
  body: JSON.stringify(p)
  
};

return fetch("http://localhost:3000/users", dataObject)
  .then(response => response.json)
  .then(object =>  document.body.innerHTML = object["id"])
  .catch(error => document.body.innerHTML= error.message)
}