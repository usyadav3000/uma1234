const persion={
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
console.log(msg)