<template>
  <div>
    <Navbar />
    <div class="col-6 mx-auto my-4">
      <h5>Add Photo</h5>
      <form @submit.prevent="addPhoto">
        <div class="form-group mb-3">
          <label class="mb-2" for="add-title">Title</label>
          <input v-model="input.title" type="text" class="form-control" id="add-title" placeholder="lorem ipsum">
        </div>
        <div class="form-group mb-3">
          <label class="mb-2" for="add-url">Url</label>
          <input v-model="input.url" type="text" class="form-control" id="add-url" placeholder="http://">
        </div>
        <div class="form-group mb-3">
          <label class="mb-2" for="add-thumbnailUrl">Thumbnail Url</label>
          <input v-model="input.thumbnailUrl" type="text" class="form-control" id="add-thumbnailUrl" placeholder="http://">
        </div>
        <div class="form-group mb-3">
          <label class="mb-2" for="add-albumId">Album Id</label>
          <input v-model="input.albumId" type="text" class="form-control" id="add-albumId" placeholder="1000">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  components: { Navbar },
  name: 'AddForm',
  data () {
    return {
      input: {
        title: '',
        url: '',
        thumbnailUrl: '',
        albumId: ''
      }
    }
  },
  methods: {
    addPhoto () {
      this.$store.dispatch('addPhoto', this.input)
    }
  }
}
</script>

<style>

</style>
