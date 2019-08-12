console.log('page is working!');

// const x = 5;
// const y = 5;

const container = document.getElementById('chessCont');

function addTable(){
        const xValue = document.getElementById('x').value;
        const yValue = document.getElementById('y').value;

 const table = document.createElement("table");
for (let i = 1; i <= xValue; i++) {
    const tr = document.createElement('tr');
    for (let j = 1; j <= yValue; j++) {
        const td = document.createElement('td');
        if (i%2 == j%2) {
            td.className = "white";
        } else {
            td.className = "black";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
container.innerHTML = '';
container.appendChild(table);

//document.body.appendChild(table);

}

// var sqButton = document.getElementById("d");
// var BlueButton = document.getElementById("blue");
// var inptValue = document.getElementById("inpt");
// var ValueCont = document.getElementById("222");



// const ValueContainer = document.getElementById("222");
// ValueContainer.onclick = function (ev) {
// 	ValueContainer.classList.add('two');
// }


// var a = 0;
// const a = {};    // - константа, яку не можна видалити
// a.one = 1;

// const b = [];
// b.push = ('one');
// console.log (b);


if (true) {
	var a = 10000;
}
//console.log(a);   // - глобальна змінна


if (true) {
	let a = 10000;
//	console.log(a);  // -  змінна в менжах блоку!!! локальна
}






// ValueCont.onclick = function (ev1) {
// ValueCont.classList.add('background');
// }


// //console.log(inptValue);
// inptValue.onchange = function (ev){
// 	var value = event.target.value;
// 	ValueCont.innerHTML = '<h1>' + value + '</h1>';

// 	// 	console.log(ev);
// 	// console.log('user typing someting!');
// 	//
// }




// function widthCounter(elementWidth, param, amount){
// 	if (elementWidth > 150 || elementWidth < 500) {
// 	if (param === 'plus') {
// 		return elementWidth + amount
// 		} else {
// 			return elementWidth - amount
// 		}
// 	}
// }

// sqButton.onmousedown = function(event){
// 	sqButton.style.width = widthCounter(event.srcElement.clientWidth, 'plus', 150) + 'px'
// }

// sqButton.onmouseup = function(event){
// 	sqButton.style.width = widthCounter(event.srcElement.clientWidth, 'minus', 150) + 'px'
// }



// var sqButton = document.getElementById("d");
// var BlueButton = document.getElementById("blue");

// function widthCounter(elementWidth, param, amount){
// 	if (elementWidth > 150 || elementWidth < 500) {
// 	if (param === 'plus') {
// 		return elementWidth + amount
// 		} else {
// 			return elementWidth - amount
// 		}
// 	}
// }

// sqButton.onclick = function(click_event){
// 	//console.log(click_event.srcElement.clientWidth);
// 	//var styledElement = document.getElementById("jump");
// 	sqButton.style.width = widthCounter(click_event.srcElement.clientWidth, 'plus', 50) + 'px'
// }


// BlueButton.onclick = function (click_event){
// 	sqButton.style.width = widthCounter(sqButton.clientWidth, 'minus', 50) + 'px'
// // 	console.log(sqButton.clientWidth);
// }





// var a=prompt('write x');
// var b=prompt('write y');


// var x = parseInt(a);
// var y = parseInt(b);



// document.write("<table id='two' cellpadding='20'>");
// 	document.write('<tr>');
// 	for (var j=1; j <= y; j++) {
		
// 		var arr = ["0","A","B","C","D","E","F","G","H"];
// 		document.write('<td>' + arr[j] + '</td>');
// 	}

// 		document.write('</tr>');
// document.write("</table>");



// document.write("<table class='one' cellpadding='20'>");
// for (var i=1; i <= x; i++) {
// 	document.write('<tr>');
// 	for (var j=1; j <= y; j++) {
// 		document.write('<td>' + i + '.'  + j + '</td>');
// 	}
// 	document.write('</tr>');
// }
// document.write("</table>");

//===========================

// var text=prompt('write someting');
// var col=prompt('write color');
// document.write('<h1 style="color:'+ col +';">' + text + '</h1>');

//===========================

// var a=prompt('write a');
// var b=prompt('write b');


// var i = parseInt(a);
// var j = parseInt(b);

// debugger
// console.log(i);

// if (typeof i === 'number' && j === 'number')  {

// document.write('<h1>' + i + ' <br> ' + j + '</h1>');
// }
// else {
// 	document.write('<h1>' + "error" + '</h1>');
// }

//===========================

// var a=prompt('write a');
// var b=prompt('write b');

// 	if (isNaN(+a) || isNaN(+b)){  //+a - приводить до числа (синонім parseInt)
// 	console.log('incorrect value')
// 	} else {
// 	console.log(a * b);	
// 	}
	

//========= inkapsulacia ==================
// function count (){
// 	var a = 0;
// 	return function () {
// 		a = a + 1;
// 		console.log(a);
// 	}
// }

// var counter = count();
// var counter2 = count();

// counter();
// counter();
// counter();

// counter2();
// counter2();
//=========

// function mltpl (a, b){
// 	console.log (a * b);
// }
// mltpl (5, 6);


// var numberA = 1000;
// var object11 = {a: 1};
// function mltpl11 (numberA, object11){
// 	object11.a = 6;
// 	//console.log (numberA * numberB);
// }
// mltpl (5, object11);
// console.log (object11)

//========= masiv ========
// var a = [1,2,3];
// console.log(a);
// a.push(4);
// console.log(a);
// a.shift();
// console.log(a);
// a.unshift(11); 	//add firsh
// console.log(a);
// a.pop(); 		//delete last
// console.log(a);

// a.indexOf('44'); // search elements in array (-1 if not find)

// var a = [];

// for (var i = 0; i <= 10; i++){
// 	a.push([i]);	
// 	for (var j = 0; j <= 10; j++){
// 	a[i].push(j);
// }
// }
// console.log(a);