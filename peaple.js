let namePlusSurname = require('./names.js')
let hobbyArray = require('./hobbies.js')

function peaple(){
    let person = namePlusSurname("Mario", "Rossi")
    person.hobbies = hobbyArray("Giardinaggio", "Calcio", "Gaming") 
    console.log(person);
}

peaple();


