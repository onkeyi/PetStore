import Vue from "vue";
import { TimeAgo } from "vue2-timeago";
import CategoryNav from "./CategoryNav";
import NavBar from "./NavBar";
import ItemCard from "./ItemCard";
import ItemDetail from "./ItemDetail";
import ItemDetailComment from "./ItemDetailComment";
import ConfirmDialog from "./ConfirmDialog";
import Loading from "./Loading";

[
    NavBar,
    CategoryNav,
    ItemCard,
    ItemDetail,
    ItemDetailComment,
    ConfirmDialog,
    Loading,
    TimeAgo,
].forEach((component) => {
    Vue.component(component.name, component);
});
