<template>
  <div id="app" :class="this.$route.name">
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'LiveStatics',
  components: {},
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {},
  mounted() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }
}
</script>
<style>

</style>
