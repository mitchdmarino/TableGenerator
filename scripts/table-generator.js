// Person Class 
class Person {
    constructor(personName, isGcpComplete) {
        this.personName = personName
        this.isGcpComplete = isGcpComplete
    }
}

// mock the studyStaff array
const names = [
    "Jerry Seinfeld",
    "Cosmo Kramer", 
    "Leslie Knope",
    "Michael Scott", 
    "David Wallace",
    "Claire Dunphy", 
    "Phil Dunphy", 
    
]

const studyStaff = []

names.forEach((name, ind) => {
    let person
    if (ind === 0) {
        person = new Person(name, true)
    }
    else {
        person = new Person(name, false)
    }
    studyStaff.push(person)
    
})

console.log(studyStaff)

// grab the table body from the document
const tBody = document.getElementById("gcp-tbody")

// function to add an element to the table 
function addToTable(person) {
    // create a row element
    let row = document.createElement("tr")
    // create the td element 
    let detail = document.createElement('td')
    detail.innerText = person.personName
    // append td to the row
    row.appendChild(detail)
    // append the row to the tbody
    tBody.appendChild(row)
}

// Iterate through the studyStaff array 
for (const person of studyStaff) {
    // check if isGcpComplete is false
    if (!person.isGcpComplete) {
       // add them to the table 
        addToTable(person)
    }
    // do nothing otherwise 
}
