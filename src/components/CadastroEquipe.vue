<template>
  <div>
    <q-tabs no-pane-border inverted color="secondary" align="justify">
        <q-tab default name="cadastro" slot="title" icon="save" label="Cadastro" />
        <q-tab name="consulta" slot="title" icon="receipt" label="Consulta" />
        <q-tab-pane name="cadastro">
        </q-tab-pane>
        <q-tab-pane name="consulta">
        </q-tab-pane>
    </q-tabs>
  </div>
</template>

<script>
import {
  QTabs,
  QTab,
  QTabPane
} from 'quasar'
export default {
  components: {
    QTabs,
    QTab,
    QTabPane
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
