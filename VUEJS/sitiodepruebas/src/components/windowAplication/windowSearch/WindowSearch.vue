<template>
    <div class="container-fluid py-5 vh-100">
        <div class="row">
            <h2 class="col-12">WindowSearch</h2>
        </div>
        <div class="row">
            <div class="col-11">
                <input type="text" class="form-control mb-4" placeholder="Ingrese el nombre de usuario" v-model="name">
            </div>
            <div class="col-1">
                <button class="btn btn-primary" @click="searchNameHabbo">Buscar</button>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="container text-right">
                    <img :src="imageHabbo" alt="">
                    <h3>{{nameHabbo}}</h3>
                    <p><small>{{habbo.motto}}</small></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js" src="./windowSearch.js"></script>