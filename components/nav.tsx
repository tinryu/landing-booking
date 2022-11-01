import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'
import LogoPic from "../public/assets/images/logo.svg";

const menu = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'About', path: '/about' },
  { id: 3, title: 'Service', path: '/services' },
  { id: 4, title: 'Room', path: '/room' },
  { id: 5, title: 'Gallery', path: '/gallery' },
  { id: 6, title: 'News', path: '/news' },
  { id: 7, title: 'Contact', path: '/contact' },
]

export default function Nav() {
  const router = useRouter();
  return (
    <nav className="menu-top navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">
            <Image src={LogoPic} alt="logo" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header">
            <Link href="/">
              <a className="navbar-brand">
                <Image src={LogoPic} alt="logo" />
              </a>
            </Link>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body justify-content-end">
            <ul className="navbar-nav">
              {menu.map((item, index) => {
                return (
                  <li key={item.id} className="nav-item">
                    <Link href={item.path}>
                      <a className={`nav-link ${router.pathname === item.path ? 'active' : ''}`} >
                        {item.title}
                      </a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
