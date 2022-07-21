import axios from "axios"

export default{
    name: 'windowSearch',
    props: ['showWindow'],
    data: function(){
        return{
            name: "",
            imageHabbo: "",
            nameHabbo: "",
            habbo: {}
        }
    },
    methods: {
        searchNameHabbo: async function (){
            console.log("estoy entrando");
            const url = `https://api.habboapi.net/habbos/es/${this.name}`;
            await axios.get(url).then(response => {
                if (!response.data) {
                    console.log(response)
                }else{
                    console.log(response.data)
                    this.imageHabbo = response.data.figure_medium;
                    this.nameHabbo = response.data.name;
                    this.habbo = response.data
                }
            })
        //     const url = 'https://free.currconv.com/api/v7/countries?apiKey=1b8ab39c84de7f99c041';
        //     axios.get(url).then((response) => {
        //     Object.entries(response.data.results).forEach(([key, value])=>{
        //         console.log(key);
        //         this.paises.push(value);
        //     })
        // })
       }
    }
}