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
        <div slot="subtitle">Gestão de Projetos</div>
      </q-toolbar-title>
    </q-toolbar>

    <div slot="left">
      <q-toolbar class="text-dark" color="deep-purple-1">
        <q-toolbar-title>
          <div class="bemvindo">
            GESTÃO DE PROJETOS
          </div>
        </q-toolbar-title>
      </q-toolbar>
      <q-list no-border link inset-delimiter>
        <!-- <q-list-header>Navegação</q-list-header>
        <q-item-separator></q-item-separator> -->
        <q-side-link item to="/cadastroprojeto">
          <q-item>
            <q-item-side icon="assessment" />
            <q-item-main label="Projetos"/>
          </q-item>
        </q-side-link>
        <q-item-separator></q-item-separator>
        <q-side-link item to="/gerenteprojetos">
          <q-item>
            <q-item-side icon="account_circle" />
            <q-item-main label="Gerente de Projetos"/>
          </q-item>
        </q-side-link>
        <!-- <q-item-separator></q-item-separator>
        <q-side-link item to="/gerenteimplantacao">
          <q-item>
            <q-item-side icon="nature_people" />
            <q-item-main label="Gerente de Implantação"/>
          </q-item>
        </q-side-link> -->
        <q-item-separator></q-item-separator>
        <q-side-link item to="/equipes">
          <q-item>
            <q-item-side icon="people" />
            <q-item-main label="Equipes"/>
          </q-item>
        </q-side-link>
        <q-item-separator></q-item-separator>
        <q-side-link item to="/consultores">
          <q-item>
            <q-item-side icon="people_outline" />
            <q-item-main label="Consultores"/>
          </q-item>
        </q-side-link>
        <q-item-separator></q-item-separator>
        <q-side-link item to="/helpdesk">
          <q-item>
            <q-item-side icon="help_outline" />
            <q-item-main label="Help Desk"/>
          </q-item>
        </q-side-link>
        <q-item-separator></q-item-separator>
        <q-side-link item to="/cronograma">
          <q-item>
            <q-item-side icon="perm_contact_calendar" />
            <q-item-main label="Cronograma"/>
          </q-item>
        </q-side-link>
        <q-item-separator></q-item-separator>
        <q-side-link item to="/principal">
          <q-item>
            <q-item-side icon="close" />
            <q-item-main label="Sair"/>
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
