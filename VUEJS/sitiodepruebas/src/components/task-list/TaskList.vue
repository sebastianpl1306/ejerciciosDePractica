<template>
    <div class="container bg-white border border-radius p-5">
        <div class="row">
            <h2 class="col-12 title text-start mb-3">Lista de tareas</h2>
        </div>
        <div class="row text-start mb-4">
            <div class="col-11">
                <input class="form-control" placeholder="Introduzca la tarea que deseas realizar" v-model="nameTask"/>
            </div>
            <div class="col-1">
                <button class="btn btn-outline-secondary" @click="addNewTask"><i class="fa fa-plus"></i></button>
            </div>
        </div>
        <div class="row">
            <h4 class="col-12 text-start">Tienes 2 tareas pendientes</h4>
        </div>
        <Tasks
            @deletedTask="deletedTask"
            v-for="(task, index) in tasksToPerform"
            v-bind:task="task.nameTask"
            v-bind:completed = "true"
            v-bind:indice = "index"
            v-bind:key="index"></Tasks>
        <div class="row">
            <h4 class="col-12 text-start mt-4">Tareas completadas: 33%</h4>
        </div>
        <Tasks
            @deletedTask="deletedTask"
            @deletedCompletedTask="deletedCompletedTask"
            v-for="(task, index) in tasksCompleted"
            v-bind:task="task.nameTask"
            v-bind:completed = "false"
            v-bind:indice = "index"
            v-bind:key="index + 5"></Tasks>
        <div class="row text-center justify-content-center">
            <button class="btn btn-outline-secondary col-3 fs-5 me-3">Ocultar Completadas</button>
            <button class="btn btn-outline-secondary col-3 fs-5">Borrar Todas</button>
        </div>
    </div>
</template>

<script src="./taskList.js"></script>
<style scoped>
    @import "./taskList.scss";
</style>