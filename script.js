const submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

// Function declaration vs expression

function addSubmission(array, newName, newScore, newDate) {
  const newScoreSubmission = {
    // why does the color change like that sometimes? indicates something I haven't used yet
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore > 60 ? true : false,
  };
  array.push(newScoreSubmission); // How are array and submissions related? Array lets me use any array, allows the function to be used later on in the code
}

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}

// Not sure about this one...
function deleteSubmissionByName(array, name) {
  const index = array.findIndex((submission) => submission.name === name); // going through and checking each of the items in the array
  array.splice(index, 1);
}

function editSubmission(array, index, score) {
  array[index].score = score;
  array[index].passed = score > 60 ? true : false;
}

function findSubmissionByName(array, name) {
  //   return name === array.find(name);
  let foundStudent = array.find((student) => student.name === name);
  return foundStudent;
}

// console.log(findSubmissionByName(submissions, "Jill"));

// ???
function findLowestScore(array) {
  //   return array.forEach((score) => {
  //     Math.min(score);
  //   });
  let studentLow = array[0];
  for (let student of array) {
    if (student.score < studentLow.score) {
      studentLow = student;
    }
  }
  return studentLow;
}

// console.log(findLowestScore(submissions));

// use for...of loop
function findAverageScore(array) {
  let total = 0;
  for (student of array) {
    total += student.score;
    // console.log(student.score); // for debugging reasons
  }
  return total / array.length;
}

// console.log(findAverageScore(submissions));

// filter method to find passing scores
const filterPassing = (array) => {
  const passingSubmissions = array.filter((passed) => array.passed !== passed);
  return passingSubmissions;
};

// console.log(filterPassing(submissions));

// filter method to find scores of 90 and above
function filter90AndAbove(array) {
  const _90AndAbove = array.filter((array) => array.score >= 90);
  return _90AndAbove;
}

// console.log(filter90AndAbove(submissions));

// Extra challenges

const createRange = (start, end) => {
  let range = [];
  for (let i = start; i <= end; i++) {
    range.push(i);
    // console.log(i);
  }
};

// console.log(createRange(1, 10));

const countElements = (array) => {};
