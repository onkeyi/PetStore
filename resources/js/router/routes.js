import LoginPage from '../pages/login'
import StoreHomePage from '../pages/store-home'
import UserRegisterPage from '../pages/user-register'
import MyPage from '../pages/my-page'
import PetDetailPage from '../pages/pet-detail'

export default [
    { path: '/', name: 'store-home', component: StoreHomePage },
    { path: '/login', name: 'login', component: LoginPage },
    { path: '/register', name: 'user-register', component: UserRegisterPage },
    { path: '/detail', name: 'pet-detail', component: PetDetailPage },
    { path: '/mypage', name: 'my-page', component: MyPage },
]