import taskList from '../task-list/TaskList.vue';
import AplcationTasks from '../windowAplication/aplication-tasks/AplicationTasks.vue';
import formLogin from '../form-login/FormLogin.vue';

export default{
    components: {
        taskList,
        AplcationTasks,
        formLogin
    },
    props:{
        title: String
    },
    data: function(){
        return{
            userName: "",
            userEmail: "",
            user: "",
            userPassword: "",
            userConfirmPassword: "",
            validUserName: "",
            validUserEmail: "",
            validUser: "",
            validPassword: "",
            validConfirmPassword: "",
            register: false
        }
    },
    methods: {
        validateName: function (){
             if(this.userName == ""){
                return false;
            }else{
                return true;
            }
        },
        validateEmail: function(){
            let reEmail=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
            return reEmail.test(this.userEmail);
        },
        validateUser: function(){
             if(this.user == ""){
                return false;
            }else{
                return true;
            }
        },
        validatePassword: function(){
            if(this.userPassword == ""){
                return false;
            }else{
                if(this.userPassword.length <= 3){
                    return false;
                }else{
                    return true;
                }
            }
        },
        validateConfirmPassword: function(){
            if(this.userPassword == this.userConfirmPassword && this.userPassword != ""){
                return true;
            }else{
                return false;
            }
        },
        validarFormularioRegistro: function(){
            this.validUserName = this.validateName(this.userName) ? "is-valid":"is-invalid";
            this.validUserEmail = this.validateEmail(this.userEmail) ? "is-valid":"is-invalid";
            this.validUser = this.validateUser(this.user) ? "is-valid":"is-invalid";
            this.validPassword = this.validatePassword(this.userPassword) ? "is-valid":"is-invalid";
            this.validConfirmPassword = this.validateConfirmPassword(this.userConfirmPassword) ? "is-valid":"is-invalid";
            if (this.validateName(this.userName) && this.validateEmail(this.userEmail) && this.validateUser(this.user) && this.validatePassword(this.userPassword) && this.validateConfirmPassword(this.userConfirmPassword)) {
                this.register = false;
            }else{
                this.register = true;
            }
        }
    }
}