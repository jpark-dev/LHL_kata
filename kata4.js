const instructorWithLongestName = function(instructors) {
  
  //set a variable that keeps the index of the array with the longest name
  let currentLongest = 0;

  //loop to find the longest name by comparing the current longest name index and current name
  for (i = 0 ; i < instructors.length; i++){
    
    if (instructors[i].name.length > instructors[currentLongest].name.length) {
      
      //set the index of the current name as the longest name index
      currentLongest = i;
      
    }
  }

  //return the array that has the longest name
  return instructors[currentLongest];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));



/*
{name: "Jeremiah", course: "Web"}
{name: "Domascus", course: "Web"}
*/