<template>
  <div>
    <Navbar />
    <div class="col-6 mx-auto my-4">
      <h5>Update Photo</h5>
      <form @submit.prevent="updatePhoto">
        <div class="form-group mb-3">
          <label class="mb-2" for="update-title">Title</label>
          <input v-model="photo.title" type="text" class="form-control" id="update-title" placeholder="lorem ipsum">
        </div>
        <div class="form-group mb-3">
          <label class="mb-2" for="update-url">Url</label>
          <input v-model="photo.url" type="text" class="form-control" id="update-url" placeholder="http://">
        </div>
        <div class="form-group mb-3">
          <label class="mb-2" for="update-thumbnailUrl">Thumbnail Url</label>
          <input v-model="photo.thumbnailUrl" type="text" class="form-control" id="update-thumbnailUrl" placeholder="http://">
        </div>
        <div class="form-group mb-3">
          <label class="mb-2" for="update-albumId">Album Id</label>
          <input v-model="photo.albumId" type="text" class="form-control" id="update-albumId" placeholder="1000">
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  name: 'UpdateForm',
  methods: {
    updatePhoto () {
      const payload = {
        id: this.$route.params.id,
        title: this.photo.title,
        url: this.photo.url,
        thumbnailUrl: this.photo.thumbnailUrl,
        albumId: this.photo.albumId
      }
      this.$store.dispatch('updatePhoto', payload)
    }
  },
  created () {
    this.$store.dispatch('photoById', this.$route.params.id)
  },
  computed: {
    photo () {
      return this.$store.state.photo
    }
  }
}
</script>

<style>

</style>
