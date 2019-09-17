// Declaring variables
const zero = document.querySelector('#zero');
const decimal = document.querySelector('#decimal');
const clear = document.querySelector('#clear');
const result = document.querySelector('#result');
const equal = document.querySelector('#equal');

const numbers = document.querySelectorAll('.number-key');
const operations = document.querySelectorAll('.operation-key');

// Looping from numbers keys, add event listener click
for(let i = 0; i < numbers.length; i++){
  numbers[i].addEventListener('click', (event) => {
    const value = event.target.innerText;
    
    // replace default zero to numbers
      if(result.innerText.charAt(0) === '0'){
        result.innerText = result.innerText.replace('0', '') + value;

      // proceed append values 
      }else{
        result.innerText += value;
      }
      
    
    // Change clear text if number is not zero
    if(result.innerText !== '0') clear.innerText = 'CE';
  });
}

// Looping from operations keys, add event listener click
for(let i = 0; i < operations.length; i++){
  operations[i].addEventListener('click', (event) => {
    const value = event.target.value;
    result.innerText += value;
  });
}

// Handling zero key
zero.onclick = (event) => {
  const value = event.target.innerText;
  
  // concatenate zero if zero is before operator
   if(result.innerText.charAt(result.innerText.length-2) === '0'){
     result.innerText += value;
    
  // if zero is first number prevent append zeros. 'eg: prevent 00000000'  
  }else if(result.innerText.charAt(0) === '0'){
     result.innerText = value;      
  }else{
    // if zero is not first number append zeros
    result.innerText += value;
  }
}

// Handling decimal key, prevent append many dot (decimal)
decimal.onclick = () => {
  if(!result.innerText.includes('.')){
     result.innerText += '.';
  }
}

// Handling clear key
clear.onclick = () => {
  // when click clear (CE) remove records and set display to default zero
  result.innerText = '0';
  
  // when click clear (CE) update clear text to default (AC)
  clear.innerText = 'AC';
}

// Performing operations of entries when press equal key
equal.onclick = () => {
  results = result.innerText;
  
  // Handling when decimal hit last, when press equal key
  if(results.charAt(results.length-1) === '.'){
     result.innerText = 'Invalid Expression';
    
  // Handling when operations hit last, when press equal key  
  }else if(results.charAt(results.length-1) === '+' || results.charAt(results.length-1) === '-' || results.charAt(results.length-1) === '*' || results.charAt(results.length-1) === '/'){
     result.innerText = 'Invalid Expression';
    
    // Handling when two or more operations append, when press equal key
  }else if(results.match(/\+\+/g) || results.match(/\+\-/g) ||results.match(/\+\*/g) || results.match(/\+\//g) || results.match(/\-\-/g) || results.match(/\-\+/g) || results.match(/\-\*/g) || results.match(/\-\//g) || results.match(/\*\*/g) || results.match(/\*\+/g) || results.match(/\*\-/g) || results.match(/\*\//g) || results.match(/\/\//g) || results.match(/\/\+/g) || results.match(/\/\-/g) || results.match(/\/\*/g) || results.match(/\.\*/g) || results.match(/\.\+/g) || results.match(/\.\-/g) || results.match(/\.\//g) || results.match(/\*\./g)){
    result.innerText = 'Invalid Expression';
    
  // Checking for 0 times number or 0 divide a number  
  }else if(results.charAt(0) === '*' || results.charAt(0) === '/'){
    result.innerText = eval('0' + result.innerText);
  
    // using pow() when results length is great than 15  
  }else{
      
  // Calculate the results, 
    const calculate = eval(result.innerText);
    result.innerText = calculate;
  }
}
