import Vue from 'vue';
import CategoryNavbar from './CategoryNavbar';
import PageHeader from './PageHeader';
import ItemList from './ItemList';
import ItemListCard from './ItemListCard';
import ItemDetail from './ItemDetail';
import ItemRegister from './ItemRegister';
import ItemDetailComment from './ItemDetailComment';
import ConfirmDialog from './ConfirmDialog';
import MyInfo from "./MyInfo";
import MyItem from "./MyItem";
import MyOrder from "./MyOrder";
import MyFavorite from "./MyFavorite";
import Loading from './Loading';

[
    PageHeader,
    CategoryNavbar,
    ItemList,
    ItemListCard,
    ItemDetail,
    ItemDetailComment,
    ItemRegister,
    ConfirmDialog,
    Loading,
    MyInfo, MyItem, MyOrder, MyFavorite
].forEach(component => {
    Vue.component(component.name, component)
})