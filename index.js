// Write your solution in this file!
function drivers(name, address){
  return{
    name:name,
    address:address,
  };
}
let driver=drivers()

function updateDriverWithKeyAndValue(driver,name,"Sam"){
  const newdriver={...driver};
  newdriver[name]="Sam";
  return newdriver;

}
