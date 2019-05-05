// Write your solution in this file!
let driver = {}
function updateDriverWithKeyAndValue(driver, name, Sam){
  const newdriver = { ...driver };

  newdriver[name]="Sam";

  return newdriver;
}
