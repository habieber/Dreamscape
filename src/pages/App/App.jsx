import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-services'
import AllDreamsPage from '../AllDreamsPage/AllDreamsPage';
import NewDreamPage from '../NewDreamPage/NewDreamPage';
import DreamDetailPage from '../DreamDetailPage/DreamDetailPage'

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    
    <main className="App">
      <NavBar user={user} setUser={setUser}/>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<AllDreamsPage user={user} />} />
            <Route path="/new" element={<NewDreamPage user={user} />} />
            <Route path="/:id" element={<DreamDetailPage user={user} />} />
          </>
        ) : (
          <>
          <Route path="/" element={<AuthPage setUser={setUser} />} />
          <Route path="/new" element={<NewDreamPage/>} />
          </>
       
        )}
      </Routes>
    </main>
    
  );
}
