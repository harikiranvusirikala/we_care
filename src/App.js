import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import CoachLogin from './components/CoachLogin';
import UserLogin from './components/UserLogin';
import CoachSignup from './components/CoachSignup';
import UserSignup from './components/UserSignup';
import CoachHome from './components/CoachHome';
import CoachSchedules from './components/CoachSchedules';
import CoachViewProfile from './components/CoachViewProfile';
import { Provider } from 'react-redux';
import store from './store.jsx/store';

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/coachLogin" element={<CoachLogin />} />
					<Route path="/coachSignUp" element={<CoachSignup />} />
					<Route path="/coachHome" element={<CoachHome />} />
					<Route path="/coachSchedules" element={<CoachHome />} />
					<Route path="/coachViewProfile" element={<CoachViewProfile />} />
					<Route path="/userLogin" element={<UserLogin />} />
					<Route path="/userSignUp" element={<UserSignup />} />
					<Route path="*" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
