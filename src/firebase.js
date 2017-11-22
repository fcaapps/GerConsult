var firebase = require('firebase/app')
require('firebase/auth')
require('firebase/database')

var config = {
  apiKey: 'AIzaSyC0oHGxGGBDoMWI_O2kIvVhKAmS_qV9cQE',
  authDomain: 'gerconsult-1bcaa.firebaseapp.com',
  databaseURL: 'https://gerconsult-1bcaa.firebaseio.com',
  projectId: 'gerconsult-1bcaa',
  storageBucket: '',
  messagingSenderId: '174414317774'
}

firebase.initializeApp(config)

// Connection
export const db = firebase.database()
export const Firebase = firebase

// DB's
export const Projetos = db.ref('Projetos')
export const Equipes = db.ref('Equipes')
export const GerenteProjetosPC = db.ref('Gerente de Projetos')
export const HelpDesk = db.ref('HelpDesck')
export const Consultores = db.ref('Consultores')
