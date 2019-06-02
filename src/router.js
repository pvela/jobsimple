import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from '@/store.js';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        authRequired: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./views/Register.vue')
    },
    {
      path: '/sponsor',
      name: 'sponsor',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Sponsor.vue'),
      meta: {
        authRequired: true
      }
    },
    {
      path: '/jobposting',
      name: 'jobposting',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/JobPosting.vue'),
      meta: {
        authRequired: true
      }
    },
    {
      path: '/sponsormatchup',
      name: 'sponsormatchup',
      component: () => import('./views/SponsorMatchup.vue'),
      meta: {
        authRequired: true
      }
    },
    {
      path: '/sponsorstatus',
      name: 'sponsorstatus',
      component: () => import('./views/SponsorStatus.vue'),
      meta: {
        authRequired: true
      }
    },
    {
      path: '/sponsorstake',
      name: 'sponsorstake',
      component: () => import('./views/SponsorStake.vue'),
      meta: {
        authRequired: true
      }
    },
    {
      path: '/joboffer',
      name: 'joboffer',
      component: () => import('./views/JobOffer.vue'),
      meta: {
        authRequired: true
      }
    },
    {
      path: '/onboarding',
      name: 'onboarding',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Onboarding.vue'),
      meta: {
        authRequired: true
      }
    },
    {
      path: '/worker',
      name: 'worker',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Worker.vue'),
      meta: {
        authRequired: true
      }
    },
    {
      path: '/workerstatus',
      name: 'workerstatus',
      component: () => import('./views/WorkerStatus.vue'),
      meta: {
        authRequired: true
      }
    },
    {
      path: '/workermatchup',
      name: 'workermatchup',
      component: () => import('./views/WorkerMatchup.vue'),
      meta: {
        authRequired: true
      }
    },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.state.user) {
      next({
        path: '/login'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
