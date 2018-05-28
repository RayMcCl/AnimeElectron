<template>
    <canvas />
</template>

<script>
export default {
    name: 'Background',
    mounted: function () {
        this.$anime({
            target: this.$el,
            
        })
    }
};
</script>