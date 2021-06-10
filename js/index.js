const nameId = document.getElementById("name_form");
const errMsg = document.getElementById("name_valid");
const addTaskBtn = document.getElementById("submit_btn");

const validateBox=()=>{
    if(nameId.value === "" || nameId.value.length<5){
        errMsg.style.color='red';
       return errMsg.innerHTML="<span>name can't be empty or smaller than 5</span>";
       }
};
addTaskBtn.addEventListener('click',validateBox);

//_____________ ____________ _____________ _________

const descId = document.getElementById("description_form");
const descErrMsg = document.getElementById("desc_valid");

const validateDesc=()=>{
    if(descId.value === "" || descId.value.length>200){
        descErrMsg.style.color='red';
       return descErrMsg.innerHTML="<span>Description can't be empty or greater then 200 characters</span>";
       }
};
addTaskBtn.addEventListener('click',validateDesc);
//_____________ ____________ _____________ _________

const asignId = document.getElementById("assigned_form");
const asignErrMsg = document.getElementById("asign_valid");

const validateAsign=()=>{
    if(asignId.value === "" || asignId.value.length<5){
        asignErrMsg.style.color='red';
       return asignErrMsg.innerHTML="<span>assign value can't be empty or smaller than 5</span>";
       }
};
addTaskBtn.addEventListener('click',validateAsign);

//_____________ ____________ _____________ _________

const dateId = document.getElementById("date_form");
const dateErrMsg = document.getElementById("date_valid");
let current = new Date();



const validateDate=()=>{
    // let ms1 = dateId.getTime;
    // let ms2 = current.getTime;
    // console.log(ms1);
    // console.log(ms2);
    if(dateId.value === "" ){
        dateErrMsg.style.color='red';
       return dateErrMsg.innerHTML="<span>Invalid date</span>";
       }
};
addTaskBtn.addEventListener('click',validateDate);

//_____________ ____________ _____________ _________

const statusId = document.getElementById("inputStatus");
const statusErrMsg = document.getElementById("status_valid");

const validateStatus=()=>{
    if(statusId.value === ""){
        statusErrMsg.style.color='red';
       return statusErrMsg.innerHTML="<span>Status can't be empty</span>";
       }
};
addTaskBtn.addEventListener('click',validateStatus);
