<template>
  <div>
    <div class="cabecalho">
      <p class="texto_cab">NOVO PROJETO</p>
    </div>
    <div>
      <q-btn
        round
        class="btn-round"
        color="green"
        icon="save"
        style="left: 10px"
        @click="addProjeto"
        small
      >
      </q-btn>
      <q-btn
        round
        class="btn-round"
        color="deep-orange-9"
        icon="edit"
        style="left: 10px"
        small
      >
      </q-btn>
      <q-btn
        round
        class="btn-round"
        color="grey-9"
        icon="search"
        style="left: 10px"
        small
      >
      </q-btn>
      <!-- <q-fab
        class="fixed"
        color="teal-10"
        style="right: 10px; bottom: 70px"
        icon="keyboard_arrow_right"
        direction="right"
      >
        <q-fab-action
          color="cyan-9"
          @click="addProjeto()"
          icon="save"
        ></q-fab-action>
        <q-fab-action
          color="secondary"
          @click=""
          icon="search"
        ></q-fab-action>
      </q-fab> -->
    </div>
    <form @submit.prevent="">
      <q-collapsible icon="add_circle_outline" label="Gerais">
        <div>
          <q-input class="texto_validador full-width" v-model="projeto.vendedor" :error="$v.projeto.vendedor.$error" required stack-label="Vendedor"/>
          <q-input class="full-width" v-model="projeto.totalhoras" :error="$v.projeto.vendedor.$error" required stack-label="Total Horas"/>
          <!-- <q-input class="full-width" v-model="projeto.dtabertura" required stack-label="Dt. Abertura"/> -->
          <q-datetime color="cyan-10" class="full-width" type="date" ok-label="OK" clear-label="LIMPAR" cancel-label="FECHAR" format="DD/MM/YYYY" v-model="projeto.dtabertura" required stack-label="Dt. Abertura"/>
          <q-input class="full-width" v-model="projeto.fase" required stack-label="Fase"/>
        </div>
      </q-collapsible>
      <!-- Lista Cliente -->
      <q-collapsible icon="add_circle_outline" label="Cliente">
        <div>
          <q-input class="full-width" v-model="projeto.cliente.nomecliente" :error="$v.projeto.vendedor.$error" required stack-label="Nome"/>
          <q-input class="full-width" v-model="projeto.cliente.endereco" required stack-label="Endereço"/>
          <q-input class="full-width" v-model="projeto.cliente.numero" required stack-label="Número"/>
          <q-input class="full-width" v-model="projeto.cliente.bairro" required stack-label="Bairro"/>
          <q-input class="full-width" v-model="projeto.cliente.cep" required stack-label="Cep"/>
          <q-input class="full-width" v-model="projeto.cliente.cidade" required stack-label="Cidade"/>
          <q-input class="full-width" v-model="projeto.cliente.telcontato" :error="$v.projeto.vendedor.$error" required stack-label="Tel. Contato"/>
        </div>
      </q-collapsible>
      <!-- Lista Consultor -->
      <q-collapsible icon="add_circle_outline" label="Consultor" @open="carregaListConsultores" @close="removeListConsultores">
        <div>
          <q-select
            stack-label="Nome"
            v-model="projeto.consultor.nome"
            :options="listConsultor"
            @change="getDadosConsultor"
          />
          <q-input class="full-width" v-model="projeto.consultor.tipo" :error="$v.projeto.vendedor.$error" required stack-label="Tipo"/>
          <q-datetime color="cyan-10" class="full-width" type="date" ok-label="OK" clear-label="LIMPAR" cancel-label="FECHAR" format="DD/MM/YYYY" v-model="projeto.consultor.dtadmissao" required stack-label="Dt. Admissão"/>
          <q-collapsible icon="remove_circle_outline" label="Equipe" @open="carregaListEquipes" @close="removeListEquipes">
            <div>
              <q-select
                stack-label="Nome"
                v-model="projeto.consultor.equipe.nome"
                :options="listEquipes"
                @change="getDadosEquipe"
              />
              <q-input class="full-width" v-model="projeto.consultor.equipe.gestor" required stack-label="Gerente de Implantação"/>
            </div>
          </q-collapsible>
        </div>
      </q-collapsible>
      <!-- Lista Cronograma -->
      <q-collapsible icon="add_circle_outline" label="Cronograma">
        <div>
          <!-- Abertura -->
          <q-collapsible icon="remove_circle_outline" label="Abertura">
            <div>
              <q-datetime color="cyan-10" class="full-width" type="date" ok-label="OK" clear-label="LIMPAR" cancel-label="FECHAR" format="DD/MM/YYYY" v-model="projeto.cronograma.abertura.dtinicio" required stack-label="Dt. Início"/>
              <q-datetime color="cyan-10" class="full-width" type="date" ok-label="OK" clear-label="LIMPAR" cancel-label="FECHAR" format="DD/MM/YYYY" v-model="projeto.cronograma.abertura.dtfim" required stack-label="Dt. Fim"/>
              <q-input class="full-width" v-model="projeto.cronograma.abertura.tothoras" required stack-label="Tot. Horas"/>
            </div>
          </q-collapsible>
          <!-- Parametrização -->
          <q-collapsible icon="remove_circle_outline" label="Parametrização">
            <div>
              <q-datetime color="cyan-10" class="full-width" type="date" ok-label="OK" clear-label="LIMPAR" cancel-label="FECHAR" format="DD/MM/YYYY" v-model="projeto.cronograma.parametrizacao.dtinicio" required stack-label="Dt. Início"/>
              <q-datetime color="cyan-10" class="full-width" type="date" ok-label="OK" clear-label="LIMPAR" cancel-label="FECHAR" format="DD/MM/YYYY" v-model="projeto.cronograma.parametrizacao.dtfim" required stack-label="Dt. Fim"/>
              <q-input class="full-width" v-model="projeto.cronograma.parametrizacao.tothoras" required stack-label="Tot. Horas"/>
            </div>
          </q-collapsible>
          <!-- Migração -->
          <q-collapsible icon="remove_circle_outline" label="Migração">
            <div>
              <q-datetime color="cyan-10" class="full-width" type="date" ok-label="OK" clear-label="LIMPAR" cancel-label="FECHAR" format="DD/MM/YYYY" v-model="projeto.cronograma.migracao.dtinicio" required stack-label="Dt. Início"/>
              <q-datetime color="cyan-10" class="full-width" type="date" ok-label="OK" clear-label="LIMPAR" cancel-label="FECHAR" format="DD/MM/YYYY" v-model="projeto.cronograma.migracao.dtfim" required stack-label="Dt. Fim"/>
              <q-input class="full-width" v-model="projeto.cronograma.migracao.tothoras" required stack-label="Tot. Horas"/>
            </div>
          </q-collapsible>
          <!-- Inspeção -->
          <q-collapsible icon="remove_circle_outline" label="Inspeção">
            <div>
              <q-datetime color="cyan-10" class="full-width" type="date" ok-label="OK" clear-label="LIMPAR" cancel-label="FECHAR" format="DD/MM/YYYY" v-model="projeto.cronograma.inspecao.dtinicio" required stack-label="Dt. Início"/>
              <q-datetime color="cyan-10" class="full-width" type="date" ok-label="OK" clear-label="LIMPAR" cancel-label="FECHAR" format="DD/MM/YYYY" v-model="projeto.cronograma.inspecao.dtfim" required stack-label="Dt. Fim"/>
              <q-input class="full-width" v-model="projeto.cronograma.inspecao.tothoras" required stack-label="Tot. Horas"/>
            </div>
          </q-collapsible>
          <!-- Virada -->
          <q-collapsible icon="remove_circle_outline" label="Virada">
            <div>
              <q-datetime color="cyan-10" class="full-width" type="date" ok-label="OK" clear-label="LIMPAR" cancel-label="FECHAR" format="DD/MM/YYYY" v-model="projeto.cronograma.virada.dtinicio" required stack-label="Dt. Início"/>
              <q-datetime color="cyan-10" class="full-width" type="date" ok-label="OK" clear-label="LIMPAR" cancel-label="FECHAR" format="DD/MM/YYYY" v-model="projeto.cronograma.virada.dtfim" required stack-label="Dt. Fim"/>
              <q-input class="full-width" v-model="projeto.cronograma.virada.tothoras" required stack-label="Tot. Horas"/>
            </div>
          </q-collapsible>
        </div>
      </q-collapsible>
      <!-- Gerente de Projetos -->
      <q-collapsible icon="add_circle_outline" label="Gerente de Projetos - PC" @open="carregaListGPPC" @close="removeListGPPC">
        <div>
          <q-select
            stack-label="Nome"
            v-model="projeto.gerenteprojetos.nome"
            :options="listGPPC"
            @change="getDadosGerenteProjetosPC"
          />
          <q-input class="full-width" v-model="projeto.gerenteprojetos.descatividades" required stack-label="Desc. Atividades"/>
          <q-input class="full-width" v-model="projeto.gerenteprojetos.telcontato" required stack-label="Tel. Contato"/>
        </div>
      </q-collapsible>
      <!-- Gerente de Projetos Cliente -->
      <q-collapsible icon="add_circle_outline" label="Gerente de Projetos - Cliente" @open="carregaListGPPC" @close="removeListGPPC">
        <div>
          <q-input class="full-width" v-model="projeto.gerenteprojetoscliente.nome" required stack-label="Nome"/>
          <q-input class="full-width" v-model="projeto.gerenteprojetoscliente.funcao" required stack-label="Função"/>
          <q-input class="full-width" v-model="projeto.gerenteprojetoscliente.descatividades" type="textarea" :max-height="300" required stack-label="Desc. Atividades"/>
          <q-input class="full-width" v-model="projeto.gerenteprojetoscliente.telcontato" required stack-label="Tel. Contato"/>
        </div>
      </q-collapsible>
      <!-- Help Desk -->
      <q-collapsible icon="add_circle_outline" label="Help Desk" @open="carregaHelpDesk" @close="removeHelpDesk">
        <div>
          <q-select
            stack-label="Nome"
            v-model="projeto.helpdesk.nome"
            :options="listHelpDesk"
            @change="getDadosHelpDesk"
          />
          <q-input class="full-width" v-model="projeto.helpdesk.descatividades" required stack-label="Desc. Atividades"/>
          <q-input class="full-width" v-model="projeto.helpdesk.telcontato" required stack-label="Tel. Contato"/>
        </div>
      </q-collapsible>
      <!-- <div>
        <q-btn class="button full-width" color="cyan-10" icon="save">Gravar</q-btn>
      </div> -->
    </form>
  </div>
