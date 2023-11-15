import "./App.css";
import {BrowserRouter as Router,Routes,Route} from  "react-router-dom"

import Main from "./component/Main";
import AppRouter from "./AppRouter";
import Signup from "./component/Signup";
// import Navbar from "./component/Navbar";

function App() {
  return (
    <>
    <Router>
      <Routes>
       <Route path="/"  Component={Signup} />
        <Route path="/main" Component={Main} />
       <Route path="/router"  Component={AppRouter} />
      </Routes>
    </Router>
    {/* <Main/> */}
     
    </>
  );
}

export default App;


{/* <Route path="/movies/trending" Component={()=><PropReq title="Trending" fetchUrl={requests.fetchTrending} />} />
<Route path="/movies/toprated" exact component={() => <PropReq title="TopRated" fetchUrl={requests.fetchTopRated} />} /> */}
