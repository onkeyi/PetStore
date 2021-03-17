import Vue from 'vue';
import CategoryNavbar from './CategoryNavbar';
import PageHeader from './PageHeader';
import ItemListCard from './ItemListCard';
import ConfirmDialog from './ConfirmDialog';
import Loading from './Loading';

[
    PageHeader,
    CategoryNavbar,
    ItemListCard,
    ConfirmDialog,
    Loading,
].forEach(component => {
    Vue.component(component.name, component)
})