
window.addEventListener('load',bindEvents);
let addbtn=document.getElementById('add');
let updatebtn=document.getElementById('edit');
let name=document.getElementById('name');
let email=document.getElementById('email');
let phno=document.getElementById('phone')
let op=document.getElementById('output');
let detailsArr=[];
let detailsObj={};
function bindEvents(){
   addbtn.addEventListener('click',saveInfo);
   updatebtn.addEventListener('click',updateInfo)

}

function saveInfo(){
    let nameValue=name.value;
    let emailValue=email.value;
    let phnoValue=phno.value;
    detailsObj={"name":nameValue,"email":emailValue,"phno":phnoValue}
    detailsArr.push(detailsObj);
   displayInfo(detailsArr);
  


    
}

function displayInfo(detailsArr){
    let statement=``;
    detailsArr.forEach((obj,i) => {
        
    
   
   
    statement +=`<tr>
    <td class="text-white" scope="row">${i}</td>
    <td class="text-white">${obj.name}</td>
    <td class="text-white">${obj.email}</td>
    <td class="text-white">${obj.phno}</td>
    <td><button class="btn btn-danger mx-2" onClick=deleteInfo(${i}) >Remove</button><button class="btn btn-warning" onClick=editInfo(${i})>Edit</button></td>
  </tr>`
   
});
 op.innerHTML=statement;
}

function deleteInfo(id){
    name.value="";
    email.value="";
    phno.value="";
    detailsArr.splice(id,1);
    displayInfo(detailsArr);
}

function editInfo(id){
    let editObj=detailsArr[id];
    name.value=editObj.name;
    email.value=editObj.email;
    phno.value=editObj.phno;
   
}

function updateInfo(id){
    console.log("+ clicekd");
    editedObj={"name":name.value,"email":email.value,"phno":phno.value};
    detailsArr.splice(id,1,editedObj);
    displayInfo(detailsArr);


}

