import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { Windmill } from '@windmill/react-ui'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const rootElement = document.querySelector('#root')
if (!rootElement) {
  throw new Error('Root element not found')
}
const root = ReactDOM.createRoot(rootElement)

root.render(
  <Provider store={store}>
    <Windmill>
      <App />
      <ToastContainer />
    </Windmill>
  </Provider>
)
