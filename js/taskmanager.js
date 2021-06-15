function createTaskHtml(name,description,assignTo,dueDate,status){
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center col-sm-6 col-lg-4">
    <div class="card border-light mb-3">
    <div class="card-header bg-warning d-flex justify-content-between">
      <span class="fw-bold">${dueDate}</span>
      <span class="text-muted small">Status: ${status}</span>
    </div>
    <div class="card-body">
      <h5 class="card-title">${name}</h5>
      <p class="card-text">${description}</p>

      <div class="card-footer bg-transparent border-warning d-flex justify-content-between">
        <div class="">
          <i class="bi bi-person text-success"></i> <small class="text-muted">${assignTo}</small>
        </div>
        <div>
          <a class="p-2" href="#"><i class="bi bi-trash text-danger"></i></a>
          <a class="p-2" href="#"><i class="bi bi-pencil text-success"></i></a>
        </div>
      </div>
    </div>

  </div>
  </li>
`
return html;

};

 class TaskManager{
    constructor(currentId=0)
    {
        this.tasks=[];
        this.currentId=currentId;
     }
     
     addTask(name,discription,assignTo,dueDate,status){
        
        const task ={
            id:this.currentId++,
            name:name,
            discription:discription,
            assignTo:assignTo,
            dueDate:dueDate,
            status:status
        };
        this.tasks.push(task);
    }
    render(){
        const tasksHtmlList=[];
        for(let i=0;i<this.tasks.length;i++){
            const task=this.tasks[i];

            const date = new Date(task.dueDate);
            const formattedDate=date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

            const taskHtml=createTaskHtml( 
                task.name,
                task.discription,
                task.assignTo,
                formattedDate,
                task.status
              );
              tasksHtmlList.push(taskHtml);
         }

         const tasksHtml=tasksHtmlList.join("");

         const tasksList=document.querySelector('#card');
         tasksList.innerHTML=tasksHtml;
    }
}

  



