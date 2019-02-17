import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/worker',
      name: 'worker',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Worker.vue')
    },
    {
      path: '/matchup',
      name: 'matchup',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/WorkerMatchup.vue')
    },
    {
      path: '/find',
      name: 'find',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './components/Main.vue')
    },
    {
      path: '/sponsormatchup',
      name: 'sponsormatchup',
      component: () => import('./views/SponsorMatchup.vue')
    },
    {
      path: '/accept',
      name: 'accept',
      component: () => import('./views/Accept.vue')
    },
    {
      path: '/joboffer',
      name: 'joboffer',
      component: () => import('./views/JobOffer.vue')
    },
    {
      path: '/projectstatus',
      name: 'projectstatus',
      component: () => import('./views/ProjectStatus.vue')
    },
    {
      path: '/ready',
      name: 'ready',
      component: () => import('./views/Ready.vue')
    },
    {
      path: '/setupinterview',
      name: 'setupinterview',
      component: () => import('./views/SetupInterview.vue')
    },
    {
      path: '/sponsorstake',
      name: 'sponsorstake',
      component: () => import('./views/SponsorStake.vue')
    },
    {
      path: '/sponsorstatus',
      name: 'sponsorstatus',
      component: () => import('./views/SponsorStatus.vue')
    },
    {
      path: '/sponsorworkerprofile',
      name: 'sponsorworkerprofile',
      component: () => import('./views/SponsorWorkerProfile.vue')
    },
    {
      path: '/workerstatus',
      name: 'workerstatus',
      component: () => import('./views/WorkerStatus.vue')
    }
  ]
})
