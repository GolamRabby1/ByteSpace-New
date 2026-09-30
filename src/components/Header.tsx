import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, ShoppingBag, X } from 'lucide-react';
import Brand from './Brand';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header className="site-header grid-blue">
      <div className="container nav-wrap">
        <Brand light />
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          className={open ? 'nav-open' : ''}
          aria-label="Main navigation"
          onKeyDown={(e) => {
            if (e.key === 'Escape') setOpen(false);
          }}
        >
          <div className="nav-main">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/courses">Courses</NavLink>
            <a href="/#creators" onClick={() => setOpen(false)}>
              Creators
            </a>
          </div>
          <div className="nav-account">
            <Link to="/login">Sign In</Link>
            <span aria-hidden="true" />
            <Link to="/signup">Join Us</Link>
            <Link to="/courses" aria-label="Explore courses">
              <ShoppingBag size={21} />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
