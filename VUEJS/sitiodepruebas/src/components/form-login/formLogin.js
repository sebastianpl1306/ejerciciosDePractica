import AplcationTasks from '../windowAplication/aplication-tasks/AplicationTasks.vue';

    window.fbAsyncInit = function() {
        const FB = window.FB
        
        FB.init({
        appId      : '3026382040979376',
        cookie     : true,
        xfbml      : true,
        version    : 'v11.0'
        });
        
        FB.AppEvents.logPageView();   
        Window.FB=FB;
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

export default{
    name: 'form-login',
    components: {
        AplcationTasks
    },
    data: function(){
        return{
            login: true,
            usuario: '',
            FB: ''
        }
    },
    mounted: async function () {
        this.FB=Window.FB;
        this.FB.getLoginStatus(function(response) {
            console.log(response.status)
            if(response.status == "connected"){
                this.login = false;
            }
        });
    },
    methods: {
        handleLogin (e){
            if(!this.FB)
                this.FB=Window.FB
            if(e.target.id==="ingresar"){
                this.FB.login(this.ingresar);
                this.FB.getLoginStatus(function(response) {
                    console.log(response);
                });
            }
            else{
                this.FB.login(this.ingresar);
            }
        },
        ingresar: function(response) {
            if(response.status == "connected"){
                this.login = false;
            }
        },
        salir: function() {
            console.log("sali");
        }
    }
}