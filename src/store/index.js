import Vue from 'vue';
import Vuex from 'vuex';
import {Events} from './Events.js';
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        Events
    }
})