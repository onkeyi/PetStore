import Vue from 'vue';
import CategoryNavbar from './CategoryNavbar';
import PageHeader from './PageHeader';
import ItemList from './ItemList';
import ItemListCard from './ItemListCard';
import ItemDetail from './ItemDetail';
import ItemRegister from './ItemRegister';
import ItemDetailComment from './ItemDetailComment';
import ConfirmDialog from './ConfirmDialog';
import MyInfo from "../components/MyInfo";
import MyItem from "../components/MyItem";
import MyOrder from "../components/MyOrder";
import MyFavorite from "../components/MyFavorite";

[
    PageHeader,
    CategoryNavbar,
    ItemList,
    ItemListCard,
    ItemDetail,
    ItemDetailComment,
    ItemRegister,
    ConfirmDialog,
    MyInfo, MyItem, MyOrder, MyFavorite
].forEach(component => {
    Vue.component(component.name, component)
})