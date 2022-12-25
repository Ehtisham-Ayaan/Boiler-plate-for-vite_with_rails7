<template>
  <div class="main-div">
    <SideBar
        headerTitle="Migration Review"
        headerDescription="Lorem Ipsum is simply dummy text of the printing and<br> typesetting industry. Lorem Ipsum has"
        stepsDescriptionBefore="Data migration can take anywhere from a few minutes to
            several hours depending the amount of data you are<br> migrating"
        :migrationStatue="true"
    />

    <div class="home">
      <div class="container">
        <Header pageTitle="Live statistics of what is being imported into your company account."
                linkText="Having troubles?"
                linkSpanText="Get Help"
                getHelpLink="#"
        />
        <div class="section-content-div migration">
          <LiveStatics/>
        </div>
        <FooterComponent backBtnText="back" nextBtnText="Select App"/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import LiveStatics from '../components/LiveStatics.vue'
import SideBar from '../components/SideBar.vue'
import FooterComponent from "../components/Footer.vue";

export default {
  name: 'MigRation',
  components: {
    Header,
    LiveStatics,
    SideBar,
    FooterComponent
  }
}
</script>

<style lang="scss" scoped>

</style>
