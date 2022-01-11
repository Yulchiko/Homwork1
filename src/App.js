import './App.css';
import Users from "./Users/Users";
import Posts from "./Posts/Posts";
import Components from "./Components/Components";

function App() {
    return (
        <div className="Item">
        <div className="User_post"> <Users/>
        <Posts/></div>
        <div className="Component"> <Components/></div>
        </div>
);
}

export default App;
