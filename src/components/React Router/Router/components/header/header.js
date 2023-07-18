import React from "react"
import { NavLink, useLocation } from 'react-router-dom'


const Header = () => {

    const location = useLocation()

    React.useEffect(() => {
        console.log('Mudou a roda')
    }, [location])

    return (
        <nav style={{
            width: '100%',
            display: 'flex',
            gap: '1em',
            justifyContent:'center',
        }}>
            
            <NavLink to='/' end >Home</NavLink> | 
            <NavLink to='sobre' >Sobre</NavLink> |
            <NavLink to='login' >Login</NavLink>

        </nav>
    )
}

export default Header