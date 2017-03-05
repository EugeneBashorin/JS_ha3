
var displ= document.getElementById("resCalcDisplay"); //Important+++
var but= document.getElementsByTagName("button"); 	 //Important

for (var i=0; i<but.length; i++){
		but[i].onclick = function(){ 
							if (Number(this.value)|| this.value == 0){
									EnterNumb(this.value);
								}
							else {EnterOperator(this.value);
									}
								}
							}

function EnterNumb(numbValue){
	if(displ.value == "0"){
	 	displ.value = numbValue;
		}
	else{
		 displ.value = displ.value + numbValue;
		 }
}

var memberValue1;
var memberValue2;
var singn;
var countOfOperation = 0; // To understand that the command was applied

function EnterOperator(operand){
	switch (operand){
		case "+" : 
			memberValue1 = displ.value;
			singn = "+";
			displ.value = "";
			break;

		case "-" : 
			memberValue1 = displ.value;
			singn = "-";
			displ.value = "";
			break;	

		case "*" :
			memberValue1 = displ.value;
			singn = "*";
			displ.value = "";
			break;	

		case "/" :
			memberValue1 = displ.value;
			singn = "/";
			displ.value = "";
			break

		case "=" : 	
			if (countOfOperation == 0){
				memberValue2 = displ.value;
				displ.value = "";
				countOfOperation++;
				ResultOfOperation(singn,memberValue1,memberValue2);
				}
			break;

		case "." : 
			if (displ.value.indexOf('.') == (-1)) {  
					 displ.value = displ.value + "." 
					}
			break;

		case "plusMinus" :
			displ.value = Number(displ.value) * (-1); 
			break;	

		case "C" :
			ClearDisplayFunc();	 
			break;

		default: 
			ClearDisplayFunc();
			break;
		}
}

function ClearDisplayFunc(){                  //Reset
	displ.value = 0;
	memberValue1 = 0;
	memberValue2 = 0;
	singn = "";
	countOfOperation = 0;
	}

function ResultOfOperation(a,b,c){
	if(Number(b) && Number(c)|| Number(c) == 0){							//protection against keyboard symbols
		switch (a){
			case "+" :  
				displ.value = Number(b) + Number(c);
				break;

			case "-" :
				displ.value = Number(b) - Number(c);
				break;	

			case "*" : 
				displ.value = Number(b) * Number(c);		 
				break;	

			case "/" : 
				if(c == 0){					       //protection against divide by a zero
							alert("You can't divide on the 'null'");
							return ClearDisplayFunc();
							}
				else{
					 displ.value = Number(b)/Number(c);	
						}
				break;
				}
		}
	else{	
		alert("One of the members contains symbols. Try again.")
		return ClearDisplayFunc();
		}	
	
}

/*if(Number(displ.value)%1 != 0){
displ.value;}
else if (displ.value.indexOf('.') == (-1)) { displ.value = displ.value + "." }*/

/*if(Number(but[15].value)) // fix the bug ==> 0 is NaN
console.dir("yes");
else console.dir("no");*/