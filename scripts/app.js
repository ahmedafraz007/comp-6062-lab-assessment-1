const myFullName = `ahmed afraz backer`;
const myStudentNumber = 1150679;
const TemplateLiterals = `${myFullName} - ${myStudentNumber}`

console.log(myFullName);
console.log(myStudentNumber);

console.log(TemplateLiterals);

const headerContent = document.querySelector(h1);
headerContent.innerHTML = TemplateLiterals;
headerContent.classList.add('headingPrimary');