<template>
    <div>
        <b-badge>Testing WOOOsssdfssds</b-badge>
        <mybutton>Test</mybutton>
        <v-polygon />
    </div>
</template>

<script>
import { Badge } from 'bootstrap-vue/es/components';
import Button from 'COMPONENTS/Button/Button.template'
import Polygon from 'COMPONENTS/Polygon/Polygon';

export default {
    name: 'home',
    props: {
    },
    components: {
        'Badge': Badge,
        'mybutton': Button,
        'v-polygon': Polygon
    }
}
</script>
<style lang="scss" src="./Home.style.scss"></style>