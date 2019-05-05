// Write your solution in this file!
let driver = {
  name: 'name',
  address:'address'
}
function updateDriverWithKeyAndValue(driver, address, [11 Broadway]){
return Object.assign ({},driver,{[address]:[11 Broadway]});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, name, Sam){
  return Object.assign (driver, {[name]:Sam});
}
function deleteFromDriverByKey(driver, name, Sam){
return Object.assign ({},driver,{[name]:Sam});
delete driver.name;
}
function destructivelyDeleteFromDriverByKey(driver, name, Sam){
return Object.assign (driver,{[name]:Sam});
delete driver.name;
}
