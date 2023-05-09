import ReactDOM from 'react-dom/client'
import App from './App'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";                  
import "primeicons/primeicons.css";
import '../node_modules/primeflex/primeflex.scss';
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<App />)
