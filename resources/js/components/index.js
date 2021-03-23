import Vue from 'vue';
import CategoryNav from './CategoryNav';
import NavBar from './NavBar';
import ItemListCard from './ItemListCard';
import ItemDetailComment from './ItemDetailComment';
import ConfirmDialog from './ConfirmDialog';
import Loading from './Loading';

[
    NavBar,
    CategoryNav,
    ItemListCard,
    ItemDetailComment,
    ConfirmDialog,
    Loading,
].forEach(component => {
    Vue.component(component.name, component)
})