<template>
  <div class="section-footer">
    <router-link :to="{ path: $routerHistory.previous().path }" class="btn-style transparent">
      <img src="../assets/images/btn-back-arrow.svg" alt="back-arrow">{{ backBtnText }}
    </router-link>
    <router-link :to="NextBtnLink" class="btn-style ">{{ nextBtnText }}
      <img src="../assets/images/btn-white-arrow.svg" alt="forward-arrow">
    </router-link>
  </div>

</template>

<script>


export default {
  name: 'FooterComponent',
  props: ['backBtnText', 'nextBtnText', 'NextBtnLink'],
  components: {},
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
