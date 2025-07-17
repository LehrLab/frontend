import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Sidebar } from './shared/ui/sidebar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<></>}
          />

          <Route
            path='/spaces'
            element={<></>}
          />

          <Route
            path='/faq'
            element={<></>}
          />

          <Route
            path='/my_lessons'
            element={<></>}
          />
        </Routes>
        <Sidebar />
      </BrowserRouter>
    </>
  );
}

export default App;
