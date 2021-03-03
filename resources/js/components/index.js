import Vue from 'vue';
import PetCategoryNavbar from './PetCategoryNavbar';
import HomePageHeader from './HomePageHeader';
import MyPageHeader from './MyPageHeader';
import OtherPageHeader from './OtherPageHeader';
import PetList from './PetList';
import PetListCard from './PetListCard';
import PetDetail from './PetDetail';
import ConfirmDialog from './ConfirmDialog';
[
    HomePageHeader,
    MyPageHeader,
    OtherPageHeader,
    PetCategoryNavbar,
    PetList,
    PetListCard,
    PetDetail,
    ConfirmDialog
].forEach(Component => {
    Vue.component(Component.name, Component)
})