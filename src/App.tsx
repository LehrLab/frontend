import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { navigationButtons } from './shared/ui/sidebar/navigation-keys';
import { Sidebar } from './shared/ui/sidebar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {navigationButtons.map((btn) => {
            return (
              <Route
                key={btn.key}
                path={btn.href}
                element={
                  <>
                    <Sidebar />
                    <btn.page />
                  </>
                }
              />
            );
          })}

          <Route
            path='/'
            element={
              <>
                <Sidebar />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
