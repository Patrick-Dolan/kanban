import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeContextProvider } from './context/ThemeContext.tsx';
import { BoardContextProvider } from './context/BoardContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeContextProvider>
    <BoardContextProvider>
      <App />
    </BoardContextProvider>
  </ThemeContextProvider>,
);
