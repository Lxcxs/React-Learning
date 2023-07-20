import { Link } from "react-router-dom"
import './Style.css'
import Head from "../components/Head/head"
import { Helmet } from 'react-helmet'

const Home = () => {
    return (<div>
    
    <h1>Home</h1>
    <p>Essa é a home</p>

    {/* <Head title='Home' description="Essa é a descrição da Home" /> */}
    <Helmet>
        <title>React | Home</title>
        <meta name="description" content="Essa é a descrição da Home com Helmet" />
    </Helmet>

    <div className="navigator">
        <Link to='produto/notebook'>Notebook</Link> | 
        <Link to='produto/smartphone'>Smartphone</Link>
    </div>

    </div>)
}

export default Home