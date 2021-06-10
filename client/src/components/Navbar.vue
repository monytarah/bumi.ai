<template>
  <header>
    <div class="navbar navbar-dark bg-dark shadow-sm">
      <div class="container">
        <a @click.prevent="goToHome" class="navbar-brand d-flex align-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          <strong>Album</strong>
        </a>
        <button @click="addPhoto" class="btn btn-dark text-nowrap " data-bs-toggle="modal" type="button" data-bs-target="#exampleModal">
          <strong>Add Photo</strong>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    addPhoto () {
      this.$router.push('/add')
    },
    goToHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
