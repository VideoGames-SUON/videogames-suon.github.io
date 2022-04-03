/*1. pop-up window*/
alert(Date());

/*2.image change*/
function MoverCimg(){
	document.getElementById('img').src = "https://s1.ticketm.net/dam/a/8a1/8cd0fadf-6058-4da5-8831-b4414cdc68a1_1558811_TABLET_LANDSCAPE_LARGE_16_9.jpg";
}

/*3.paragraph change*/
function paraC(){
	document.getElementById('para').innerHTML = "New ~(^V^)~";
}

/*4.key alert*/
function key() {  
  alert("Hi");  
}
document.onkeydown = key;

/*5.three changes*/
function tc(){
	var cha = document.getElementById('thc').style; 
	cha.backgroundColor= "orange";
	cha. fontFamily = "arial";
	cha.textAlign= "center";
}

/*6.temp changes*/
function cal(){
	document.getElementById('twoFC').innerHTML = "-6.66667";
}

/*7. calculator*/
function cal2(){
	var n1 = parseInt(prompt("enter a number")); 
	var n2 = parseInt(prompt("enter another number")); 
	document.getElementById('cal3').innerHTML = n1 + n2;
}


/*8. Name*/
function name3(){
	var fN = prompt("what is your first name?"); 
	var lN = prompt("what is your last name? ");  
	alert("Nice to see you"+ " " + fN + " "+lN  )
}





