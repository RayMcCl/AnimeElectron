<template>
    <div id="app">
        Test
    </div>  
</template>

<script>
import { Badge } from 'bootstrap-vue/es/components';

export default {
    name: 'app',
    props: {
    //TODO: REFACTOR
        app_name: {
            default: APP_NAME
        }
    },
    components: {
        Badge
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  align-content: center;
  width: 100%;
}

.container {
  margin-top: 1em;
}
</style>
