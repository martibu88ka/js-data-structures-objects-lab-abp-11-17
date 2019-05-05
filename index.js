// Write your solution in this file!
let driver = {
  name: 'name',
  address:'address'
}
function updateDriverWithKeyAndValue(driver, name, Sam){
return Object.assign ({},driver,{[name]:Sam});
}
function destructivelyUpdateDriverWithKeyAndValue(driver, name, Sam){
  return Object.assign (driver, {[name]:Sam});
}
