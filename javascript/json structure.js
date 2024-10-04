
const person = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    courses: ["Math", "Science", "History"],
    address: {
      street: "123 Main St",
      city: "Anytown",
      zipCode: "12345"
    }
  };
  
  
  const jsonString = JSON.stringify(person);
  console.log("JSON String:");
  console.log(jsonString);
  
  
  const parsedPerson = JSON.parse(jsonString);
  console.log("Parsed JavaScript Object:");
  console.log(parsedPerson);
  
  console.log("Name:", parsedPerson.name); 
  console.log("City:", parsedPerson.address.city); 
  