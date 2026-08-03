const form = document.getElementById("studentForm");
const card = document.getElementById("card");

form.addEventListener("submit", function(event){

    event.preventDefault();
    let student = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        course: document.getElementById("course").value
    };

    card.innerHTML = `
        <div class="profile-card">
            <h2>Student Profile</h2>
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Age:</strong> ${student.age}</p>
            <p><strong>Course:</strong> ${student.course}</p>
        </div>
    `
});