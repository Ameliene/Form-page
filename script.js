let employees = [];

function submitForm() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const status = document.getElementById('status').value;
    const department = document.getElementById('department').value;

    const employee = { name, phone, email, status, department };
    employees.push(employee);

    displayEmployees();
}

function displayEmployees() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    employees.forEach((employee, index) => {
        const employeeItem = document.createElement('div');
        employeeItem.classList.add('employee-item');
        employeeItem.innerHTML = `
            <strong>Name:</strong> ${employee.name}<br>
            <strong>Phone:</strong> ${employee.phone}<br>
            <strong>Email:</strong> ${employee.email}<br>
            <strong>Status:</strong> ${employee.status}<br>
            <strong>Department:</strong> ${employee.department}<br>
            <button onclick="deleteEmployee(${index})">Delete</button>
        `;
        employeeList.appendChild(employeeItem);
    });
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    displayEmployees();
}
