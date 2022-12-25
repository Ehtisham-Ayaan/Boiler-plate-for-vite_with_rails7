<template>
  <div class="main-div">
    <SideBar headerTitle="Bring your data with you!" :sidebarForm="true" :headerLogo="true"
             headerDescription="Migrate your own data from popular apps"
             stepsDescriptionBefore="Already have an account?"
             stepButtonText="<br>Log in"
             stepButtonLink="/login"
             stepsCount="4"
    />
    <div class="home">
      <div class="container">
        <Header pageTitle="Migrate your data to company in 4 simple steps. we will do all the heavy lifting for you!"
                linkText="Having troubles?"
                linkSpanText="Get Help"
                getHelpLink="#"

        />

        <div class="section-content-div home-div">
          <router-link to="/login" class="btn-style mobile-btn">get started
            <img src="../assets/images/btn-white-arrow.svg" alt="arrow">
          </router-link>
          <div class="img-wrapper">
            <img src="../assets/images/home-body-image.png" alt="home">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import SideBar from "../components/SideBar.vue";

export default {
  name: 'HomeView',
  components: {
    SideBar,
    Header,
    // carousel
  },
  data() {
    return {
      items: [],

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
