var testResult= document.getElementById("testResult");
var radioBut= document.getElementsByClassName("radioBut"); //Important
var checkBoxBut1= document.getElementsByClassName("checkBoxBut1"); //Important
var checkBoxBut2= document.getElementsByClassName("checkBoxBut2"); //Important

testResult.onclick = function() { getTestResult()}

var printWrongAnswer = function (elem) {
		 elem.parentNode.style.color = "blue";
		 elem.parentNode.style.backgroundColor = "rgb(240, 90, 70)";
}

var printRightAnswer = function (elem) {
		 elem.parentNode.style.color = "orange";
		 elem.parentNode.style.backgroundColor = "rgb(5, 175, 30)";
}
/*For radiobutton*/
var radioButtonSelection = function (elem){
	var p = 0;
	for (var i=0; i<elem.length; i++){
		
		if (elem[i].checked && elem[i].value>0){    
			p++;
		}

		if(elem[i].checked && elem[i].value==0){ 
			printWrongAnswer(elem[i]);
		}

		if (elem[i].value > 0){
			printRightAnswer(elem[i]);	
		}
	}
	return p;
}
//For CheckBoxes
var checkBoxiesSelection = function (elem){
	var z=0;
	var j = 0;
	for (var i=0; i<elem.length; i++){
		if (elem[i].value>0){
			printRightAnswer(elem[i]);	
		}

		if(elem[i].checked && elem[i].value==0){ 
			printWrongAnswer(elem[i]);
			z++;	 
			j = 0;
		}

		else if (elem[i].checked && elem[i].value > 0 && z == 0){
				j += Number(elem[i].value)
			}

		if (j > 1){
				j=Number(j.toFixed(1));
		}
	}
	return j;
}
	
function getTestResult(){
	var maxMark = 5;
	//RadioButtons
	var a = radioButtonSelection(radioBut)
	//CheckBoxes
	var b = checkBoxiesSelection(checkBoxBut1);	
	var c = checkBoxiesSelection(checkBoxBut2);	

	alert("Your Result is "+((+ a + +b + +c) * 100 / Number(maxMark))+"%");
}
/*Логика для чeкбоксов. Если отмечены все ответы правильно - 1 балл,
 Если есть хотя бы одна ошибка, даже если есть и верные ответы - 0 баллов,
 Если отмечена только часть ответов, и все верны, при этом нет ошибок - 
 насчитываються балы за верные ответы.*/