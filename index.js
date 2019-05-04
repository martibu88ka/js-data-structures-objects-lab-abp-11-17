// Write your solution in this file!
let driver = {name:"Sam", address:"11 Broadway"}
function updateDriverWithKeyAndValue(driver, name, "Sam"){
  let newdriver = {...driver};

  newdriver[name]="Sam";

  return newdriver;
}
