import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageCTA from "./pages/PageCTA";

import { themeContext } from './Context';
import { useContext } from 'react';
import "./App.css"

function App() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <Layout  className='App'   style={{ background: darkMode ? "black" : "",color: darkMode ? "white" : "",  }}>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/page-one">
                    <PageOne />
                </Route>
                <Route path="/page-two">
                    <PageTwo />
                </Route>
                <Route path="/page-three">
                    <PageThree />
                </Route>
                <Route path="/page-cta">
                    <PageCTA />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
