import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './assets/style/common.scss'

import '@nutui/nutui-react/dist/style.css'
import { Provider } from 'react-redux'
import 'insert-css'
import 'uno.css'

// import store from './store/index'
import store from './store'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
 
    <Provider store={store} >
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>


)
