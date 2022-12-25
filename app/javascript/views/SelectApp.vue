<template>
  <div class="main-div">
    <SideBar sidebarClass="selectapp-background"
      headerTitle="Migrate from popular apps"
      headerDescription="Lorem Ipsum is simply dummy text of the printing and<br> typesetting industry. Lorem Ipsum has"
      stepsDescriptionBefore="App not yet listed <br> send us an email at"
      stepButtonText="support@company.com"
      stepsDescriptionAfter=" to discuss more."
      stepButtonLink="#"
      :SidebarImageSelectApp="true"
      sidebarImage="select-app-sidebar-image.png"
    />

    <div class="home">
      <div class="container">
        <Header pageTitle="Tell us what helpdesk vendor you are migrating from"
                linkText="Having troubles?"
                linkSpanText="Get Help"
                getHelpLink="#"
        />
        <div class="section-content-div">
          <form class="vendor-cards">
            <div class="row mx-0">
              <div class="col-md-6">
                <div class="form-group">
                  <input type="radio" name="migrationFrom" id="zendesk">
                  <label class="vendor-card " for="zendesk">
                    <div class="image-wrapper">
                      <img src="../assets/images/vendor-card-zendesk.svg" alt="zen-desk">
                    </div>
                    <div class="content-wrapper">
                      <strong>ZenDesk</strong>
                      <p class="small">Tickets, contacts, companies and Knowledge base<br> could be migrated</p>
                    </div>
                    <div class="action-wrapper">
                      <span></span>
                    </div>
                  </label>
                </div>
              </div>

              <div class="col-md-6">
                <div class="form-group">
                  <input type="radio" name="migrationFrom" id="freshdesk">
                  <label class="vendor-card " for="freshdesk">
                    <div class="image-wrapper">
                      <img src="../assets/images/vendor-card-freshdesk.svg" alt="zen-desk">
                    </div>
                    <div class="content-wrapper">
                      <strong>FreshDesk</strong>
                      <p class="small">Tickets, contacts, companies, Knowledge base<br> and Attachments could be
                        migrated
                      </p>
                    </div>
                    <div class="action-wrapper">
                      <span></span>
                    </div>
                  </label>
                </div>
              </div>

              <div class="col-md-6 ">
                <div class="form-group">
                  <input type="radio" name="migrationFrom" id="deskcom">
                  <label class="vendor-card " for="deskcom">
                    <div class="image-wrapper">
                      <img src="../assets/images/vendor-card-desk-com.svg" alt="zen-desk">
                    </div>
                    <div class="content-wrapper">
                      <strong>desk.com</strong>
                      <p class="small">Tickets, contacts, companies, Knowledge base<br> and Attachments could be
                        migrated</p>
                    </div>
                    <div class="action-wrapper">
                      <span></span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
        <FooterComponent backBtnText="back" nextBtnText="Configure Settings" NextBtnLink="/setting"/>

      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import SideBar from '../components/SideBar.vue'
import FooterComponent from "../components/Footer.vue";

export default {
  name: 'SelectApp',
  components: {
    Header,
    SideBar,
    FooterComponent
  }
}
</script>

<style lang="scss" scoped>

</style>
