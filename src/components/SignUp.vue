<template>
  <div class="logo-container">
    <div class="img_logo">
      <img src=".././assets/consultor.jpg"/>
    </div>
    <p class="login">Criar nova conta !</p>
    <hr>
    <form @submit.prevent="login">
        <q-input class="full-width" v-model="email" required float-label="Usuário"/>
        <q-input class="full-width" v-model="password" type="password" required float-label="Senha"/>
        <q-btn class="button positive full-width" color="cyan-10" @click="signUp">Registre-se</q-btn>
        <hr class="linha">
        <div class="caixa">
          <p class="texto_alerta">ou volte para o <br/>
          <router-link class="crie_aqui" to="/login">Login!</router-link></p>
        </div>
      </form>
  </div>
</template>

<script>

var firebase = require('firebase/app')
require('firebase/auth')
require('firebase/database')

import {
  QBtn,
  QSelect,
  QInput,
  QSideLink
} from 'quasar'
export default {
  components: {
    QBtn,
    QSelect,
    QInput,
    QSideLink
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      // console.log(this.user)
    },
    signUp () {
      console.log('Teste')

      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          console.log('Entro no SignUp')
          alert('Sua conta foi criada com sucesso !')
        },
        function (err) {
          alert('Oops. ' + err.message)
        }
      )
    }
  }
  // firebase: {
  //   books: BooksRef
  // }
}
</script>

<style lang="stylus">
.logo-container
  width 255px
  height 242px
  perspective 800px
  position absolute
  top 23%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
.button
  margin-top 20px
.texto_alerta
  text-align center
  font-size: 14px
  margin-top 10px
.linha
  margin-top 20px
  margin-bottom 20px
.caixa
  border: 1px solid #E6E6E6
  border-radius: 10px;
.crie_aqui
  font-weight bold
  font-size 16px
  color #008B8B
.img_logo
  margin 0px
  margin-left 15px
.login
  text-align center
  font-size 20px
  margin-top 10px
  margin-bottom 0px
</style>
