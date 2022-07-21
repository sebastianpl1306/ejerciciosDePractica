import Tasks from '../complement/tasks/Tasks.vue'

export default{
    name:'taskList',
    data: function(){
        return {
            tasksToPerform: [
                {nameTask: "Estudiar Vue", completed: true},
                {nameTask: "Practicas desarrollando con Vue", completed: true}
            ],
            tasksCompleted: [{nameTask: "Hacer curso Next_U", completed: false}],
            nameTask: ""
        }
    },
    components:{ Tasks },
    methods: {
        addNewTask (){
            this.tasksToPerform.push({nameTask: this.nameTask, completed: true});
            this.nameTask = "";
        },
        deletedTask: function(index){
            this.tasksCompleted.push(this.tasksToPerform[index]);
            this.tasksToPerform.splice(index,1);
        },
        deletedCompletedTask: function(index){
            this.tasksCompleted.splice(index,1);
        }
    }
}