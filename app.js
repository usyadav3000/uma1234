//template literals in ES6

/*const persion={
    name: "umashankar",
    company: "adobe",
    course: "software engeeniring",
    website:"uma.com"
}
var r=10;
const pi=3.14;
let msg=`
<h1>list</h1>
  <ul>
   <li>${persion.name}</li>
   <li>${persion.company}</li>
   <li>${persion.course}</li>
 </ul>
`;
document.getElementById("para").innerHTML=msg;
console.log(msg) */


//arrow function => 
//1- code consize
//2- implicit return 
//3- no 'this' bonding

/*const squared=function(x){
  return x * x;
}*/
//const squared= x => x * x;
const person={
    name:"umashankar",
    rollno:"4576",
    college:"jssate noida",
    branch: "cse",
    batch: "c-2",
    social:{
      facebook:"@123",
      twitter:"uma@1234"
    }
  }
  //const name=person.name;
  //const rollno=person.rollno;
  //const college=person.college;
  const {name,rollno,college,branch,social}=person;//object destructuring
  console.log(name,rollno,college,branch,social.facebook);
  