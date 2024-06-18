import React, { createContext, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import { navItems } from './utils/constants';
import Main from './components/Main';


export interface IPageContext {
  page: string,
  setPage: (newValue: string) => void
}

// 1. Создание контекста
export const PageContext = createContext<IPageContext | null>(null);

const App: React.FC = () => {
  const [page, setPage] = useState(navItems[0]);

  return (
    <div className="App">
      {/* 2. Передача контекста */}
      <PageContext.Provider value={{ page, setPage }}>
        <Router>
          <Header />
          <Main />
        </Router>
      </PageContext.Provider>
    </div>
  );
};


export default App;
