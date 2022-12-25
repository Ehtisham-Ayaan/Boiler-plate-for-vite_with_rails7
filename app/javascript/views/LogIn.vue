<template>
  <div class="main-div">
    <SideBar sidebarClass="login-background"
             headerTitle="Login to your account"
             headerDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has"
             stepsDescriptionBefore="Don’t have a Company account?<br>"
             stepButtonText="Sign up for free!"
             stepButtonLink="#"
             :SidebarImageLogin="true"
             sidebarImage="login-sidebar-image.png"
             stepsCount="1"
    />
    <div class="home">
      <div class="container">
        <Header pageTitle="Login to your company account to get <br> started."
                linkText="Having troubles?"
                linkSpanText="Get Help"
                getHelpLink="#"
        />
        <div class="section-content-div">
          <form action="#" class="login-form">
            <div class="form-group position-relative">
              <label for="domain">Company Domain</label>
              <input type="text" class="form-control " id="domain" placeholder="Enter your company Domain">
              <input class="inside-input-button position-absolute" value=".company.com" readonly>
            </div>

            <div class="form-group">
              <label for="api" data-toggle="tooltip" data-placement="top"
                     data-bs-custom-class="custom-tooltip"
                     data-html="true" title="Your Company Api Key">API key
                <img src="../assets/images/circled-question-mark.svg" alt="question">
              </label>
              <input type="text" class="form-control" id="api" placeholder="Paste your API key here">

              <router-link to="#"><img src="../assets/images/circled-exclamation.svg" alt="exclamation">Don’t have a
                Company account? <span>Sign up </span>for
                free!
              </router-link>
            </div>
          </form>
        </div>
        <FooterComponent backBtnText="back" nextBtnText="Select App" NextBtnLink="/selectapp" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import SideBar from '../components/SideBar.vue'
import FooterComponent from "../components/Footer.vue";

export default {
  name: 'LogIn',
  components: {
    SideBar,
    Header,
    FooterComponent
    // carousel
  },
  methods() {

  }
}
</script>

<style lang="scss" scoped>
.custom-tooltip {
  background: red;
}
</style>
