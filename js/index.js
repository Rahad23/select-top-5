// function-1:  createhtml element
function clickBtn(playerId, setHtmlId, btnId){

    const parentNodeId = document.getElementById(setHtmlId);
    const countChild = parentNodeId.childNodes;
    
    if((countChild.length) > 5){
        alert('You already selected 5 player');
        const idBtn = document.getElementById(btnId);
        idBtn.removeAttribute('disabled', false);
        return;
    }

    const getPlayerId = document.getElementById(playerId);
    const innerText = getPlayerId.innerText;

    const getOlId = document.getElementById(setHtmlId);
    const setInnerHtml = document.createElement('li');

    setInnerHtml.appendChild(document.createTextNode(innerText));
    getOlId.appendChild(setInnerHtml);

    // set Style js
    setInnerHtml.style.color = "#fff";
    setInnerHtml.style.backgroundColor = "#000";
    setInnerHtml.style.textAlign = "center";
    setInnerHtml.style.padding = "10px";
    setInnerHtml.style.borderRadius = "10px";
    setInnerHtml.style.fontWeight = "bold";
    setInnerHtml.style.marginBottom = "10px";
}

//function no-2: Set Disabled function
function disabledFunction(btnId){

    const getButtonId = document.getElementById(btnId);
    getButtonId.setAttribute('disabled', "");
    console.log(getButtonId);
}

//function no-3:  Form validetion

function formValidation(validation){
    const test = document.getElementById(validation);
    const getValue = test.value;
    const convartNumber = parseFloat(getValue);
    
    if(isNaN(convartNumber)){
        
        alert('Plese type number');
        test.value = "";
    }
    
}

// fuction no-4: set inner text
function setInnerText(id, innerText){
    const getId = document.getElementById(id);
    getId.innerText = innerText;
}

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

    if(childNumber <= 0 || getValue === ""){
        alert("Select Your favorite player. Then calculate the total money");
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

    const inputId1 = document.getElementById('input1');
    const getValue = inputId1.value;
    
    // get child html
    const parentNodeId = document.getElementById('setInnerHtml');
    const countChild = parentNodeId.childNodes;
    const childNumber = countChild.length - 1;

    if(childNumber <= 0 || getValue === ""){
        alert("Select Your favorite player. Then calculate the total money");
    }else{
        const convartNumber = parseFloat(getValue);
        const moneyTotalPlayer = convartNumber * childNumber;
        setInnerText('player-total', moneyTotalPlayer)
        console.log(moneyTotalPlayer);
        test.value = "";
    }
    
});