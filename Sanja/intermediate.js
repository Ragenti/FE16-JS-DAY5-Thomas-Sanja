console.log("works");

const employersList = JSON.parse(employers);
const tableEmployers = document.querySelector(".table-employers");
printTable = () => {
    tableEmployers.innerHTML = "";
    employersList.forEach((employer) => {
        tableEmployers.innerHTML += `<table class="table table-dark table-hover table-employers">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Personal Id</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Email</th>
        <th scope="col">Job Title</th>
        <th scope="col">Salary</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row"></th>
        <td>${employer.id}</td>
        <td>${employer.firstName}</td>
        <td>${employer.lastName}</td>
        <td>${employer.email}</td>
        <td>${employer.jobTitle}</td>
        <td>${employer.salary}</td>
    </tr>
</tbody>
</table>`

    })
}