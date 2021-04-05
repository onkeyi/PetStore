import LoginPage from '../pages/login'
import HomePage from '../pages/home'
import HomeDetailPage from '../pages/home-detail'
import UserRegisterPage from '../pages/user-register'
import MyPage from '../pages/my-page'
import UserProfile from '../pages/mypage/user-profile'
import UserItem from '../pages/mypage/user-item'
import UserItemDetail from '../pages/mypage/user-item-detail'
import UserOrder from '../pages/mypage/user-order'
import UserOrderDetail from '../pages/mypage/user-order-detail'
import UserFavorite from '../pages/mypage/user-favorite'
import UserFavoriteDetail from '../pages/mypage/user-favorite-detail'
import ItemRegister from '../pages/mypage/item-register'


export default [
    { path: '/', name: 'home', component: HomePage },
    { path: '/detail', name: 'home-detail', component: HomeDetailPage },
    { path: '/category/detail', name: 'home-detail', component: HomeDetailPage },
    { path: '/tags/detail', name: 'home-detail', component: HomeDetailPage },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/register', name: 'user-register', component: UserRegisterPage },
    { path: '/mypage', name: 'my-page', component: MyPage,
        children: [
        {
          path: '/',
          component: UserProfile
        },
        {
          path: 'profile',
          component: UserProfile
        },
        {
          path: 'item',
          component: UserItem,
        },
        {
          path: 'item/detail',
          component: UserItemDetail,
        },
        {
          path: 'order',
          component: UserOrder
        },
        {
          path: 'order/detail',
          component: UserOrderDetail
        },
        {
          path: 'favorite',
          component: UserFavorite
        },
        {
          path: 'favorite/detail',
          component: UserFavoriteDetail
        },
        {
          path: 'itemregister',
          component: ItemRegister
        },
      ]
    }
]