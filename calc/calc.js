



function onClickButtons(value){
	var textfield = document.getElementById('result')
	textfield.value = textfield.value + value;
}

function clearValue(){
	var textfield = document.getElementById('result')
	textfield.value = "";
}
function evaluteResult(){
	var textfield = document.getElementById('result');
	var value = textfield.value;
	var result = eval(value);
	textfield.value  = result;
}