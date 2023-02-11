let pPage = 0.8;
let students = 110;
let slowStudents = 30;
let revisionP = 2;
let notesP = 6;
let costPSet = (revisionP + notesP) * pPage;
let totalPage = slowStudents * notesP + students * revisionP;
let totalCost = totalPage * pPage;

console.log(`total cost is ` + totalCost);
console.log(`total number of students ` + students);
console.log(`total number of  slow students ` + slowStudents);
console.log(`total number of pages to be printed ` + totalPage);
console.log(`total number of pages for slow students ` + slowStudents * notesP);
console.log(
  `total number of pages for all students only revision ` + students * revisionP
);

console.log(`cost per each set ` + costPSet);
console.log(`cost for slow students ` + costPSet * slowStudents);
console.log(`cost for normal ` + 80 * 0.8 * 2);
console.log(`total cost is ` + (192 + 128));
console;
