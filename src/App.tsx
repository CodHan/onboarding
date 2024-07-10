import { Route, Routes } from 'react-router-dom';

import Header from './components/common/Header';
import Nav from './components/common/Nav';
import Home from './pages/Home';
import Join from './pages/Join';
import Mypage from './pages/Mypage';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/mypage" element={<Mypage />}></Route>
      </Routes>
    </>
  );
}

export default App;
