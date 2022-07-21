<template>
    <div class="container" v-if="!register">
        <div class="row text-center">
            <form class="border row col-10 py-4">
                <h1 class="col-12">{{title}}</h1>
                <label for="" class="col-12 text-start">Nombre Completo</label>
                <div class="input-group mb-3">
                    <span class="input-group-text bg-primary" id="basic-addon1"><i class="fa fa-user fa-lg"></i></span>
                    <input type="text" v-bind:class="'form-control '+ validUserName" placeholder="Nombre Completo" aria-label="Username" v-model="userName">
                </div>
                <label for="" class="col-12 text-start">Correo Electrónico</label>
                <div class="input-group mb-3">
                    <span class="input-group-text bg-primary" id="basic-addon1"><i class="fa fa-envelope fa-lg"></i></span>
                    <input type="text" v-bind:class="'form-control '+ validUserEmail" placeholder="Correo Electrónico" aria-label="Username" v-model="userEmail">
                </div>
                <label for="" class="col-12 text-start">Nombre de usuario</label>
                <div class="input-group mb-3">
                    <span class="input-group-text bg-primary" id="basic-addon1"><i class="fa fa-users fa-lg"></i></span>
                    <input type="text" v-bind:class="'form-control '+ validUser" placeholder="Nombre de usuario" aria-label="Username" v-model="user">
                </div>
                <label for="" class="col-12 text-start">Contraseña</label>
                <div class="input-group mb-3">
                    <span class="input-group-text bg-primary" id="basic-addon1"><i class="fa fa-lock fa-lg"></i></span>
                    <input type="password" v-bind:class="'form-control '+ validPassword" placeholder="Contraseña" aria-label="Username" v-model="userPassword">
                </div>
                <label for="" class="col-12 text-start">Confirme la Contraseña</label>
                <div class="input-group mb-3">
                    <span class="input-group-text bg-primary" id="basic-addon1"><i class="fa fa-lock fa-lg"></i></span>
                    <input type="password" v-bind:class="'form-control '+ validConfirmPassword" placeholder="Confirme la Contraseña" aria-label="Username" v-model="userConfirmPassword">
                </div>
                <button class="col-2 btn btn-primary m-auto" v-on:click.stop.prevent='validarFormularioRegistro'>Registrame</button>
            </form>
        </div>
    </div>
    <form-login v-else></form-login>
</template>

<script lang="ts" src="./formRegister.js"></script>
<style scoped>
    @import "./formRegister.scss";
</style>