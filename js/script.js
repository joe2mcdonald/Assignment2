//  /*    ---------------               BEGINNING OF MULTILINE COMMENT OF ALL CODE               ---------------- 

/*

//               YOU WILL NOT SEE THE CONSOLE.LOG AND ALERT MESSAGES FROM THE SCRIPT.JS FILE   	 
//	                  - THE STEPS ARE  COMMENTED OUT  USING A MULTILINE COMMENT 
    			
//          	REMOVE THE FIRST AND LAST LINE OF SCRIPT TO SEE THE CONSOLE.LOG AND ALERT AND PROMPT 


//                       			 JOE MCDONALD       SEPT 2015
//
// ==========================================================================================================
// ==========================================================================================================
//											 ASSIGNMENT2 
//								               PART 1 


//  ---------------------------------------------                            -------

 // window.onLoad = function() {  
// 		   alert("Page is loaded");  
//    }					       // WINDOWS ONLOAD  



//  ------------------------------------------      STEP 1    PROMPT  LENGTH   -------------   

var sName = prompt ("Please enter your Name: ", "enter name here");
alert ("STEP 1 - Hello " + sName + ", Your name is  " + sName.length + " long " );


//  ------------------------------------------      STEP 2    CHARACTER  -------------

var sName = prompt ("Please enter your Name: ", "enter name here");
var nNum = prompt (" Enter a number and a character in that position, from your Name will be displayed:   ", "enter number here");
var sChar = sName.charAt(nNum - 1);
alert ("STEP 2 - Your name is: " + sName +  " \nThe number you entered is: " + nNum + " \nA character of your name in that numeric position is: " + sChar);


//  ------------------------------------------      STEP 3   CONCATENATE   -------------

var sFirstName = prompt ("Please enter your First Name: ", "enter first name here");
var sLastName = prompt ("Please enter your Last Name: ", "enter last name here");
alert ("STEP 3 - Your name is: " + sFirstName.concat(sLastName) );

//  ------------------------------------------      STEP 4    INDEX     -------------

var sQuote = "The quick brown fox jumps over the lazy dog" ;
alert ("STEP 4 - Index of the word 'fox' in the " + sQuote +" is: " + sQuote.indexOf("fox") );

//  ------------------------------------------      STEP 5   INDEX OF LAST INSTANCE OF THE WORD     -------------

var sQuote = "The quick brown fox jumps over the lazy fox" ;
alert ("STEP 5 - The last Index of the word 'fox' in the " + sQuote +" is: " + sQuote.lastIndexOf("fox") );

//  ------------------------------------------      STEP 6    REPLACE       -------------

var sQuote = "The quick brown fox jumps over the lazy dog" ;
var sFullName = prompt ("Please enter your Full Name: ", "enter full name here");
alert ("STEP 6 - The new Quote inserting your name is: \n" + sQuote.replace("the lazy dog", sFullName));


//  ------------------------------------------      STEP 7    SEARCH STRING RETURNS INDEX       -------------
var sQuote = "The quick brown fox jumps over the lazy dog" ;
var sSearchWord = prompt ("Please enter a word to search for in the quote: \n" + sQuote, "enter word here");
alert ("STEP 7 - The index of the word you are searching for is: " + sQuote.search(sSearchWord));
alert (" \nThe character position of the word you are searching for is: " + (sQuote.search(sSearchWord) +1 ));



//  ------------------------------------------      STEP 8    STRING UPPERCASE  -------------

var old_string = "The quick brown fox jumps over the lazy dog" ;
var sSearchString = "the lazy dog";
var nSearchStringIndex = old_string.search(sSearchString);
var new_string = old_string.substr(nSearchStringIndex, sSearchString.length);
alert ("STEP 8 - The index of the word - "  + sSearchString + " - you are searching for in the quote: \n" + sQuote + " is: " + nSearchStringIndex + "\n The UPPER CASE of the new_string is: " + (new_string.toUpperCase()));

//  ------------------------------------------      STEP 9     TRIM      -------------

	
var sQuote = "      THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG    " ;
alert("STEP 9 - Trimmed Quote is: " + sQuote.trim() ); 


//  ------------------------------------------      STEP 10     CAPITALIZE      -------------
var sQuote = "the quick brown fox jumps over the lazy dog" ;
alert ("STEP 10 - Capitalized first letter is: " + (sQuote.substr(0,1).toUpperCase()) + (sQuote.substr(1, sQuote.lenght)));



// ==========================================================================================================
// ==========================================================================================================
//											 ASSIGNMENT2 

//								               PART 2 


//  ------------------------------------------      PART 1                 -------------  

//  ------------------------------------------      STEP 1    POSITIVE     -------------  

var nNum = prompt ("STEP 1 - Enter a number:   ", "enter number here");
console.log ("STEP 1 - The positive version of the number you entered is: " + Math.abs(nNum) );

//  ------------------------------------------      STEP 2   UP ROUND        -------------   
var nNum = prompt (" STEP 2 - Enter a floating point number:   ", "enter number here");
console.log ("STEP 2 - The rounded up number you entered is: " + Math.ceil(nNum) );




//  ------------------------------------------      STEP 3 		DOWN ROUND      -------------   

var nNum = prompt (" STEP 3 - Enter a floating point number:   ", "enter number here");
console.log ("STEP 3 - The rounded down number you entered is: " + Math.floor(nNum) );




//  ------------------------------------------      STEP 4    MIN MAX          -------------   

var nNum1 = prompt ("STEP 4 -  Enter 1st number :   ", "enter number here");
var nNum2 = prompt ("          Enter 2nd number :   ", "enter number here");
var nNum3 = prompt ("          Enter 3rd number :   ", "enter number here");
var nNum4 = prompt ("          Enter 4th number :   ", "enter number here");
var nNum5 = prompt ("          Enter 5th number :   ", "enter number here");

var nResultMin = Math.min(nNum1, nNum2, nNum3, nNum4, nNum5);
var nResultMax = Math.max(nNum1, nNum2, nNum3, nNum4, nNum5);
console.log ("STEP 4 - The largest number: " + nResultMax +  " &  smallest numbers: "  + nResultMin);

// ---------------------------------


//  ------------------------------------------      STEP 5  SQUARE ROOT    -------------   

var nNum = prompt ("STEP 5 - Enter a number:   ", "enter number here");
console.log ("STEP 5 - The square root of the number " + nNum + " is: " + Math.sqrt(nNum) )



//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  ------------------------------------------      PART2                 -------------  

//  ------------------------------------------      STEP 6    CURRENT DATE -------------   

var d = new Date();  
console.log("STEP 6 - The current date (month & day & year ) is: " + (d.getMonth() +1) + "/" +  d.getDate() + "/" + d.getFullYear() +  " \n The string version of the date is: " +  d.toDateString());



//  ------------------------------------------      STEP 7   DAYS IN MONTH  -------------   
alert("\n\nSTEP 7 - To see the number of days in the month");
var nMonth = prompt (" Enter a month(mm):   ", "enter month here");
var nYear = prompt (" Enter a year(yyyy):   ", "enter year here");

Date.prototype.daysinMonth = function(){
    var d= new Date(this.getFullYear(), this.getMonth()+1, 0);
    return d.getDate();
}

function daysinMonthfromInput(month,year){
    return (new Date(year,month-1,1)).daysinMonth();
}

console.log ("STEP 7 - " + (daysinMonthfromInput(nMonth,nYear)) + " days in the month of " + nMonth + " of year " + nYear );


//  ------------------------------------------      STEP 8   MONTH NAME              -------------   
alert("\n\nSTEP 8 - To see the mnonth's name for a particular date");
var d = new Date (prompt ("enter date here in the mm/dd/yyyy format :", "enter date here"     ));
var month=['January' , 'February' ,'March', 'April' , 'May' ,'June', 'July' , 'August' ,'September', 'October' , 'November' ,'December'];
var n = month[d.getMonth()];
console.log("Month name from " + d + " is " + n);



//  ------------------------------------------      STEP 9  WEEKEND        -------------   
var myDate = new Date (prompt ("STEP 9 - enter date here in the mm/dd/yyyy format :", "enter date here"     ));

if(myDate.getDay() == 6 || myDate.getDay() == 0)  {
	console.log("\n\nSTEP 9 - This " + myDate + " date is a Weekend!"); 
  }  else { 
		console.log("\n\nSTEP 9 - This " + myDate + " date is NOT a Weekend!");
         } ;


//  ------------------------------------------      STEP 10   YESTERDAY     -------------   

var myDate = new Date (prompt ("STEP 10 - enter today's (or your choice) date here in the mm/dd/yyyy format :", "enter date here"     ));
var day = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
console.log("\n\nSTEP 10 - Today is : "  + day[myDate.getDay() - 1 ] + "     Yesterday is : " + day[myDate.getDay() - 2 ]);


//  ------------------------------------------      STEP 11  CURRENT DATE FIRST LETTER               -------------  
var myDate = new Date (prompt ("STEP 11 - enter current (your choice) date in the mm/dd/yyyy format :", "enter date here"     ));
var day = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday'];
var sToDay = day[myDate.getDay() ] ;

console.log("\n\nSTEP 11 - The current (your choice) date (month / day / year ) is: " + (myDate.getMonth() + 1) + "/" +  myDate.getDate() + "/" +  myDate.getFullYear() +  " \n The string version of the date is: " +  myDate.toDateString() + "\n The first letter of the day is : " + sToDay.substr(0,1));



//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  ------------------------------------------      PART 3                 -------------  

//  ------------------------------------------      STEP 12   LARGER NUMBER    -------------   
var nNum1 = prompt ("STEP 12 -  Enter 1st number :   ", "enter number here");
var nNum2 = prompt ("           Enter 2nd number :   ", "enter number here");
console.log( "\n\nSTEP 12 - Show the largest of two numbers " );
if ( nNum1 > nNum2) {
	console.log (" Two entered numbers: " + nNum1 + ", " + nNum2 +  " The largest number is: " + nNum1 );
				 }
	else if (nNum2 > nNum1) { 
		console.log (" Two entered numbers:  " + nNum1 + ", " +  nNum2 +  " The largest number is: " + nNum2 );
	}
	  else { 
		  console.log (" Two entered numbers:  " + nNum1 + ", " +  nNum2 +  " The two numbers are equal" );
	  }



//  ------------------------------------------      STEP 13  GRADE          -------------   

var strArray = [ ["Ursula", 80] , ["Paul", 77] , ["Henry", 88], ["Tabitha", 95], ["Lucy", 68] ];
console.log( "\n\nSTEP 13 - Student Names &bMarks & Grades " );
for (var i = 0; i < strArray.length; i++) {
		
	if (strArray[i][1] < 60  ) {
			console.log( "Student: " + strArray[i][0] + " , mark = " + strArray[i][1] + " , Grade = F" ) ;
			
		} else if (strArray[i][1] < 70  ) {
			console.log( "Student: " + strArray[i][0] + " , mark = " + strArray[i][1] + " , Grade = D" );
			
        } else if (strArray[i][1] < 80  ) {
           console.log( "Student: " + strArray[i][0] + " , mark = " + strArray[i][1] + " , Grade = C" ) ;
		
		} else if (strArray[i][1] < 90  ) {
			console.log( "Student: " + strArray[i][0] + " , mark = " + strArray[i][1] + " , Grade = B" ) ;
			
		} else if (strArray[i][1] < 100 ) {
			console.log( "Student: " + strArray[i][0] + " , mark = " + strArray[i][1] + " , Grade = A" );
			
		} else {
			continue;	
		}};


//  ------------------------------------------      STEP 14   FOR LOOP              -------------   
console.log (" \n\n STEP 14 - Loop through 15 numbers showing if the number is EVEN or ODD ");
for (var i = 1; i <= 15; i++) {
		
		if (i % 2 == 0 ){
			console.log (" i = " + i + " is EVEN");
				 } else {
			console.log (" i = " + i + " is ODD");
				 }
		};
		


//  ------------------------------------------      STEP 15  MODULUS      -------------   
console.log (" \n \n STEP 15 - Loops through 100 numbers  \nif the number is a multiple of 3 show Fizz \nIf it is a multiple of 5 show Buzz \nIf it is a multiple of both 3 & 5 show FizzBuzz  ");
for (var i = 1; i <= 100; i++) {
		if ((i % 3 == 0) && (i % 5 ==  0) ){
			console.log (" i = " + i + "  FizzBuzz");
			 } else if (i % 5 == 0 ){
				  console.log (" i = " + i + "  Buzz");
			   } else if (i % 3 == 0){
				    console.log (" i = " + i + "  Fizz");
		    	   }
		     };



//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  ------------------------------------------      PART 4                 -------------  

//  ------------------------------------------      STEP 1   CONFIRM       -------------   


var bResponse = confirm ("STEP 1 - Are you ready to play my game?");

if (bResponse == true ) {
	alert("Awesome, our hero is waiting!");
	}	else {
	alert("Too bad, we're going to play anyway because our hero desperately needs your help!");
	}


//  ------------------------------------------      STEP 2  ALERT         -------------   
alert(" STEP 2 - You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. \n Your are disoriendted, lost hungry and extremely thirsty.\n You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of runing water to your left. \nYour back is against the wall..."); 



//  ------------------------------------------      STEP 3  PROMPT         -------------   

var sDirection = prompt ("STEP 3 - Which direction would you like to head (please enter forward, left, or right).");


//  ------------------------------------------      STEP 4    SWITCH       -------------   

switch(sDirection) {
case "forward" :
		alert("You walk about 100 yards and safely make your way out of the cave.");
		break;
case "left" :
		alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
		break;
case "right" :
		alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
		break;
default :
		alert("The ghost of Captain Chingadrea has condemned you to eternal damnation and you shall now urn in the hot excoriation for lifeless lowlifes for not choosing the correct option....loser.");
}


//  ------------------------------------------      STEP 5 - 6  SCORE         -------------   

var nScore = prompt ("STEP 5 - Please rate the game on a scale of 1 to 10");

if (nScore => 6 && nScore <= 10 ) { 
	alert(" Thank You , we will continue to make improvements to the game!"); 
	} else if (nScore >= 1 && nScore <= 5 )
        {
		alert(" Whatever, you weren't very good at this game anyway!");
		}
		else { 
			nScore = 10;
		}


//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//  ------------------------------------------      PART 5 GAME            -------------  

//  ------------------------------------------      STEP 1   RANDOM        -------------   

	var coinFlip = Math.random();
	alert("STEP 1 - coinFlip random number is " + coinFlip);


//  ------------------------------------------      STEP 2    CHOICE       -------------   

   var choice = prompt("STEP 2 - PLAYER - PLEASE ENTER - HEADS or TAILS " , "lower case please").toLowerCase();
   alert("Your choice is " + choice); 


//  ------------------------------------------      STEP 3   COIN FLIP     -------------   

	if (coinFlip < .5 ) {
      alert("STEP 3 - The coinFlip is less than .5 which represents - heads ");
    }    
     else if (coinFlip >= .5 ) {
     alert ("STEP 3 - The coinFlip is greater than or equal to .5 which represents - tails");
    }   
 
 
//  ------------------------------------------      STEP 4 - 7  WIN OR LOSE    -------------   


	if (coinFlip < .5 && choice == "heads" ) {
      alert("The flip was heads and you chose heads...you win!");
    }
       else if (coinFlip < .5 && choice == "tails" ) {
        alert ("The flip was heads but you chose tails...you lose!");
    } 
       else if (coinFlip >= .5 && choice == "heads" ) {
        alert ("The flip was tails but you chose heads...you lose!");
    } 
       else if (coinFlip >= .5 && choice == "tails" ) {
        alert ("The flip was tails and you chose tails...you win!");
    }
       else  {
        alert ("Error - you entered = " + choice + " - which is an incorrect value try again");
    }


//  ------------------------------------------      STEP 8  WHOLE NUMBER - BOOLEAN ------------   

	var coinFlip = Math.random(); 			// random number between 0 and 1
	alert("STEP 8 - coinFlip random DECIMAL number is: " + coinFlip);
    coinFlip = Math.round(coinFlip);	// round to nearest integer
	alert("STEP 8 - coinFlip random WHOLE number is: " + coinFlip);

	var bCoinFlip = !!coinFlip; 			// converts to Boolean value

   var choice = prompt("STEP 8 - PLAYER - PLEASE ENTER - HEADS or TAILS " , "lower case please").toLowerCase();
   alert("Your choice is " + choice);

// checks for boolean result 
	alert("STEP 8 - boolean value " + bCoinFlip);
	if (bCoinFlip == false ) {
       alert("STEP 8 - The bCoinFlip is false (equal to 0) which represents - heads ");
    	}    
     else if (bCoinFlip == true ) {
       alert ("STEP 8 - The bCoinFlip is true  equal to 1 ) which represents - tails");
	    }
	
	if (bCoinFlip == false && choice == "heads" ) {
      alert("The flip was heads and you chose heads...you win!");
    }
       else if (bCoinFlip == false && choice == "tails" ) {
        alert ("The flip was heads but you chose tails...you lose!");
    } 
       else if (bCoinFlip == true && choice == "heads" ) {
        alert ("The flip was tails but you chose heads...you lose!");
    } 
       else if (bCoinFlip == true && choice == "tails" ) {
        alert ("The flip was tails and you chose tails...you win!");
    }
       else  {
        alert ("Error - you entered = " + choice + " - which is an incorrect value try again");
    }


//  ------------------------------------------      PART 6 GAME REDUX      ------------- 
//  ------------------------------------------      STEP 1 - 4             -------------   
	var coinFlip;   
	for (var i = 1; i <= 10; i++) {
		
		coinFlip = Math.random();			// random number between 0 and 1
		alert("STEP 1 - coinFlip random DECIMAL number is: " + coinFlip);
		coinFlip = Math.round(coinFlip);	// round to nearest integer
		alert("STEP 1 - coinFlip random WHOLE number is: " + coinFlip);
		
		if (coinFlip == 0 ) {
			console.log("STEP 1 - The coinFlip is equal to 0 which represents - heads ");
    	}    
     	else if (coinFlip == 1 ) {
			console.log("STEP 1 - The coinFlip is equal to 1 which represents - tails");
	    }
	};


//  ------------------------------------------      PART 7  STREAK GAME    ------------- 
//  ------------------------------------------      STEP 1 -               -------------   
var coinFlip;

var i = 0;
do { 
	coinFlip = Math.random();			// random number between 0 and 1
	alert("STEP 1 - coinFlip random DECIMAL number is: " + coinFlip);
	coinFlip = Math.round(coinFlip);	// round to nearest integer
	alert("STEP 1 - coinFlip random WHOLE number is: " + coinFlip);
		
	if (coinFlip == 0 ) {
			console.log("STEP 1 - The coinFlip is equal to 0 which represents - heads ");
    	}    
    
	else if (coinFlip == 1 ) {
			console.log("STEP 1 - The coinFlip is equal to 1 which represents - tails");
	    }
	
	i += 1;
	console.log(i);
} while (coinFlip == 0);
console.log("I have reached the end!");


//  ------------------------------------------      PART 8  LOOPING TRIANGLE   ------------- 
//  ------------------------------------------      STEP 1 -               ------------- 

console.log (" PART 8 LOOPING TRIANGLE  ");
var strArray = ["#", "##", "###", "####", "#####",  "######", "#######"];
for (var i = 0; i < strArray.length; i++) {
	console.log (strArray[i]);			
    };


//  ------------------------------------------      PART 9  ODD OR EVEN    ------------- 
//  ------------------------------------------      STEP 1 -               ------------- 


console.log (" PART 9 ODD OR EVEN  ");
for (var i = 0; i <= 15; i++) {
		
		if (i % 2 == 0 ){
			console.log ( i + " is EVEN");
				 } else {
			console.log ( i + " is ODD");
				 }
		};



*/       //  -------------------            END OF MULTILINE COMMENT                    --------------------------------

		   
		   
 								   
								   