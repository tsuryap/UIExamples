


var a  =  " i am in calc.js file";
function onClickButtons(value){
	var textfield = getElement('result');
	textfield.value = getValue(textfield) + value;
}

function clearValue(){
	var textfield = getElement('result');
	textfield.value = "";
}
function evaluteResult(){
	var textfield = getElement('result');
	var value = textfield.value;
	var result = eval(value);
	textfield.value  = result;
}

function getElement(id){
	var element = document.getElementById(id);
	return element;
}
function getValue(element){
	var value = element.value;
	return value;
}
