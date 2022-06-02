console.log("works");

const employersList = JSON.parse(employers);
const tableEmployers = document.querySelector(".table-employers");
printTable = () => {
    tableEmployers.innerHTML = "";
    employersList.forEach((employer) => {
        tableEmployers.innerHTML += `<table class="table table-dark table-hover table-employers">

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
</table>`;

    });
};
printTable();