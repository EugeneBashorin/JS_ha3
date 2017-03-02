var testResult= document.getElementById("testResult");
var radioBut= document.getElementsByClassName("radioBut"); //Important
var checkBoxBut1= document.getElementsByClassName("checkBoxBut1"); //Important
var checkBoxBut2= document.getElementsByClassName("checkBoxBut2"); //Important

testResult.onclick = function() { getTestResult()}

//var printWrongAnswer = function (elem) {
//		 elem.parentNode.style.color = "blue";
//		 elem.parentNode.style.backgroundColor = "rgb(240, 90, 70)";
//}

//var printRightAnswer = function (elem) {
//		 elem.parentNode.style.color = "orange";
//		 elem.parentNode.style.backgroundColor = "rgb(5, 175, 30)";
//}
//For radiobutton
var radioButtonSelection = function (elem){
	var p = 0;
	for (var i=0; i<elem.length; i++){
		
		if (elem[i].checked && elem[i].value>0){    
			//printRightAnswer(elem[i]);	
			p++;
		}

		if(elem[i].checked && elem[i].value==0){ 
			//printWrongAnswer(elem[i]);
		}
	}
	return p;
}
//For CheckBoxes
var checkBoxiesSelection = function (elem){
	var z=0;
	var j = 0;
	for (var i=0; i<elem.length; i++){
		if(elem[i].checked && elem[i].value==0){ 
			//printWrongAnswer(elem[i]);
			z++;	 
			j = 0;
		}

		else if (elem[i].checked && elem[i].value > 0 && z == 0){
			//printRightAnswer(elem[i]);
			j += Number(elem[i].value)
		}
	}
	return j;
}
var resultMessage = function(j,f,k){
	var maxMark = 5;
	var Sum = + j + + f + +k;
	var procRes = Sum* 100/maxMark;
	alert("Вы набрали: "+Sum+ " баллов из " + maxMark+" возможных"+
			"\n    Процент правильных ответов: "+ procRes+"%");
}

function getTestResult(){
	var a = radioButtonSelection(radioBut)
	var b = checkBoxiesSelection(checkBoxBut1);	
	var c = checkBoxiesSelection(checkBoxBut2);	
	resultMessage(a,b,c);
}
/*Логика для чeкбоксов. Если отмечены все ответы правильно - 1 балл,
 Если есть хотя бы одна ошибка, даже если есть и верные ответы - 0 баллов,
 Если отмечена только часть ответов, и все верны, при этом нет ошибок - 
 насчитываються балы за верные ответы.*/