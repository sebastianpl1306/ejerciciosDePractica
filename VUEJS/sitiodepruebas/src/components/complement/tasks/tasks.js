export default{
    name: 'Tasks',
    props: ['task','completed','indice'],
    data: function(){
        return {
        }
    },
    methods:{
        deletedTask(){
            this.$emit('deletedTask',this.indice)
        },
        deletedCompletedTask(){
            this.$emit('deletedCompletedTask',this.indice)
        }
    }
}