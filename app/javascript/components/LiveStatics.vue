<template>
  <div class="live-statistics-wrapper"><!---->
    <div class="live-statistics">
      <div class="row">
        <div class="col-md-4 ">
          <div class="statistics">
            <img src="../assets/images/ticket-static-icon.svg" alt="statics">
            <p>Tickets</p>
            <span class="active"><img src="../assets/images/static-active-arrow.svg" alt="status"></span>
          </div>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-2 col-4">
          <div class="created">
            <p>Created: <span>1203</span></p>
          </div>
        </div>
        <div class="col-md-2 col-4">
          <div class="updated">
            <p>Updated: <span>776</span></p>
          </div>
        </div>
        <div class="col-md-2 col-4">
          <div class="failed">
            <p>Failed: <span>0</span></p>
          </div>
        </div>
      </div>
    </div>

    <div class="live-statistics">
      <div class="row">
        <div class="col-md-4">
          <div class="statistics">
            <img src="../assets/images/conversation-static-icon.svg" alt="statics">
            <p>Conversations</p>
            <span class="complete"><img src="../assets/images/checked-white.svg" alt="checked"></span>
          </div>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-2 col-4">
          <div class="created">
            <p>Created: <span>512</span></p>
          </div>
        </div>
        <div class="col-md-2 col-4">
          <div class="updated">
            <p>Updated: <span>512</span></p>
          </div>
        </div>
        <div class="col-md-2 col-4">
          <div class="failed">
            <p>Failed: <span>0</span></p>
          </div>
        </div>
      </div>
    </div>

    <div class="live-statistics">
      <div class="row">
        <div class="col-md-4">
          <div class="statistics">
            <img src="../assets/images/contact-static-icon.svg" alt="statics">
            <p>Contacts</p>
            <span class="complete"><img src="../assets/images/checked-white.svg" alt="checked"></span>
          </div>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-2 col-4">
          <div class="created">
            <p>Created: <span>1024</span></p>
          </div>
        </div>
        <div class="col-md-2 col-4">
          <div class="updated">
            <p>Updated: <span>1024</span></p>
          </div>
        </div>
        <div class="col-md-2 col-4">
          <div class="failed">
            <p>Failed: <span>0</span></p>
          </div>
        </div>
      </div>
    </div>

    <div class="live-statistics">
      <div class="row">
        <div class="col-md-4">
          <div class="statistics">
            <img src="../assets/images/companies-static-icon.svg" alt="statics">
            <p>Companies</p>
            <span class="failed"><img src="../assets/images/circled-cross.svg" alt="checked"></span>
          </div>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-2 col-4">
          <div class="created">
            <p>Created: <span>355</span></p>
          </div>
        </div>
        <div class="col-md-2 col-4">
          <div class="updated">
            <p>Updated: <span>352</span></p>
          </div>
        </div>
        <div class="col-md-2 col-4">
          <div class="failed">
            <p>Failed: <span>3</span></p>
          </div>
        </div>
      </div>
    </div>

    <div class="live-statistics">
      <div class="row">
        <div class="col-md-4">
          <div class="statistics">
            <img src="../assets/images/group-static-icon.svg" alt="statics">
            <p>Groups</p>
            <span class="complete"><img src="../assets/images/checked-white.svg" alt="checked"></span>
          </div>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-2 col-4">
          <div class="created">
            <p>Created: <span>109</span></p>
          </div>
        </div>
        <div class="col-md-2 col-4">
          <div class="updated">
            <p>Updated: <span>109</span></p>
          </div>
        </div>
        <div class="col-md-2 col-4">
          <div class="failed">
            <p>Failed: <span>0</span></p>
          </div>
        </div>
      </div>
    </div>

    <div class="live-statistics">
      <div class="row">
        <div class="col-md-4">
          <div class="statistics">
            <img src="../assets/images/knowledge-static-icon.svg" alt="statics">
            <p>Knowledgebase</p>
            <span class="complete"><img src="../assets/images/checked-white.svg" alt="checked"></span>
          </div>
        </div>
        <div class="col-md-2">
          <div class="folders ">
            <img src="../assets/images/folder-icon.svg" alt="folder">
            <p class="small">Folders</p>
          </div>
          <div class="categories ">
            <img src="../assets/images/categories-icon.svg" alt="Categories">
            <p class="small">Categories:</p>
          </div>
          <div class="articles ">
            <img src="../assets/images/articles-icon.svg" alt="Articles">
            <p class="small">Articles:</p>
          </div>
        </div>
        <div class="col-md-2 col-4">
          <div class="created p-margin">
            <p>Created: <span>15</span></p>
            <p>Created: <span>13</span></p>
            <p>Created: <span>12</span></p>
          </div>
        </div>
        <div class="col-md-2 col-4">
          <div class="updated p-margin">
            <p>Updated: <span>15</span></p>
            <p>Updated: <span>13</span></p>
            <p>Updated: <span>12</span></p>
          </div>
        </div>
        <div class="col-md-2 col-4">
          <div class="failed p-margin">
            <p>Failed: <span>0</span></p>
            <p>Failed: <span>0</span></p>
            <p>Failed: <span>0</span></p>
          </div>
        </div>
      </div>
    </div>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>


</style>
