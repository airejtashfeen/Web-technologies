const person = {
    firstName: "Airej",
    lastName: "Tashfeen",
    id: 80,
    fullName: function() {
        return this.firstName + " " + this.lastName + " " + this.id;
    }
};

console.log(person.fullName()); 
