import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        hotCity: '',
        hotList: []
    },
    mutations: {
        HOT_CITY(state, payload) {
            state.hotCity = payload
        },
        HOT_LIST(state, payload) {
            state.hotList = payload
        }
    },
    actions: {
        hot({
            commit
        }) {
            return new Promise((resolve, reject) => {
                axios.get('/api//movie/in_theaters').then(response => {
                    for (let i = 0; i < response.data.subjects.length; i++) {
                        if (response.data.subjects[i].rating.stars > 10) {
                            response.data.subjects[i].rating.stars = Math.floor(response.data.subjects[i].rating.stars / 10)
                        } else {
                            response.data.subjects[i].rating.stars = 0
                        }
                    }
                    commit('HOT_CITY', response.data.title)
                    commit('HOT_LIST', response.data.subjects)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
})

export default store