<template>
  <div>
    <h5>Sobre o App</h5>
    <hr/>
    <div>
      <form>
        <q-input
          v-model="form.email"
          @blur="$v.form.email.$touch"
          @keyup.enter="submit"
          @keyup.delete="usouDeleteBackspace"
          :error="$v.form.email.$error"
        />
        <div v-if="usouDB === true">
          <p class="texto_validador" v-if="!$v.form.email.required">O E-mail é Obrigatório</p>
        </div>
        <div v-else>
        </div>
        <p class="texto_validador" v-if="!$v.form.email.email">Não é um e-mail válido</p>
        <p class="texto_validador" v-if="!$v.form.email.minLength">Obrigatório mínimo de {{$v.form.email.$params.minLength.min}} caracteres</p>
      </form>
      <!-- <p class="texto_validador" v-if="!$v.form.email.required">Campo obrigatório</p><br/> -->
      <q-btn color="primary" @click="submit">Submit</q-btn>
    </div>

    <!-- <q-field
      icon="mail"
      label="Email"
      helper="Type the email we can use to contact you"
      :error="$v.email.$error"
      error-label="Please type a valid email"
      count
      >
      <q-input
        type="email"
        v-model="email"
        @blur="$v.email.$touch"
      />
    </q-field> -->
    <!-- <div> -->
      <!-- <div>
        <div class="form-group" v-bind:class="{ 'form-group--error': $v.name.$error }">
          <label class="form__label">Name</label>
          <input class="form__input" v-model.trim="name" @input="$v.name.$touch()">
        </div><span class="form-group__message" v-if="!$v.name.required">Field is required</span><span class="form-group__message" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</span>
        <pre>name: {{ $v.name }}</pre>
        <div class="form-group" v-bind:class="{ 'form-group--error': $v.age.$error }">
          <label class="form__label">Age</label>
          <input class="form__input" v-model.trim="age" @blur="$v.age.$touch()">
        </div><span class="form-group__message" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</span>
        <pre>age: {{ $v.age }}</pre>
      </div>
      <q-input
        v-model="name"
        v-bind:class="{ 'form-group--error': $v.name.$error }"
        @blur="$v.name.$touch()"
      />
      <q-input
        v-model="age"
        @blur="$v.age.$touch()"
      />
      <!-- <q-input v-model="email" :class="{'input': true, 'is-danger': $v.email.$invalid }" type="text" placeholder="Email"/> -->
      <!-- <q-btn color="primary" @click="submit">Submit</q-btn>
    </div> -->
    <!-- <q-data-table
      :data="books || []"
      :columns="columns"
      :config="config"
    >
    </q-data-table> -->
  </div>
</template>

<script>

// import { BooksRef } from '.././firebase'
import { required, email, minLength } from 'vuelidate/lib/validators'

import {
  QField,
  QInput,
  QBtn,
  QDataTable,
  Toast
} from 'quasar'

export default {
  components: {
    QField,
    QInput,
    QBtn,
    QDataTable
  },
  data () {
    return {
      form: {
        email: ''
      },
      usouDB: false,
      config: {
        // title: 'Produtos'
        columnPicker: true,
        selection: 'single',
        rowHeight: '50px',
        messages: {
          noData: 'Nenhum registro para exibir.',
          noDataAfterFiltering: 'No results. Nenhum resultado. Refine os termos de busca.'
        },
        labels: {
          columns: 'Colunas',
          search: 'Pesquisar produto...',
          allCols: 'Todas as colunas',
          clear: 'limpar',
          selected: {
            singular: 'item selecionado.'
          }
        }
      },
      columns: [
        {
          label: 'Autor',
          field: 'author',
          width: '100px',
          sort: true,
          filter: true
        },
        {
          label: 'Título',
          field: 'title',
          width: '100px',
          sort: true,
          filter: true
        },
        {
          label: 'Url',
          field: 'url',
          width: '100px',
          sort: true,
          filter: true
        }
      ]
    }
  },
  validations: {
    form: {
      email: {
        required,
        email,
        minLength: minLength(15)
      }
    }
  },
  methods: {
    submit () {
      // Toast.create('Testando 123 !!!')
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        Toast.create('Please review fields again.')
      }
      else {
        Toast.create('Field Valid.')
      }
    },
    usouDeleteBackspace () {
      if (this.form.email === '') {
        this.usouDB = true
      }
      else {
        this.usouDB = false
      }
      console.log(this.usouDB)
    }
  }
  // firebase: {
  //   books: BooksRef
  // }
}
</script>

<style lang="stylus">
  .texto_validador {
    padding: 0px;
    margin: 0px;
    text-align: justify
    font-size: 13 px;
    color: red;
  }
</style>
