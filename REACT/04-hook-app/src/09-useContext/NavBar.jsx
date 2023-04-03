import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <>  
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">UseContext</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink to="/" className={ `nav-link ${({ isActive }) => isActive ? 'active' : ''}` }>Home</NavLink>
                        <NavLink to="about" className={ `nav-link ${({ isActive }) => isActive ? 'active' : ''}` }>About</NavLink>
                        <NavLink to="login" className={ `nav-link ${({ isActive }) => isActive ? 'active' : ''}` }>Login</NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}