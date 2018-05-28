<template>
    <div id="app">
        Test
        <Home />
    </div>  
</template>

<script>
import Home from 'ROUTES/Home/Home.template';

export default {
    name: 'app',
    props: {
        app_name: {
            default: 'Hello World'
        }
    },
    components: {
        Home
    }
}
</script>

<style>
</style>
