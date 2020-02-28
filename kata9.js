let talkingCalendar = function(date) {
  
  // not using .substring, .replace

  // date input is alwasy in the format "yyyy/mm/dd"

  // build strings to store values for year, month and day
  let yyStr = "";
  let mmStr = "";
  let ddStr = "";

  // string to be returned
  let str = "";

  // 0 = year, 1 = month, 2 = day
  let seperatorCnt = 0;

  // loop string 
  for (i = 0; i < date.length; i++){
    
    // if a slash is found, add +1 to @seperatorCnt
    if (date[i] === "/"){
      seperatorCnt++;

    }

    // assign characters into appropriate variables      
    if (seperatorCnt === 0){
      yyStr += date[i];

    } else if (seperatorCnt === 1 && date[i] !== "/"){
      mmStr += date[i];

    } else if (seperatorCnt === 2 && date[i] !== "/"){
      ddStr += date[i];
    }
    
  }

  // format number month to string
  switch (mmStr) {

    case "01":
      mmStr = "January";
      break;

    case "02":
      mmStr = "February";
      break;

    case "03":
      mmStr = "March";
      break;

    case "04":
      mmStr = "April";
      break;

    case "05":
      mmStr = "May";
      break;

    case "06":
      mmStr = "June";
      break;
          
    case "07":
      mmStr = "July";
      break;

    case "08":
      mmStr = "August";
      break;
            
    case "09":
      mmStr = "September";
      break;

    case "10":
      mmStr = "October";
      break;
              
    case "11":
      mmStr = "November";
      break;

    case "12":
      mmStr = "December";
      break;

  }

  // format dd with suffix
  // if 2nd digit of day string is 1, concat "st", 2 with "nd", 3 with "rd", 
  if (ddStr[0] !== "1" && ddStr[1] === "1"){
    ddStr += "st";

  } else if (ddStr[0] !== "1" && ddStr[1] === "2"){
    ddStr += "nd";

  } else if (ddStr[0] !== "1" && ddStr[1] === "3"){
    ddStr += "rd";
  } else {
    ddStr += "th";
  }

  // format yy and dd to omit if the string begins with "0";
  // formatted ddStr
  let ddStrFormatted = "";
  
  // loop begins from 1 to omit first digit if the string starts with "0"
  if (ddStr[0] === "0"){
    for (i = 1; i < ddStr.length; i++){
      ddStrFormatted += ddStr[i];
    }
  } else {
    
    for (i = 0; i < ddStr.length; i++){
      ddStrFormatted += ddStr[i];
    }
    
  }

  // put the formated string to @ddStr
  ddStr = ddStrFormatted;
  
  // put yy/mm/dd variables in the correct output format
  str = mmStr + " " + ddStr + ", " + yyStr;

  // return constructed string
  return str;

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));