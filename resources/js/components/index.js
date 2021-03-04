import Vue from 'vue';
import PetCategoryNavbar from './PetCategoryNavbar';
import HomePageHeader from './HomePageHeader';
import OtherPageHeader from './OtherPageHeader';
import PetList from './PetList';
import PetListCard from './PetListCard';
import PetDetail from './PetDetail';
import ConfirmDialog from './ConfirmDialog';
import MyPet from './MyPet';
import MyOrder from './MyOrder';

[
    HomePageHeader,
    OtherPageHeader,
    PetCategoryNavbar,
    PetList,
    PetListCard,
    PetDetail,
    ConfirmDialog,
    MyPet,
    MyOrder
].forEach(Component => {
    Vue.component(Component.name, Component)
})