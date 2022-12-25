<template>
  <div class="sidebar" :class="sidebarClass">
    <div class="sidebar-head-wrapper">
      <div class="sidebar-Head">
        <router-link to="/" class="logo" v-if="headerLogo === true"><img src="../assets/images/logo.svg" alt="logo">
        </router-link>
        <h3 v-if="headerTitle !== '' " v-html="headerTitle"></h3>
        <p v-if="headerDescription !== '' " v-html="headerDescription">Lorem Ipsum is simply dummy text of the printing
          and<br> typesetting industry. Lorem Ipsum has</p>
      </div>
      <div class="sidebar-body">
        <div class="btn-wrapper" v-if="sidebarForm === true">
          <div class="form">
            <div class="form-group">
              <input type="radio" id="soloCreator" name="select-part" checked>
              <label class="solo-btn" for="soloCreator">
                <div class="img-wrapper">
                  <img src="../assets/images/solo-member.svg" alt="member">
                </div>
                <div class="content-wrapper">
                  <strong>I’m a solo creator</strong>
                  <p>I need to automate some basic tasks</p>
                </div>
                <div class="action-wrapper">
                    <span>
                      <img src="../assets/images/checked-white.svg" alt="checked">
                    </span>
                </div>
              </label>
            </div>
            <div class="form-group">
              <input type="radio" id="teamPart" name="select-part">
              <label for="teamPart" class="solo-btn">
                <div class="img-wrapper">
                  <img src="../assets/images/team.svg" alt="member">
                </div>
                <div class="content-wrapper">
                  <strong>I’m part of a team</strong>
                  <p>My team needs to automate tasks</p>
                </div>
                <div class="action-wrapper">
                    <span>
                      <img src="../assets/images/checked-white.svg" alt="checked">
                    </span>
                </div>
              </label>
            </div>
          </div>
          <router-link to="/login" class="btn-style">get started
            <img src="../assets/images/btn-white-arrow.svg" alt="arrow"></router-link>
        </div>

        <div class="img-wrapper">
          <img :src="require(`../assets/images/${sidebarImage}`)" class="secondary-banner-img" alt="Img"
               v-if="sidebarImage !== undefined">
        </div>
        <div class="migration-statue-wrapper" v-if="migrationStatue===true">
          <p>Migration status</p>
          <div class="status-head">
            <div class="fresh-desk-wrapper">
              <img src="../assets/images/vendor-card-freshdesk.svg" alt="fresh-desk">
              <strong>FreshDesk</strong>
            </div>
            <div class="img-wrapper">
              <img src="../assets/images/green-solid-right-arrow.svg" alt="arrow">
            </div>
            <div class="company-wrapper">
              <img src="../assets/images/logo.svg" alt="company">
              <strong>Company</strong>
            </div>
          </div>
          <div class="migration-status-menu">
            <div class="batch-wrapper">
              <p>Tickets</p>
              <div class="batch active">
                <img src="../assets/images/active-status-icon.svg" alt="icon">
                <p>Active</p>
              </div>
            </div>
            <div class="batch-wrapper">
              <p>Conversations</p>
              <div class="batch successful">
                <img src="../assets/images/successfull-status-icon.svg" alt="icon">
                <p>Successful</p>
              </div>
            </div>
            <div class="batch-wrapper">
              <p>Contacts</p>
              <div class="batch successful">
                <img src="../assets/images/successfull-status-icon.svg" alt="icon">
                <p>Successful</p>
              </div>
            </div>
            <div class="batch-wrapper">
              <p>Companies</p>
              <div class="batch failed">
                <img src="../assets/images/failed-status-icon.png" alt="icon">
                <p>Failed</p>
              </div>
            </div>
            <div class="batch-wrapper">
              <p>Groups</p>
              <div class="batch successful">
                <img src="../assets/images/successfull-status-icon.svg" alt="icon">
                <p>Successful</p>
              </div>
            </div>
            <div class="batch-wrapper">
              <p>Knowledgebase</p>
              <div class="batch successful">
                <img src="../assets/images/successfull-status-icon.svg" alt="icon">
                <p>Successful</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="sidebar-footer">
      <div class="sidebar-footer-link-wrapper">
        <p v-if="stepsDescriptionBefore !== '' ">
          <span v-html="stepsDescriptionBefore"></span>
          <router-link :to="stepButtonLink" class="sidebar-footer-link d-inline-block"
                       v-html="stepButtonText"></router-link>
          <span v-html="stepsDescriptionAfter"></span>
        </p>
      </div>
      <div class="progress-steps">
        <span class="step-bar active"></span>
        <span class="step-bar"></span>
        <span class="step-bar"></span>
        <span class="step-bar"></span>
        <span class="step-bar"></span>
      </div>
    </div>
    <h1></h1>
  </div>
</template>

<script>


export default {
  name: 'SideBar1',
  props: ['sidebarImage', 'headerTitle', 'headerLogo', 'headerDescription', 'stepsDescriptionBefore', 'stepsDescriptionAfter',
    'sidebarForm', 'stepButtonText', 'stepButtonLink', "sidebarClass", 'migrationStatue'],
  items: [],
  components: {},
  data() {
    return {
      isNumber: 3,
    }
  },
  methods: {
    getNumber() {
      for (var i = 0; i < this.isNumber.length; i++) {
        this.isNumber++;
      }
    }
  },
  mounted() {
    this.getNumber();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
