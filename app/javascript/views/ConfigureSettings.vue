<template>
  <div class="main-div">
    <SideBar sidebarClass=" setting-background"
      headerTitle="What data to migrate"
      headerDescription="Lorem Ipsum is simply dummy text of the printing and<br> typesetting industry. Lorem Ipsum has"
      sidebarImage="setting-sidebar-image.png"
    />

    <div class="home">
      <div class="container">
        <Header pageTitle="Just a bit more details on what you are trying to migrate and we’ll get the ball rolling."
                linkText="Having troubles?"
                linkSpanText="Get Help"
                getHelpLink="#"
        />
        <div class="section-content-div setting-div">
          <MoreDetails/>
        </div>
        <FooterComponent backBtnText="back" nextBtnText="Migrate" NextBtnLink="/migration"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import MoreDetails from '../components/MoreDetails.vue'
import SideBar from '../components/SideBar.vue'
import FooterComponent from "../components/Footer.vue";

export default {
  name: 'ConfigureSettings',
  components: {
    Header,
    MoreDetails,
    SideBar,
    FooterComponent
  }
}
</script>

<style lang="scss" scoped>

</style>
