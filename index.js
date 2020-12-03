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


// function submitData( name, email ) {
//   return fetch( 'http://localhost:3000/users', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: JSON.stringify( {
//         name,
//         email
//       } )
//     } )
//     .then( function ( response ) {
//       return response.json()
//     } )
//     .then( function ( object ) {
//       document.body.innerHTML = object[ "id" ]
//     } )
//     .catch( function ( error ) {
//       document.body.innerHTML = error.message
//     } )
// }