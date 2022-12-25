<template>
  <div class="more-details-wrapper">
    <div class="details-head">
      <div class="row">
        <div class="col-md-6">
          <div class="fresh-desk-wrapper">
            <img src="../assets/images/vendor-card-freshdesk.svg" alt="fresh-desk">
            <strong>FreshDesk</strong>
          </div>
        </div>
        <div class="col-md-6 text-center">
          <div class="company-wrapper">
            <img src="../assets/images/logo.svg" alt="company">
            <strong>Company</strong>
          </div>
        </div>

      </div>
    </div>

    <div class="details-body">
      <div class="row">
        <div class="col-md-6">
          <form action="#" class="detail-form">
            <div class="form-group">
              <input type="checkbox" id="user" checked disabled/>
              <label for="user"><span><img src="../assets/images/checked-white.svg" alt="checked"></span>
                <p>Users</p></label>
            </div>
            <div class="form-group">
              <input type="checkbox" id="tickets"/>
              <label for="tickets"><span><img src="../assets/images/checked-white.svg" alt="checked"></span>
                <p>Tickets</p></label>
            </div>

            <div class="ticket-selection">
              <div class="selection-btn-wrapper">
                <div class="form-group">
                  <input type="radio" id="all-ticket" name="ticket-select" checked/>
                  <label for="all-ticket"><span><img src="../assets/images/simple-blue-circle.svg" alt="circled"></span>
                    <p>All Tickets</p></label>
                </div>
                <div class="form-group">
                  <input type="radio" id="ticket-form" name="ticket-select"/>
                  <label for="ticket-form"><span><img src="../assets/images/simple-blue-circle.svg"
                                                      alt="circled"></span>
                    <p>Tickets form</p></label>
                </div>
              </div>
              <div class="form-group">
                <input type="date" class="form-control d-block" placeholder="MM/DD/YYYY"/>
              </div>
              <div class="form-group">
                <input type="checkbox" id="attachments"/>
                <label for="attachments"><span><img src="../assets/images/checked-white.svg" alt="checked"></span>
                  <p>Attachments</p></label>
              </div>
            </div>

            <div class="form-group">
              <input type="checkbox" id="conversations"/>
              <label for="conversations"><span><img src="../assets/images/checked-white.svg" alt="checked"></span>
                <p>Conversations</p></label>
            </div>


            <div class="form-group">
              <input type="checkbox" id="companies"/>
              <label for="companies"><span><img src="../assets/images/checked-white.svg" alt="checked"></span>
                <p>Companies</p></label>
            </div>
            <div class="form-group">
              <input type="checkbox" id="knowledgebase"/>
              <label for="knowledgebase"><span><img src="../assets/images/checked-white.svg" alt="checked"></span>
                <p>Knowledgebase</p></label>
            </div>
          </form>

        </div>
        <div class="col-md-2 text-center">
          <div class="image-div">
            <img src="../assets/images/details-big-arrow.svg" alt="arrow">
          </div>
        </div>
        <div class="col-md-4">
          <ul class="details-list">
            <li class="disable"><img src="../assets/images/transparent-arrow.svg" alt="arrow">
              <p>User</p></li>

            <li><img src="../assets/images/green-arrow.svg" alt="arrow">
              <p>Tickets</p></li>

            <li class="disable"><img src="../assets/images/transparent-arrow.svg" alt="arrow">
              <p>Conversations</p></li>

            <li><img src="../assets/images/green-arrow.svg" alt="arrow">
              <p>Companies</p></li>
            <li><img src="../assets/images/green-arrow.svg" alt="arrow">
              <p>Knowledgebase</p></li>

          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'MoreDetails',
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
