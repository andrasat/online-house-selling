<template>
  <div class="home">
    <div v-if="this.$store.state.error" class="notification is-danger">
      Error
    </div>
    <article v-for="house in allHouses" class="box each-house">
      <div class="media">
        <div class="media-left">
          <div class="field">
            <p class="core-info title is-4">{{ house.title }}</p>
            <p class="core-info subtitle is-6">Owner : {{ house.owner }}</p><br>
            <p class="core-info title is-3">Harga: Rp. {{ formatPrice(house.price) }}</p>
          </div>
        </div>
        <div class="media-content">
          <div class="field">
            <img :src="house.imgUrl" width="100%" height="350px" alt="Foto Rumah">
            <p class="title is-5">{{ house.description }}</p>
            <p class="title is-5">{{ house.address }}</p>
            <gmap-map :center="{lat: house.coordinate.lat, lng: house.coordinate.lon}" map-type-id="terrain" :zoom="15" class="map-container-home">
              <gmap-marker :position="{lat: house.coordinate.lat, lng: house.coordinate.lon}">
              </gmap-marker>
            </gmap-map>
          </div>
          <div class="field is-grouped">
            <a id="delete" class="control button is-warning" @click="changeModalStatus(true), getOneHouse(house), setCenterAndPosition(house.coordinate)"><span class="icon is-medium"><i class="fa fa-pencil"></i></span></a>
            <a id="delete" class="control button is-danger" @click="deleteHouse(house)"><span class="icon is-medium"><i class="fa fa-times"></i></span></a>
          </div>
        </div>
      </div>
    </article>
    <div :class="this.$store.state.modalClass">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
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
              <gmap-map :center="getCenter" map-type-id="terrain" :zoom="15" class="map-container">
                <gmap-marker :position="getPosition" @position_changed="changePosition($event)" :clickable="true" :draggable="true">
                </gmap-marker>
              </gmap-map>
              <div class="field level-item">
                <p class="control"><button class="button is-primary" @click="editHouse(oneHouse)">Submit</button></p>
              </div>
            </form>
          </div>
        </div>
        <div v-if="this.$store.state.success" class="notification is-success">
          Success
        </div>
        <div v-if="this.$store.state.error" class="notification is-danger">
          Error
        </div>
      </div>
      <button class="modal-close" @click="changeModalStatus(false)"></button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import accounting from 'accounting-js'
export default {
  name: 'home',
  computed: {
    ...mapGetters([
      'allHouses',
      'oneHouse',
      'getCenter',
      'getPosition'
    ])
  },
  methods: {
    ...mapActions([
      'getHouses',
      'editHouse',
      'deleteHouse',
      'changeModalStatus',
      'getOneHouse',
      'changePosition',
      'setCenterAndPosition'
    ]),
    formatPrice(data) {
      return accounting.formatNumber(data)
    }
  },
  mounted() {
    this.getHouses()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.each-house {
  margin: 1em;
}
.map-container-home {
  width: 100%;
  height: 200px;
}
</style>
