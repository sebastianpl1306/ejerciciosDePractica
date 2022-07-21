import windowUser from '../windowUser/WindowUser.vue'
import windowEdit from '../windowEdit/WindowEdit.vue'
import windowSearch from '../windowSearch/WindowSearch.vue'
import windowDeployment from '../windowDeployment/WindowDeployment.vue'

export default{
    name: 'AplcationTasks',
    data: function(){
        return{
            isOpenSecondMenu: 'd-none',
            showWindowUser: true,
            showWindowEdit: false,
            showWindowSearch: false,
            showWindowDeployment: false
        }
    },
    components: {
        windowUser,
        windowEdit,
        windowSearch,
        windowDeployment
    },
    methods: {
        pageChange: function($event){
            if($event.target.id == "pageOfSearch"){
                this.showWindowUser = false;
                this.showWindowEdit = false;
                this.showWindowSearch = true;
                this.showWindowDeployment = false;
            }else if($event.target.id == "pageOfEdit"){
                this.showWindowUser = false;
                this.showWindowEdit = true;
                this.showWindowSearch = false;
                this.showWindowDeployment = false;
            }else if($event.target.id == "pageOfUser"){
                this.showWindowUser = true;
                this.showWindowEdit = false;
                this.showWindowSearch = false;
                this.showWindowDeployment = false;
            }else if($event.target.id == "pageOfDeployment"){
                this.showWindowUser = false;
                this.showWindowEdit = false;
                this.showWindowSearch = false;
                this.showWindowDeployment = true;
            }else{
                this.showWindowUser = false;
                this.showWindowEdit = false;
                this.showWindowSearch = false;
                this.showWindowDeployment = false;
            }
        },
        openSecondMenu: function() {
            this.isOpenSecondMenu = this.isOpenSecondMenu == 'd-none' ? '' : 'd-none';
        }
    }
}