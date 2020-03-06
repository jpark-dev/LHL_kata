const organizeInstructors = function(instructors) {
  
  // define a new object for output
  const newObj = {};
  // define a new object to store course names
  const courseArr = [];
  
  // loop to store course names in array
  for (let i = 0; i < instructors.length; i++) {
    courseArr.push(instructors[i].course);
  }
  
  // loop through the array with course names
  for (let i = 0; i < courseArr.length; i++) {

    // define an array to store names as a value (key:value === iOS : ["Samuel"])
    const nameArr = [];
    
    // loop to find matching names with courses
    for (let j = 0; j < instructors.length; j++) {

      // if the course name stored in @courseArr matches
      if (instructors[j].course === courseArr[i]) {
        // push current name into @nameArr
        nameArr.push(instructors[j].name);
      }
    }

    // set course : name as return object
    newObj[courseArr[i]] = nameArr;
    
  }
  return newObj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));