<template>
    <div class="container-fluid">
        <div class="row clearfix">
            <nav id="navbar-example3" class='col-1 vh-100 navbar navbar-light bg-light flex-column align-items-stretch nav-shadow'>
                <nav class="flex-column">
                    <a class="nav-link mb-3 button-hover" href="#item-1" @click="openSecondMenu"><i class="fa fa-bars fa-lg"></i></a>
                    <a class="nav-link mb-3 button-hover" href="#item-2" id="pageOfSearch" @click="pageChange($event)"><i class="fa fa-search fa-lg"></i></a>
                    <a class="nav-link mb-3 button-hover" href="#item-3" id="pageOfEdit" @click="pageChange($event)"><i class="fa fa-pencil fa-lg"></i></a>
                    <a class="nav-link mb-3 button-hover" href="#item-4" id="pageOfUser" @click="pageChange($event)"><i class="fa fa-user fa-lg"></i></a>
                    <a class="nav-link mb-3 button-hover" href="#item-5" id="pageOfDeployment" @click="pageChange($event)"><i class="fa fa-envelope fa-lg"></i></a>
                </nav>
            </nav>
            <nav v-bind:class="'col-1 vh-100 position-absolute float-menu bg-light pt-2 '+isOpenSecondMenu">
                    <a class="nav-link mb-3 button-hover" href="#item-1">Menu</a>
                    <a class="nav-link mb-3 button-hover" href="#item-2">Inicio</a>
                    <a class="nav-link mb-3 button-hover" href="#item-3">Perfil</a>
                    <a class="nav-link mb-3 button-hover" href="#item-4">Editorial</a>
                    <a class="nav-link mb-3 button-hover" href="#item-5">Acerca de</a>
                </nav>
            <div class="col-11">
                <windowSearch
                    v-show="showWindowSearch">
                </windowSearch>

                <window-edit
                v-show="showWindowEdit">
                </window-edit>

                <window-user
                v-show="showWindowUser">
                </window-user>

                <window-deployment
                v-show="showWindowDeployment">
                </window-deployment>
            </div>
        </div>
    </div>
</template>

<script lang="js" src="./aplicationTasks.js"></script>
<style scoped>
    @import "./aplicationTasks.scss";
</style>