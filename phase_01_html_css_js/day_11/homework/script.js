const form = document.getElementById("studentForm");
const card = document.getElementById("card");

form.addEventListener("submit", function(event){

    event.preventDefault();
    let student = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        course: document.getElementById("course").value
    };
    localStorage.setItem("students",JSON.stringify(student))

    

    form.reset();
    renderData()

});
let renderData=()=>{
    //getting data from local storage
    let student=localStorage.getItem("students")
    console.log("data from local storage",student)
    let student_obj=JSON.parse(student)
    console.log(typeof(student_obj))
    card.innerHTML = `
        <div class="profile-card">
            <h2>Student Profile</h2>
            <p><strong>Name:</strong> ${student_obj.name}</p>
            <p><strong>Age:</strong> ${student_obj.age}</p>
            <p><strong>Course:</strong> ${student_obj.course}</p>
        </div>
    `;

}
renderData()
