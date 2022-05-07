const submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

// Function declaration vs expression

function addSubmission(array, newName, newScore, newDate) {
  const newScoreSubmission = {
    // why does the color change like that sometimes?
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore > 60 ? true : false,
  };
  array.push(newScoreSubmission); // How are array and submissions related?
}

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1); // I'm not sure how indexes work still
}

// Not sure about this one...
function deleteSubmissionByName(array, name) {
  const index = array.findIndex((submissions) => submissions.name === name);
  array.splice(index, 1);
}

function editSubmission(array, index, score) {
  array[index].score = score;
  array[index].passed = score > 60 ? true : false;
}
