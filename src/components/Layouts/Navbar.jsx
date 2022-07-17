import { Link, NavLink } from "react-router-dom"

const Navbar = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold text-uppercase">GOTO-MARS</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/article" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >Article</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} >Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
