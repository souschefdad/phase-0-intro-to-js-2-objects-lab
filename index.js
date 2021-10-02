// Write your solution in this file!
const employee = {
    name: "Pierce R",
    streetAddress: "409 Jen St."
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};
    updatedEmployee[key] = value;
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const delEmployee = {...employee};
    delete delEmployee[key]
    return delEmployee; 
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}