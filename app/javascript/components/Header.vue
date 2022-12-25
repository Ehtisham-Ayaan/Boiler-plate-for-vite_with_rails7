<template>
  <header id="header">
    <div class="row">
      <div class="col-md-9  align-self-center">
        <h2 v-html="pageTitle"></h2>
      </div>
      <div class="col-md-3 mt-2 text-center">
        <P>{{ linkText }}
          <router-link :to="getHelpLink" class="d-inline-block">{{ linkSpanText }}</router-link>
        </P>
      </div>
    </div>
  </header>

</template>

<script>


export default {
  name: 'HeaderComponent',
  props: ['pageTitle', 'getHelpLink', 'linkSpanText', 'linkText'],
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
