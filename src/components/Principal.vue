<template>
  <q-layout
    ref="layout"
    :left-class="{'bg-grey-2': true}"
  >
    <!-- <q-toolbar slot="header" class="glossy">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>

      <q-toolbar-title>
        GerConsult
        <div slot="subtitle">Gestor de Consultoria de Implantação</div>
      </q-toolbar-title>
    </q-toolbar> -->

    <q-toolbar slot="header" class="glossy" color="cyan-10">
      <q-btn
        flat
        @click="$refs.layout.toggleLeft()"
      >
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title>
        <!-- <span class="logo">GC</span> -->
         GERCONSULT
        <div slot="subtitle">Gestor de Consultoria de Implantação</div>
      </q-toolbar-title>
    </q-toolbar>

    <div slot="left">
      <q-toolbar class="text-dark" color="deep-purple-1">
        <q-toolbar-title>
          <div class="bemvindo">
            Bem Vindo ao GERCONSULT !
          </div>
        </q-toolbar-title>
      </q-toolbar>
      <q-list no-border link inset-delimiter>
        <!-- <q-list-header>Navegação</q-list-header>
        <q-item-separator></q-item-separator> -->
        <q-side-link item to="/gerprojetos">
          <q-item>
            <q-item-side icon="library_books" />
            <q-item-main label="Gestão de Projetos" sublabel=">> Entrega com qualidade"/>
          </q-item>
        </q-side-link>
        <q-item-separator></q-item-separator>
        <q-side-link item to="/consultores/registroatendimento">
          <q-item>
            <q-item-side icon="people_outline" />
            <q-item-main label="Atendimento Consultor" sublabel=">> Foco no Cliente"/>
          </q-item>
        </q-side-link>
        <q-item-separator></q-item-separator>
        <q-side-link item to="/acompanhamento">
          <q-item>
            <q-item-side icon="recent_actors" />
            <q-item-main label="Acompanhamento" sublabel=">> Acompanhe sua equipe"/>
          </q-item>
        </q-side-link>
        <q-item-separator></q-item-separator>
        <q-side-link item to="/sobreoapp">
          <q-item>
            <q-item-side icon="developer_board" />
            <q-item-main label="Sobre o App" sublabel=">> Saiba sobre o aplicativo"/>
          </q-item>
        </q-side-link>
        <q-item-separator></q-item-separator>
        <q-side-link item to="/login">
          <q-item>
            <q-item-side icon="exit_to_app" />
            <q-item-main @click="logout" label="Logout"/>
          </q-item>
        </q-side-link>
        <q-item-separator></q-item-separator>
      </q-list>
    </div>
    <!-- router-view -->
    <div class="layout-padding non-selectable">
      <router-view></router-view>
    </div>
    <!-- Footer -->
    <q-toolbar slot="footer" class="glossy" color="cyan-10">

    </q-toolbar>

  </q-layout>
</template>

<script>

var firebase = require('firebase/app')
require('firebase/auth')
require('firebase/database')

import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QItemSeparator,
  QSideLink,
  QScrollArea
} from 'quasar'
export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QItemSeparator,
    QSideLink,
    QScrollArea
  },
  data () {
    return {}
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('Login')
      })
    }
  }
}
</script>

<style lang="stylus">
  .logo {
    display: inline-block;
    padding: 0 5px;
    background-color: #777;
    border: 2px solid #555;
    border-radius: 4px;
  }
  .bemvindo {
    padding-left: 10px;
    padding-top: 25px;
    padding-bottom: 25px;

  }
</style>
