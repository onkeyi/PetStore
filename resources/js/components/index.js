import Vue from 'vue'
import Button from './Button'
import Card from './Card'
import SideBar from './SideBar'
import { HasError, AlertError, AlertSuccess } from 'vform'
import { VueLoading } from 'vue-loading-template'

[
    HasError,
    AlertError,
    AlertSuccess,
    VueLoading,
    Button,
    SideBar,
    Card
].forEach(Component => {
    Vue.component(Component.name, Component)
})
