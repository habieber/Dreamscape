import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-services'
import AllNotesPage from '../AllNotesPage/AllNotesPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user.name} setUser={setUser}/>
          <Routes>
            <Route path="notes" element={<AllNotesPage user={user} />} />
        </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
