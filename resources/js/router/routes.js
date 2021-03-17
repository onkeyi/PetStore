import LoginPage from '../pages/login'
import StoreHomePage from '../pages/store-home'
import UserRegisterPage from '../pages/user-register'
import MyPage from '../pages/my-page'
import ItemDetailPage from '../pages/item-detail'
import UserProfile from '../pages/mypage/user-profile'
import UserItem from '../pages/mypage/user-item'
import UserOrder from '../pages/mypage/user-order'
import UserFavorite from '../pages/mypage/user-favorite'
import ItemRegister from '../pages/mypage/item-register'

export default [
    { path: '/', name: 'store-home', component: StoreHomePage },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/register', name: 'user-register', component: UserRegisterPage },
    { path: '/detail', name: 'item-detail', component: ItemDetailPage },
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
          component: UserItem
        },
        {
          path: 'order',
          component: UserOrder
        },
        {
          path: 'favorite',
          component: UserFavorite
        },
        {
          path: 'itemregister',
          component: ItemRegister
        },
      ]
    }
]