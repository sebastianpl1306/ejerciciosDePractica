<template>
  <div id="app">
    <FormRegister title="Registro del sistema"/>
  </div>
</template>

<script>
import FormRegister from './components/form-registry/FormRegister.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'

export default {
  name: 'App',
  components: {
    FormRegister
  }
}
</script>

<style>
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
