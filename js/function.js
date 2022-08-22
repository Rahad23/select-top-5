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

// function no-5: get innertext to number
function getInnerTextToNumber(id){
    const getId = document.getElementById(id);
    const getInnerText = getId.innerText;
    const convartNumber = parseFloat(getInnerText);
    return convartNumber;
}
