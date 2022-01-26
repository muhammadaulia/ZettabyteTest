// Expected Result : 
// [
//   { id: '1', name: 'Sherlock', score: 90 },
//   { id: '4', name: 'Budi', score: 85 }
// ]
// Direction :
// Return array of student for score is bigger than mean score (average score)

const students = [
    {
    id: "1",
    name: "Sherlock",
    score:90
    },
    {
    id: "2",
    name: "Genta",
    score: 75
    },
    {
    id: "3",
    name: "Ai",
    score: 80
    },
    {
    id: "4",
    name: "Budi",
    score:85
    }
  ];
  
  function result() {
    let mean = 0;
    let sum = 0;
    let answer = [];

    for (let i = 0; i < students.length; i++) {
        
        sum = sum + students[i].score;

        mean = sum / students.length;

        if (students[i].score > mean) {
            answer.push(students[i]);
        }
        return answer;
    }
    
  }
  
  console.log(result());