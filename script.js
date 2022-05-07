const submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

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
