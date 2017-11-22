import Vue from 'vue'
import VueRouter from 'vue-router'
var firebase = require('firebase/app')
require('firebase/auth')
require('firebase/database')

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

let router = new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    { path: '*',
      component: load('Login')
    },
    { path: '/',
      component: load('Login')
    },
    { path: '/login',
      component: load('Login'),
      name: 'login'
    },
    { path: '/cadastre-se',
      component: load('SignUp'),
      name: 'cadastrese'
    },
    { path: '/principal',
      component: load('Principal'),
      children: [
        { path: '/sobreoapp', component: load('Sobre'), name: 'sobre' },
        { path: '/consultores', component: load('Consultor/Consultores'), name: 'consultores' },
        { path: '/consultores/agendamento', component: load('Consultor/Agendamento'), name: 'agendamento' },
        { path: '/acompanhamento', component: load('Acompanhamento'), name: 'acompanhamento' },
        { path: '/consultores/registroatendimento', component: load('Consultor/RegistroAtendimento'), name: 'atendimento' }
      ],
      meta: {
        requiresAuth: true
      }
    },
    { path: '/gerprojetos',
      component: load('GerProjetos'),
      name: 'gerprojetos',
      children: [
        { path: '/gerenteimplantacao', component: load('GerenteImplantacao'), name: 'gerenteimplantacao' },
        { path: '/gerenteprojetos', component: load('GerenteProjetos'), name: 'gerenteprojetos' },
        { path: '/equipes', component: load('Equipes'), name: 'equipes' },
        { path: '/cronograma', component: load('Cronograma'), name: 'cronogarama' },
        { path: '/helpdesk', component: load('HelpDesk'), name: 'helpdesk' },
        { path: '/cadastroprojeto', component: load('CadastroProjeto'), name: 'cadastroprojeto' }
      ],
      meta: {
        requiresAuth: true
      }
    },
    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('principal')
  else next()
})

export default router