</template>

<script>

import { Equipes, GerenteProjetosPC, HelpDesk, Projetos, Consultores } from '../firebase'
import { required } from 'vuelidate/lib/validators'

import {
  QFab,
  QFabAction,
  QInput,
  QBtn,
  Toast,
  QList,
  QCollapsible,
  QSelect,
  Alert,
  QDatetime,
  date
} from 'quasar'
export default {
  components: {
    QFab,
    QFabAction,
    QInput,
    QBtn,
    Toast,
    QList,
    QCollapsible,
    QSelect,
    Alert,
    QDatetime
  },
  data () {
    return {
      selectEquipes: '',
      listEquipes: [],
      selectGPPC: '',
      listGPPC: [],
      selectHelpDesk: '',
      listHelpDesk: [],
      listConsultor: [],
      tipoConsultor: [
        {
          label: 'CLT',
          value: 'clt'
        },
        {
          label: 'PJ',
          value: 'pj'
        }
      ],
      projeto: {
        vendedor: '',
        totalhoras: '',
        dtabertura: '',
        fase: '',
        cliente: {
          bairro: '',
          cep: '',
          cidade: '',
          endereco: '',
          nomecliente: '',
          numero: '',
          telcontato: ''
        },
        consultor: {
          dtadmissao: '',
          equipe: {
            nome: '',
            gestor: ''
          },
          nome: '',
          tipo: ''
        },
        cronograma: {
          abertura: {
            dtInicio: '',
            dtFim: '',
            tothoras: ''
          },
          inspecao: {
            dtInicio: '',
            dtFim: '',
            tothoras: ''
          },
          migracao: {
            dtInicio: '',
            dtFim: '',
            tothoras: ''
          },
          parametrizacao: {
            dtInicio: '',
            dtFim: '',
            tothoras: ''
          },
          virada: {
            dtInicio: '',
            dtFim: '',
            tothoras: ''
          }
        },
        gerenteprojetos: {
          nome: '',
          descatividades: '',
          telcontato: ''
        },
        gerenteprojetoscliente: {
          nome: '',
          funcao: '',
          descatividades: '',
          telcontato: ''
        },
        helpdesk: {
          nome: '',
          descatividades: '',
          telcontato: ''
        }
      }
    }
  },
  firebase: {
    equipe: Equipes,
    gppc: GerenteProjetosPC,
    helpdesk: HelpDesk,
    consultor: Consultores
  },
  validations: {
    projeto: {
      vendedor: {
        required
      }
    }
  },
  // created: function () {
  //   this.$bindAsArray('consultor_i', Consultores)
  // },
  methods: {

    formatDtAbertura () {
      // Testar Datas
      let dataFormatada = date.formatDate(this.projeto.dtabertura, 'DD-MM-YYYY')
      this.projeto.dtabertura = dataFormatada
    },

    // Dados Consultor
    getDadosConsultor () {
      let index = this.consultor.map(function (d) { return d['Nome'] }).indexOf(this.projeto.consultor.nome)
      this.projeto.consultor.tipo = this.consultor[index].Tipo
      this.projeto.consultor.dtadmissao = this.consultor[index].DtAdmissao
    },
    // Dados Equipe
    getDadosEquipe () {
      let index = this.equipe.map(function (d) { return d['Nome'] }).indexOf(this.projeto.consultor.equipe.nome)
      this.projeto.consultor.equipe.gestor = this.equipe[index].Gestor
    },
    // Dados Gerente de Projetos - PC
    getDadosGerenteProjetosPC () {
      let index = this.gppc.map(function (d) { return d['Nome'] }).indexOf(this.projeto.gerenteprojetos.nome)
      this.projeto.gerenteprojetos.descatividades = this.gppc[index].DescAtividades
      this.projeto.gerenteprojetos.telcontato = this.gppc[index].TelContato
    },
    // Dados Help Desk
    getDadosHelpDesk () {
      let index = this.helpdesk.map(function (d) { return d['Nome'] }).indexOf(this.projeto.helpdesk.nome)
      this.projeto.helpdesk.descatividades = this.helpdesk[index].DescAtividades
      this.projeto.helpdesk.telcontato = this.helpdesk[index].TelContato
    },
    // Salva Projeto
    addProjeto () {
      this.$v.projeto.$touch()
      if (this.$v.projeto.$error) {
        Toast.create({
          icon: 'text_fields',
          color: 'white',
          html: 'Rever campos obrigatórios !',
          position: 'top-right',
          bgColor: 'green'
        })
      }
      else {
        Projetos.push(this.projeto)
      }
    },
    // Carrega Lista Equipes
    carregaListEquipes () {
      for (var i = 0; i < this.equipe.length; i++) {
        this.listEquipes.push({ label: this.equipe[i].Nome, value: this.equipe[i].Nome })
      }
    },

    // Remove Lista Equipes
    removeListEquipes () {
      this.listEquipes.splice(0, this.listEquipes.length)
    },

    // Carrega Lista GPPC
    carregaListGPPC () {
      for (var i = 0; i < this.gppc.length; i++) {
        this.listGPPC.push({ label: this.gppc[i].Nome, value: this.gppc[i].Nome })
      }
    },

    // Remove Lista GPPC
    removeListGPPC () {
      this.listGPPC.splice(0, this.listGPPC.length)
    },

    // Carrega Lista Help Desk
    carregaHelpDesk () {
      for (var i = 0; i < this.helpdesk.length; i++) {
        this.listHelpDesk.push({ label: this.helpdesk[i].Nome, value: this.helpdesk[i].Nome })
      }
    },

    // Remove Lista Help Desk
    removeHelpDesk () {
      this.listHelpDesk.splice(0, this.listHelpDesk.length)
    },

    // Carrega Lista Consultor
    carregaListConsultores () {
      console.log('Entrou no Lista Consultor')
      for (var i = 0; i < this.consultor.length; i++) {
        this.listConsultor.push({ label: this.consultor[i].Nome, value: this.consultor[i].Nome })
      }
    },

    // Remove Lista Consultor
    removeListConsultores () {
      this.listConsultor.splice(0, this.listConsultor.length)
    }
  }
}
</script>

<style lang="stylus">
  .cabecalho {
    border: 2px solid #008B8B
    border-radius: 5px;
    border-style: groove;
    text-align: center;
    margin-top: -15px;
    margin-bottom: 20px;
  }
  .texto_cab {
    margin: 10px;
    vertical-align: middle;
    color: #008B8B;
    font-weight: bold;
    font-size: 22px;
  }
  .button {
    margin: 20px;
    width: 300px;
    height: 80px;
  }
  .btn-round {
    margin-bottom: 10px;
  }
  .texto_validador {
    padding: 0px;
    margin: 0px;
    text-align: justify
    font-size: 12 px;
    color: red;
  }
</style>
