const taskManager = new TaskManager(0);

const nameId = document.getElementById("name_form");
const errMsg = document.getElementById("name_valid");
const addTaskBtn = document.getElementById("submit_btn");
const dateId = document.getElementById("date_form");
const dateErrMsg = document.getElementById("date_valid");
const statusId = document.getElementById("inputStatus");
const statusErrMsg = document.getElementById("status_valid");
const asignId = document.getElementById("assigned_form");
const asignErrMsg = document.getElementById("asign_valid");
const form = document.getElementById('collapseExample');
const descId = document.getElementById("description_form");
const descErrMsg = document.getElementById("desc_valid");

const validateDesc=()=>{
    if(nameId.value === "" || nameId.value.length<5){
        errMsg.style.color='red';
       return errMsg.innerHTML="<span>name can't be empty or smaller than 5</span>";
       }
     else if(descId.value === "" || descId.value.length>200){
        descErrMsg.style.color='red';
       return descErrMsg.innerHTML="<span>Description can't be empty or greater then 200 characters</span>";
       }
       else if(asignId.value === "" || asignId.value.length<5){
        asignErrMsg.style.color='red';
       return asignErrMsg.innerHTML="<span>assign value can't be empty or smaller than 5</span>";
       }
       else if(dateId.value === "" ){
        dateErrMsg.style.color='red';
       return dateErrMsg.innerHTML="<span>Invalid date</span>";
       }
       else if(statusId.value === ""){
        statusErrMsg.style.color='red';
       return statusErrMsg.innerHTML="<span>Status can't be empty</span>";
       }
       
       else{
           return  form.addEventListener('submit',dataCatching);
       }

}
addTaskBtn.addEventListener('click',validateDesc);

const dataCatching=()=>{
    errMsg.innerHTML="";
    descErrMsg.innerHTML="";
    asignErrMsg.innerHTML="";
    dateErrMsg.innerHTML="";
    statusErrMsg.innerHTML="";
   

    taskManager.addTask(
        nameId.value,
        descId.value,
        asignId.value,
        dateId.value,
        statusId.value
      );
     console.log("Task Name :" +  nameId.value.length);
     console.log("User Name:"+nameId.value);
        console.log("Description:"+descId.value);
        console.log("Assign To:"+asignId.value);
        console.log("Date:"+dateId.value);
        console.log("Status:"+statusId.value);

        nameId.value="";
        descId.value="";
        asignId.value="";
        dateId.value="";
        statusId.value="";
      

       
}