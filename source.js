
/*method to decrement tip - TIP DECREMENT BUTTON*/
function tipDecrement(){
	var tipPercent = document.getElementById("tipPercent").value;
	var tipInNumber = parseInt(tipPercent);
	document.getElementById("tipPercent").value = --tipInNumber;
}


/*method to increment tip - TIP INCREMENT BUTTON*/
function tipIncrement(){
	var tipPercent = document.getElementById("tipPercent").value;
	var tipInNumber = parseInt(tipPercent);
	document.getElementById("tipPercent").value = ++tipInNumber;
}


/*method to decrement number of people - NUMBER OF PEOPLE DECREMENT BUTTON*/
function numberOfPeopleDecrement(){
	var numberOfPeople = document.getElementById("numberOfPeople").value;
	var numberOfPeopleInNumber = parseInt(numberOfPeople);
	document.getElementById("numberOfPeople").value = --numberOfPeopleInNumber;
}


/*method to increment number of people - NUMBER OF PEOPLE INCREMENT BUTTON*/
function numberOfPeopleIncrement(){
	var numberOfPeople = document.getElementById("numberOfPeople").value;
	var numberOfPeopleInNumber = parseInt(numberOfPeople);
	document.getElementById("numberOfPeople").value = ++numberOfPeopleInNumber;
}



/* Method to handle all major calculation whenever input changes*/
function calculator(){

	var bill = document.getElementById("bill").value;
	var message1 = document.getElementById("p01");
	message1.innerHTML = "";
	var flag=1;

	//Handle Exceptions for Bill 
	try{
		if(bill == "") throw "can't be empty !";
		if(isNaN(bill)) throw "can't be an invalid number !";
        bill = Number(bill);
        if(bill < 0) throw "can't be negitive !";
        if(bill > 100000) throw "can't be above 100000 !";	
    }
    catch(err){
        message1.innerHTML = "Bill " + err;
        document.getElementById("tipAmount").innerHTML = "$0.00";
        document.getElementById("totalAmount").innerHTML = "$0.00";
        flag=0;
    }

    var tipPercent = document.getElementById("tipPercent").value;
    var message2 = document.getElementById("p02");
    message2.innerHTML = "";


    //Handle Exceptions for Tip 
    try{
  	    if(tipPercent == "") throw "can't be empty !";
	    if(isNaN(tipPercent)) throw "can't be an invalid number !";
        tipPercent = Number(tipPercent);
        if(bill == 0){ if(tipPercent != 0) throw "can't be paid for zero bill !"; }
        if(tipPercent < 0) throw "can't be negitive !";
        if(tipPercent > 100) throw "can't be above 100% !";
    }
   catch(err){
  	   message2.innerHTML = "Tip " + err; 
  	   document.getElementById("tipAmount").innerHTML = "$0.00";
       document.getElementById("totalAmount").innerHTML = "$0.00";
  	   flag=0;
    }

    var numberOfPeople = document.getElementById("numberOfPeople").value;
    var message3 = document.getElementById("p03");
    message3.innerHTML = "";


    //Handle Exception for Number of People
    try{
  	    if(numberOfPeople == "") throw "can't be empty !";
  	    if(isNaN(numberOfPeople)) throw "can't be an invalid number !";
  	    numberOfPeople = Number(numberOfPeople);
  	    if(numberOfPeople < 0) throw "Can't be negitive !";
  	    if(bill != 0){ if(numberOfPeople == 0) throw "can't be zero for bill above $0.00 !";}
  	    if(numberOfPeople > 100) throw "can't be above 100 !";
  	    if(!(Number.isInteger(numberOfPeople))) throw "can't be a fraction !";
    }
    catch(err){
  	    message3.innerHTML = "Number of people " + err;
  	    document.getElementById("tipAmount").innerHTML = "$0.00";
        document.getElementById("totalAmount").innerHTML = "$0.00";
  	    flag=0;
    }

    //Return if Any Input is Invalid
    if(flag == 0){
        return;
    }

    //Else Calculate and Update Result
    else if(numberOfPeople != 0){
        var tipPerPerson = ((bill * tipPercent)/100)/numberOfPeople ;
        var totalPerPerson = ((bill * tipPercent)/100)/numberOfPeople + bill/numberOfPeople;
        document.getElementById("tipAmount").innerHTML = "$" + tipPerPerson.toFixed(2);
        document.getElementById("totalAmount").innerHTML = "$" + totalPerPerson.toFixed(2);
    }

}

