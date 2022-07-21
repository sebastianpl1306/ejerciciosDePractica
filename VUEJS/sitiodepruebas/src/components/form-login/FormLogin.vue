<template>
    <div class="container" v-if="login">
        <div class="row pt-5">
            <div class="col-12">
                <h1>Iniciar Sesión</h1>
                <button 
                    class="btn bg-primary text-white font-weight-bold"
                    @click="handleLogin($event)" id="ingresar"><i class="fa fa-facebook-f pr-1"></i><span class="ml-5"> Iniciar sesión con Facebook</span></button>
            </div>
        </div>
    </div>
    <Aplcation-Tasks v-else></Aplcation-Tasks>
</template>

<script lang="ts" src="./formLogin.js"></script>