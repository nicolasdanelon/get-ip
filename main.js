import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { makeRequest } from './request.js'

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${viteLogo}" class="logo" alt="Vite logo" />
    <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1 id="test-request">getting your IP Address</h1>
    <pre class="read-the-docs">
      fetch('https://cors-proxy.fringe.zone/https://ipconfig.io/json')
    </pre>
    <p class="read-the-docs">
      Ver la consola
    </p>
  </div>
`

makeRequest(document.querySelector('#test-request'))
