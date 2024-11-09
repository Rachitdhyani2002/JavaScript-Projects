import logo from './logo.svg';
import './App.css';
import LoginForm from './components/auth/LoginForm';
import { Route, Routes } from 'react-router-dom';
import RegisterForm from './components/auth/RegisterForm';
import ForgotPasswordForm from './components/auth/ForgetPasswordForm';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/register' element={<RegisterForm/>}/>
          <Route path='/forgot-password' element={<ForgotPasswordForm/>} />
           <Route path='dashboard' element={<Dashboard/>}/>
        </Routes>
    </div>
  );
}

export default App;
