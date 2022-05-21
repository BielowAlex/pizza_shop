import './assets/Styles/app.css';
import {Header} from "./components";
import {Route,Routes} from "react-router-dom";
import {Cart, Home} from "./pages";
import {NotFound} from "./pages/NotFuond/NotFound";

function App() {


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path={'/'} element={<Home/>} exact/>
                    <Route path={'/cart'} element={<Cart/>} exact/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </div>
            {/*<Content/>*/}
        </div>
    );
}

export default App;
