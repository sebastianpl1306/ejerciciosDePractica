<template>
    <div class="container-fluid py-5 vh-100">
        <!-- <div class="row pb-5">
            <h2 class="col-10">Convertidor de Monedas</h2>
            <select name="" id="" class="col-2" @change="changeNewCurrency($event.target.value)">
                <option :value="null" selected>Seleccione...</option>
                <option class="" 
                v-for="(pais, index) in paises"
                :value="pais.currencyId"
                v-bind:key="index">{{pais.name}} - {{pais.currencyId}}</option>
            </select>
        </div>
        <div class="row px-4">
            <div class="col-6 text-start">
                <img src="https://www.countryflags.io/co/flat/64.png">
                <h3>Colombia</h3>
                <input class="form-control" type="text" :placeholder="'Valor de cambio: 1 COP'" v-model="ammountChangeCurrency">
            </div>

            <div class="col-6 text-start">
                <img :src="newCurrency.id ? 'https://www.countryflags.io/'+newCurrency.id+'/flat/64.png' : 'https://www.countryflags.io/co/flat/64.png'">
                <h3>{{!newCurrency.name ? "No ha seleccionado ninguno" : newCurrency.name}}</h3>
                <input class="form-control" type="text" :placeholder="'Valor de cambio: 1 '+newCurrency.currencyId" :value="convert">
            </div>
        </div>
        <div class="row px-4 pt-4">
            <h3 class="text-start col-9">Valor de la moneda: ${{countryRate}}</h3>
            <input type="button" class="col-3 btn btn-success" value="Convertir monedas" @click="changeCurrency()">
        </div> -->
    </div>
</template>

<script lang="js" src="./windowDeployment.js"></script>