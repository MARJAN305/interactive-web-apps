// scripts.js

//the configuration syntax was wrong
//Added the curly brackets
//added the ./
import { company, year } from './configuration'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message