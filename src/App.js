import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import publicRoute from './route';
import Layouts from './Components/Layouts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((route, index) => {
            const Pages = route.page;
            const Layout = route.layout || Layouts;
            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout><Pages /></Layout>} />
            );
          })}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
