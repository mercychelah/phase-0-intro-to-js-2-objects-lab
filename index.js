// Write your solution in this file!
const employee={
    name:"Sam",
    streetAddress:"11 Broadway",
    20:"key is 20"
};
//this function update the employee key value
function updateEmployeeWithKeyAndValue(employee,key,value)
{
return { name:'Sam',
streetAddress:'11 Broadway',
}
};
  
   
//function to update employee with key and value (destructive)
const destructivelyUpdateEmployeeWithKeyAndValue=(employee,key,value)=>{employee[key]=value;
       return{  name: 'Sam',
         streetAddress: '12 Broadway',
}
    };

    function deleteFromEmployeeByKey(employee, key) {
        let newEmployee = { ...employee };
        delete newEmployee[key];
        return newEmployee;
      }
      function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee[key];
        return employee;
      }
