<template>
  <div>
    <q-tabs no-pane-border inverted color="secondary" align="justify">
        <q-tab default name="agendamento" slot="title" icon="perm_contact_calendar" label="Agendamento" />
        <q-tab name="atendimento" slot="title" icon="assignment" label="Registro de Atividades" />

        <q-tab-pane name="agendamento">
        </q-tab-pane>
        <q-tab-pane name="atendimento">
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
