import { Link } from "react-router-dom"
import './Style.css'

const Home = () => {
    return (<div>
    
    <h1>Home</h1>
    <p>Essa é a home</p>

    <div className="navigator">
        <Link to='produto/notebook'>Notebook</Link> | 
        <Link to='produto/smartphone'>Smartphone</Link>
    </div>

    </div>)
}

export default Home