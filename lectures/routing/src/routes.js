
//import User from './components/user/User';
import User7 from './components/user/User7';
import UserStart from './components/user/UserStart';
import UserDetail from './components/user/UserDetail';
import UserEdit from './components/user/UserEdit';
import UserSubRoutes from './components/user/UserSubRoutes';

// Lazy Loading
const User = () => import(/* webpackChunkName: "group-foo" */'./components/user/User.vue');


import Home from './components/Home';
import Header from './components/Header';


function dynProps(route) {
  console.log('route.params', route.params);
  return { id: String(+route.params.id + 10)};
  //return +route.params.id;
  //return 99;
}

export const routes = [
  //{ path: '', component: Home, name: 'home' },
  { path: '', name: 'home', components: {
      default: Home,
      'header-top': Header
  }},
  {
    path: '/user',
    components: {
      default: UserSubRoutes,
      'header-bottom': Header
    },
    children: [
      { path:'subroutes', component: UserStart},
      { path:'subroutes/:id',
        component: UserDetail,
        props: true,
        beforeEnter: (to, from, next) => {
          console.log('inside route setup');
          next();
        }
      },
      { path:'subroutes/:id/edit', component: UserEdit, name: 'userEdit'}
    ]
  },
  // {
  //   path: '/user',
  //   component: UserSubRoutes,
  //   children: [
  //     { path:'subroutes', component: UserStart},
  //     { path:'subroutes/:id', component: UserDetail, props: true},
  //     { path:'subroutes/:id/edit', component: UserEdit, name: 'userEdit'}
  //   ]
  // },
  { path: '/user/:id', component: User },
  // { path: '/user/props/:id', component: User, props: {id: 7} },
  { path: '/user/props/:id', component: User7, props: dynProps },
  //{ path: '/user/props/:id', component: User7, props: true },

  { path: '/redirect-me1', redirect: '/user'},
  { path: '/redirect-me2', redirect: {name: 'home'}},
  { path: '*', redirect: '/'}
];