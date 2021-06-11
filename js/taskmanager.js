

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
}

  



