interface labelledValue {
  size: number;
  label: string;
}

function printLabel(labelledObj:  labelledValue ) {
  console.log(labelledObj.label);
}

let myObj: labelledValue = {
  size: 10,
  label: "size is 10 object"
};
printLabel(myObj);
