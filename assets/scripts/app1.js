// const defaultResult=0;
// let currentResult=defaultResult;


// function add()
// {
//     currentResult=currentResult+userInput.value;
//     outputResult(currentResult,'');

// }

// addBtn.addEventListener('click',add);


// // currentResult= (currentResult+10)*3/2-1

// // let calculationDescription=`(${defaultResult}+10)*3/2-1`;



const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput(){
return parseInt(usrInput.value);
}

function createAndWriteOutput(operator,_reultBeforeCalc,calcNumber){
  const calculationDescription= `${_reultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calculationDescription);
}

function add() {
  const enteredNumber = getUserNumberInput();
 const intialResult= currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput('+',intialResult,enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
 const intialResult= currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput('-',intialResult,enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
 const intialResult= currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput('*',intialResult,enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
 const intialResult= currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput('/',intialResult,enteredNumber);
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




