<template>
  <div class="home">
    <Navbar />
    <div class="container py-4">
      <div class="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-3">
        <PhotoCard v-for="photo in photos" :key="photo.id" :photo="photo" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import PhotoCard from '../components/PhotoCard.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    PhotoCard
  },
  created () {
    this.$store.dispatch('fetchPhotos')
  },
  computed: {
    photos () {
      return this.$store.state.photos
    }
  }
}
</script>
