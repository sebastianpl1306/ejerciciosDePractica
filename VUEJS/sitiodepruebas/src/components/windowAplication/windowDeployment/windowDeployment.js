import axios from "axios"

export default{
    name: 'windowDeployment',
    props: ['showWindow'],
    data: function(){
        return{
            paises: [],
            currency: {},
            newCurrency: {},
            countriesFromApi: [],
            countryRate: '',
            ammountChangeCurrency: '',
            convert: '',
            key: ''
        }
    },
    created: function(){
        this.currency = 'COP';
        const url = 'https://free.currconv.com/api/v7/countries?apiKey=1b8ab39c84de7f99c041';
        axios.get(url).then((response) => {
            Object.entries(response.data.results).forEach(([key, value])=>{
                this.key = key;
                this.paises.push(value);
            })
        })
    },
    methods: {
        changeCurrency(){
            console.log("enviando");
            const page = 'https://free.currconv.com/api/v7/convert?apiKey=';
            const key = '1b8ab39c84de7f99c041'
            const url = page+key+'&q=USD_'+this.newCurrency.currencyId+'&compact=y';
            axios.get(url).then((response) => {
                Object.entries(response.data).sort().forEach(([key, value])=>{
					this.countryRate=value.val
                    console.log(key)
				})
            })

            this.convert = (this.ammountChangeCurrency * this.countryRate).toFixed(2);
        },
        changeNewCurrency(value){
            const ejemplo = this.paises.filter(x => {return x.currencyId == value});
            this.newCurrency = !ejemplo[0] ? '' : ejemplo[0];
        },

    }
}