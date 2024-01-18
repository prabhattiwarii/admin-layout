import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Main from "./components/main/Main";
import "./App.css"
function App() {
  return (
    <div className="container">
        <Header/>
        <SideBar/>
        <Main/>
    </div>
  );
}

export default App;
