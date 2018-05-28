<template>
    <button id="animated">Hello world</button>
</template>

<script>

export default {
    name: 'mybutton',
    components: {
    },
    mounted: function () {
        this.$anime({
            targets: this.$el,
            backgroundColor: ['rgb(255,68,119)', 'rgb(0, 255, 0)'],
            scale: [.97, .75],
            direction: 'alternate',
            easing: 'easeInOutSine',
            duration: 4000,
            loop: true
        });
    }
}
</script>

<style src="./Button.style.scss"></style>