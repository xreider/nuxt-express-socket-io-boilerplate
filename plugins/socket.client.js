import Vue from 'vue'
const store = require('../store')
import VueSocketIO from 'vue-socket.io'

export default function () {
 Vue.use(new VueSocketIO({
   debug: true,
   connection: '/',
   vuex: {
       store,
       actionPrefix: 'SOCKET_',
       mutationPrefix: 'SOCKET_'
   },
 }))
}
