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
const form = document.getElementById("collapseExample");
const descId = document.getElementById("description_form");
const descErrMsg = document.getElementById("desc_valid");
validationFail = 0;
//calanderblock function
dateId.min = new Date().toISOString().split("T")[0];

function clearFormField() {
    nameId.value= "";
    descId.value= "";
    asignId.value= "";
    dateId.value= "";
    statusId.value= "";

}




const validateDesc = () => {
    if (nameId.value.trim().length < 5) {
        errMsg.style.color = 'red';
        errMsg.innerHTML = "<span>Task name must be greater than 5 characters in length</span>";
        validationFail++;
    }
    else {
        errMsg.innerHTML = "";

    };

    if (descId.value.trim() === "" || descId.value.trim().length > 200) {
        descErrMsg.style.color = 'red';
        descErrMsg.innerHTML = "<span>Description can't be empty or greater then 200 characters</span>";
        validationFail++;
    }
    else {
        descErrMsg.innerHTML = "";
    }

    if (asignId.value.trim().length < 5||asignId.value.trim().length > 15) {
        asignErrMsg.style.color = 'red';
        asignErrMsg.innerHTML = "<span>Name must be greater than 5 characters in length</span>";
        validationFail++;
    }
    else {
        asignErrMsg.innerHTML = "";
    }
    if (dateId.value === "") {
        dateErrMsg.style.color = 'red';
        dateErrMsg.innerHTML = "<span>Invalid date</span>";
        validationFail++;
    }
    else {
        dateErrMsg.innerHTML = "";
    }
    if (statusId.value === "") {
        statusErrMsg.style.color = 'red';
        statusErrMsg.innerHTML = "<span>Status can't be empty</span>";
        validationFail++;
    } else {
        statusErrMsg.innerHTML = "";
    }


    if (validationFail > 0) {
        validationFail = 0;
        return;
    }
    else {
        taskManager.addTask(
            nameId.value,
            descId.value,
            asignId.value,
            dateId.value,
            statusId.value
        );
        console.log("Name: " + nameId.value);
        console.log("Description: " + descId.value);
        console.log("Assign To: " + asignId.value);
        console.log("Date: " + dateId.value);
        console.log("Status: " + statusId.value);
        clearFormField();
        taskManager.render();
    }
}

form.addEventListener('submit', validateDesc);

const reset = document.getElementById("reset");
reset.addEventListener('click',clearFormField);

const card=document.getElementById("card");

function done(event){
    
    if(event.target.classList.contains("bi-check-lg")){
        const parentTask =
      event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
      const taskId = Number(parentTask.dataset.taskId);

      const task = taskManager.getTaskById(taskId);
      task.status = "Done";
     taskManager.render();
    
    }
   
}
function hide(){
    const doneicon=document.getElementById("donebutton");

    doneicon.innerHTML="";
}

card.addEventListener('click',done,hide);


