const employee = {
  name:"Sam", 
  streetAdress:"11 Broadway"  
};

for (const key in employee) {
    delete employee.name[key];
  }
employee.name = "Sam"
function updateEmployeeWithKeyAndValue(init, key, value){
 const update = {
    name:"Sam",
 streetAddress:"11 Broadway" 
 }
 return update
}

function destructivelyUpdateEmployeeWithKeyAndValue(uit, key, value){
uit[key] = value;
return uit
}

 function deleteFromEmployeeByKey(fit,key){
    const update = {
     streetAddress:"11 Broadway" 
     }
     return update
}
function destructivelyDeleteFromEmployeeByKey(unfit,key){
  delete unfit[key];
  return unfit  
}
