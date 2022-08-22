document.getElementById('submit1').addEventListener('click', function(){

    clickBtn('player-1', 'setInnerHtml');

    disabledFunction('submit1');
   
});

document.getElementById('submit2').addEventListener('click', function(){
    clickBtn('player-2', 'setInnerHtml');

    disabledFunction('submit2');
})

document.getElementById('submit3').addEventListener('click', function(){
    clickBtn('player-3', 'setInnerHtml');

    disabledFunction('submit3');
});

document.getElementById('submit4').addEventListener('click', function(){
    clickBtn('player-4', 'setInnerHtml');

    disabledFunction('submit4');
});

document.getElementById('submit5').addEventListener('click', function(){
    clickBtn('player-5', 'setInnerHtml');

    disabledFunction('submit5');
});

document.getElementById('submit6').addEventListener('click', function(){
    clickBtn('player-6', 'setInnerHtml');

    disabledFunction('submit6');
});

// Input value 1
document.getElementById('input1').addEventListener('keyup', function(){

    formValidation('input1');
});

// Input value 2
document.getElementById('input2').addEventListener('keyup', function(){
    formValidation('input2');
});

// Input value 3
document.getElementById('input3').addEventListener('keyup', function(){
    formValidation('input3');
});


// Calculate 5 palyer budget

document.getElementById('calculate').addEventListener('click', function(){

    const test = document.getElementById('input1');
    const getValue = test.value;
    // get child html
    const parentNodeId = document.getElementById('setInnerHtml');
    const countChild = parentNodeId.childNodes;
    const childNumber = countChild.length - 1;

    if(childNumber <= 0){
        alert("Select Your favorite player. Then calculate the total money");
    }else if(getValue === ""){
        alert("Type Money");
    }else{
        const convartNumber = parseFloat(getValue);
        const moneyTotalPlayer = convartNumber * childNumber;
        setInnerText('player-total', moneyTotalPlayer)
        console.log(moneyTotalPlayer);
        test.value = "";
    }
    
});

// Calculate total amount
document.getElementById('calculate-total').addEventListener('click', function(){

    const inputId2 = document.getElementById('input2');
    const inputId3 = document.getElementById('input3');
    const getValueInput2 = inputId2.value;
    const getValueInput3 = inputId3.value; 
    const inputNumber1        = getInnerTextToNumber('player-total');
    const convartInputNumber2 = parseFloat(getValueInput2);
    const convartInputNumber3 = parseFloat(getValueInput3);
    // get child html
    const parentNodeId = document.getElementById('setInnerHtml');
    const countChild = parentNodeId.childNodes;
    const childNumber = countChild.length - 1;
   
    //Validation  
    if(childNumber <= 0 || inputNumber1 === 0){
        alert("Select Your favorite player. Then calculate the total money");
    }else if(getValueInput2 === "" || getValueInput3 === ""){
       alert("Type money");
    
    }else{
        const totalCostes = inputNumber1 + convartInputNumber2 + convartInputNumber3;
        setInnerText('total-cost', totalCostes);
        
    }
    inputId2.value = "";
    inputId3.value = "";
    
});