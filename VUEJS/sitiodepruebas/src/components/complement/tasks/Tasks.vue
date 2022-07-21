<template>
    <div class="row">
        <div class="form-check text-start col-12 mb-3" v-if="completed">
            <input class="form-check-input checkTask" type="checkbox" value="" id="flexCheckDefault" @change="deletedTask">
            <label class="form-check-label mx-3 fs-5 pt-2" for="flexCheckDefault">
                {{task}}
            </label>
        </div>
        <div class="form-check text-start col-12 mb-3" v-else>
            <input class="form-check-input checkTask col-1" type="checkbox" value="" id="flexCheckDefault" disabled="false">
            <label class="col-11 form-check-label mx-3 fs-5 pt-2 text-secondury text-decoration-line-through" for="flexCheckDefault">
                {{task}}
            </label>
            <span class="col-1 text-white"><i class="fa fa-trash fa-2x bg-danger p-2" @click="deletedCompletedTask"></i></span>
        </div>
    </div>
</template>

<script src="./tasks.js"></script>
<style scoped>
    @import url('./task.scss');
</style>