<template>
  <div class="add">
    <div class="box">
      <article class="media">
        <div class="media-content">
          <form>
            <div class="field">
              <label class="title label has-text-centered">House data</label>
            </div>
            <div class="field">
              <label class="label">Post title</label>
              <p class="control"><input class="input" v-model="oneHouse.title" type="text" placeholder="Post title"></p>
            </div>
            <div class="field">
              <label class="label">Price</label>
              <p class="control"><input class="input" v-model="oneHouse.price" type="text" placeholder="How much is your house worth?"></p>
            </div>
            <div class="field">
              <label class="label">Owner name</label>
              <p class="control"><input class="input" v-model="oneHouse.owner" type="text" placeholder="Who are you?"></p>
            </div>
            <div class="field">
              <label class="label">Description</label>
              <p class="control"><textarea class="textarea" v-model="oneHouse.description" placeholder="House description"></textarea></p>
            </div>
            <div class="field">
              <label class="label">House Photo</label>
              <p class="control"><input class="input" v-model="oneHouse.imgUrl" type="text" placeholder="Paste your house pict link here"></p>
            </div>
            <div class="field">
              <label class="label">Address</label>
              <p class="control"><textarea class="textarea" v-model="oneHouse.address" placeholder="Address"></textarea></p>
            </div>
            <div class="field">
                <gmap-map :center="{lat:1.38, lng:103.8}" :zoom="10" class="map-container">
                  <gmap-marker :position="{lat:1.38, lng:103.8}">
                  </gmap-marker>
                </gmap-map>
            </div>
            <div class="field level-item">
              <p class="control"><button class="button is-primary" @click="newHouse(oneHouse)">Submit</button></p>
            </div>
          </form>
          <div v-if="this.$store.state.success" class="notification is-success">
            Success
          </div>
          <div v-if="this.$store.state.error" class="notification is-danger">
            Error
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'add',
  computed: {
    ...mapGetters([
      'oneHouse'
    ])
  },
  methods: {
    ...mapMutations([
      'setError',
      'setSuccess'
    ]),
    ...mapActions([
      'newHouse'
    ]),
    closeNotif() {
      this.setSuccess(false)
      this.setError(false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.house {
  margin: 1em;
}
.map-container {
  width: 100%;
  height: 400px;
}
</style>