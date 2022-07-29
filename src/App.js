import { useState, useContext } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import CityWeather from './views/CityWeather'
//import firebase from './firebase'
//import { AuthContext } from './contexts/AuthProvider'

export default function App() {
    //const { login, logout, user } = useContext(AuthContext)

    return (
        <>
            <Router>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/Home">Home</Link>
                        </li>
                        <li>
                            <Link to="/CityWeather">Current Weather</Link>
                        </li>
                    </ul>
                    <ul>
                        {
                            //(user.loggedIn) ?
                                //<li>
                                    //<button onClick={logout}>Logout</button>
                                //</li>
                                //:
                                //<li>
                                    //<button onClick={login}>Login</button>
                                //</li>
                        }
                    </ul>
                </nav>

                {/* <h2>Current User: {user.username}</h2> */}

                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/" element={<Login /> }/>
                    <Route path="/CityWeather" element={<CityWeather />} />
                        <Route path="" element={<Home />} />
                    <Route path="/" element={<Login />} />
                </Routes>
            </Router>
        </>
    )
}

