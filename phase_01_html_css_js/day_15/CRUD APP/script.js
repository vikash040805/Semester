// Registration 
//fill user data
//Fetch data
//Delete data
//updating Data


let handleSubmit=async(event)=>{
    event.preventDefault()
    let name=document.getElementById("name")
    let email=document.getElementById("email")
    let age=document.getElementById("age")

    let userObject={
        name:name.value,
        email:email.value,
        age:age.value
    }
    
    await fetch(" http://localhost:3000/users",{
        method:"POST",
        headers:{'Content-Type': 'application/json'},  // to send signal
        // that upcoming data is json data
        body:JSON.stringify(userObject)
    })
    alert("User registered Successfully")
    getData();
};
    // function to fetch data from server and display on page
    let getData=async()=>
    {
        let res=await fetch(" http://localhost:3000/users")
        let data=await res.json();
        displayData(data)
    }
    

    
    
    let displayData=(users)=>{
        let container=document.getElementById("container")
        users.forEach(element => {
            container.innerHTML+=`
            <div>
                <h3>Name: ${element.name}</h3>
                <p>email: ${element.email}</p>
                <p>Age: ${element.age}</p>
                <button onclick="handleDelete('${element.id}')">Delete</button>
                <button onclick="handleUpdate('${element.id}')">Update</button>
            </div>
            `
    });
    
};
let handleDelete = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE"
    });

    alert("User deleted successfully");

    getData();
    
}
let handleUpdate = async (id) => {

    let newName = prompt("Enter new name:");
    let newEmail = prompt("Enter new email:");
    let newAge = prompt("Enter new age:");

    let updatedUser = {
        name: newName,
        email: newEmail,
        age: newAge
    };

    await fetch(`http://localhost:3000/users/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUser)
    });

    alert("User updated successfully");

    getData();
};
getData()