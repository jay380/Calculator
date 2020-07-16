// THE ONLY THING THAT'S STILL REMAINING IS TO ADD AN DISPLAY OF INPUTS. THE ID OF DIV IS 'MEM' ...LINE NUMBER: 90SSSS. 


function add(num1, num2){
    if(num1 == '.' || num2 == '.'){
        let fixed = Number(num1) + Number(num2);
        let newFixed = fixed.toFixed(2);
        return newFixed;    
    }
    else{
        return Number(num1) + Number(num2);
    }
}
function sub(num1, num2){
    if(num1 == '.' || num2 == '.'){
        let fixed = num1 - num2;
        let newFixed = fixed.toFixed(2);
        return newFixed;    
    }
    else{
        return num1 - num2;
    }
}
function mul(num1, num2){
    if(num1 == '.' || num2 == '.'){
        let fixed = num1 * num2;
        let newFixed = fixed.toFixed(2);
        return newFixed;    
    }
    else{
        return num1 * num2;
    }
}
function div(num1, num2){
    let fixed = num1 / num2;
    let newFixed = fixed.toFixed(2);
    return newFixed;
}

function operate(op, num1, num2){
    if(op == '+'){
        return add(num1, num2);
    }
    else if(op == '-'){
        //display.value = sub(num1, num2);
        return sub(num1, num2);
    }
    if(op == '*'){
        //display.value = mul(num1, num2);
        return mul(num1, num2);
    }
    if(op == '/'){
        //display.value = div(num1, num2);
        return div(num1, num2);
    }
}

function longResult(opValue, num){
    let ans;
    /*let firstResult = operate(opValue[0], arr[0], arr[1]);
    if(opValue.length > 1){
        for(let i = 1; i < opValue.length; i++){
            ans = operate(opValue[i], firstResult, num[i + 1]); 
        }
        display.value = ans;
    }
    else {
        display.value = firstResult;
    }*/
    if(opValue.length > 1){
        let i;
        ans = num[0];
        for(i = 0; i < opValue.length; i++){
            ans = operate(opValue[i], ans, num[i + 1]); 
            //console.log(ans);
        }
        display.value = ans;
    }
    else{
        ans = operate(opValue[0], num[0], num[1]);
        //console.log(ans);
        display.value = ans;
    }
    
}

const display = document.getElementById('display');
const nums = document.getElementsByClassName('num');
const ops = document.getElementsByClassName('ops');
const mem = document.getElementById('mem');
let opValue;
let n = 0;
let n1 = 0;
let arr = [];
let arr1 = [];
let num;
//console.log(nums[0].textContent);

for(let i = 0; i < nums.length; i++){
    nums[i].addEventListener('click', storeNumber);
}
function storeNumber(e){
    //This is done so i can type a bunch of numbers together.
    if(display.value){
        display.value += e.target.textContent;
    }
    else{
    display.value = e.target.textContent;
    }     
    //arr[n] = e.target.textContent;
    //n++;
}

//Storing numbers & operators and clearing the display
for(let i = 0; i < ops.length; i++){
    ops[i].addEventListener('click', storeOperator);
}
function storeOperator(e){
    arr1[n1] = e.target.textContent;
    n1++;
    arr[n] = display.value;
    n++;
    display.value = '';
}
const eqs = document.getElementById('finish');
const clear = document.getElementById('clear');

//pressing equals would result in calling longResult function.
eqs.addEventListener('click', equals);
function equals(){
    arr[n] = display.value;
    n++;
    opValue = arr1;
    num = arr;
    n1 = 0;
    arr1 = [];
    n = 0;
    arr = [];
    //operate(opValue, num1, num2);
    longResult(opValue, num);
}
//clearing every data.
clear.addEventListener('click', clears);
function clears(){
    display.value = '';
    n1 = 0;
    arr1 = [];
    n = 0;
    arr = [];
}

//the back button
const btn = document.getElementById('btn');
btn.addEventListener('click', erase);
function erase(){
    const str = display.value;
    const numList = str.split("");
    numList.pop();
    const newStr = numList.join("");
    display.value = newStr;
}


