import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    photos: [],
    photo: {}
  },
  mutations: {
    setPhotos (state, payload) {
      state.photos = payload
    },
    setPhoto (state, payload) {
      state.photo = payload
    }
  },
  actions: {
    fetchPhotos (context) {
      axios({
        method: 'GET',
        url: 'http://localhost:3000/photos'
      })
        .then(({ data }) => {
          // console.log(response)
          context.commit('setPhotos', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addPhoto (context, payload) {
      axios({
        method: 'POST',
        url: 'http://localhost:3000/photos',
        data: {
          title: payload.title,
          url: payload.url,
          thumbnailUrl: payload.thumbnailUrl,
          albumId: payload.albumId
        }
      })
        .then(_ => {
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    },
    deletePhoto (context, id) {
      axios({
        method: 'DELETE',
        url: `http://localhost:3000/photos/${id}`
      })
        .then(_ => {
          context.dispatch('fetchPhotos')
        })
        .catch(err => {
          console.log(err)
        })
    },
    photoById (context, id) {
      axios({
        method: 'GET',
        url: `http://localhost:3000/photos/${id}`
      })
        .then(({ data }) => {
          context.commit('setPhoto', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updatePhoto (context, payload) {
      axios({
        method: 'PUT',
        url: `http://localhost:3000/photos/${payload.id}`,
        data: {
          title: payload.title,
          url: payload.url,
          thumbnailUrl: payload.thumbnailUrl,
          albumId: payload.albumId
        }
      })
        .then(_ => {
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
