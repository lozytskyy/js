

const headerValue = document.getElementById('header');
const saveButton = document.getElementById('saveButton');
const textarea = document.getElementById('exampleFormControlTextarea1');

const option1 = document.getElementById('option1'); //Редагувати
const option2 = document.getElementById('option2'); //Стилізувати

const sizeT = document.getElementsByName('sizeT'); //getElementS
const saveButton1 = document.getElementById('saveButton');

option1.onclick = function(){
	//console.log('hello');
	textarea.innerHTML = headerValue.innerHTML;
	footer.style.display = "block";
	footer1.style.display = "none";
}

option2.onclick = function(){
	//console.log('hello');
	footer.style.display = "none";
	footer1.style.display = "block";

}

saveButton1.onclick = function(){
		header.innerHTML = textarea.value;
		textarea.value = '';
		//footer.style.display = "none";
}

for (i=0, length = sizeT.length; i < length; i++) {
	sizeT[i].onclick = function(){
		headerValue.style.fontSize = this.value;
	}
}