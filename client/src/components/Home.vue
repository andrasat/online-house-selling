<template>
  <div class="home">
    <div v-if="this.$store.state.error" class="notification is-danger">
      Error
    </div>
    <article v-for="house in allHouses" class="box each-house">
      <div class="media">
        <div class="media-left">
          <p class="control core-info title is-3">{{ house.title }}</p>
          <p class="control core-info subtitle is-5">Owner : {{ house.owner }}</p>
        </div>
        <div class="media-content">
          <div class="field">
            <p class="title is-3">Harga: Rp.{{ house.price }}</p>
            <p class="title is-4">{{ house.description }}</p>
            <p class="title is-5">{{ house.address }}</p>
          </div>
          <div class="field">
            <img :src="house.imgUrl" width="600px" height="400px" alt="Foto Rumah">
          </div>
          <div class="field is-grouped">
            <a id="delete" class="control button is-warning" @click=""><span class="icon is-medium"><i class="fa fa-times"></i></span></a>
            <a id="delete" class="control button is-danger" @click=""><span class="icon is-medium"><i class="fa fa-times"></i></span></a>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapGetters([
      'allHouses'
    ])
  },
  methods: {
    ...mapActions([
      'getHouses'
    ]),
    convertPrice() {

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
</style>
