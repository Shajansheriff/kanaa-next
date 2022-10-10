import Link from 'next/link';
import { Routes, slugify } from '../../utils';
import navbarData from '../../data/navbar.json';
import Image from 'next/image';

const { items } = navbarData;

export const Navbar = () => {
  return (
    //   <!-- Remove "navbar-sticky" class to make navigation bar scrollable with the page -->
    <header className="header navbar navbar-expand-lg position-absolute navbar-sticky">
      <div className="container px-3">
        <Link href="/">
          <a className="navbar-brand pe-3">
            <Image
              src="/assets/img/logo.png"
              alt="Kanaa Logo"
              width={96}
              height={48}
            />
          </a>
        </Link>

        <div id="navbarNav" className="offcanvas offcanvas-end">
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {items.map((mainItem) => (
                <li
                  key={mainItem.name}
                  className={`nav-item ${mainItem.items ? 'dropdown' : ''}`}
                >
                  <a
                    href={mainItem.items ? '#' : slugify(mainItem.name)}
                    className={`nav-link ${
                      mainItem.items ? 'dropdown-toggle' : ''
                    }`}
                    data-bs-toggle="dropdown"
                  >
                    {mainItem.name}
                  </a>
                  {mainItem.items ? (
                    <div className="dropdown-menu">
                      <div className="d-lg-flex pt-lg-3">
                        {mainItem.items.map((item) => (
                          <div key={item.name} className="mega-dropdown-column">
                            <h6 className="px-3 mb-2">{item.name}</h6>
                            <ul className="list-unstyled mb-3">
                              {item.subItems.map((subItem) => (
                                <li key={subItem.name}>
                                  <a
                                    href={`/services/${slugify(
                                      item.slug ?? item.name
                                    )}/${slugify(subItem.name)}`}
                                    className="dropdown-item py-1"
                                  >
                                    {subItem.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </li>
              ))}
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  About us
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/about-us">
                      <a className="dropdown-item">About us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={Routes.doctors}>
                      <a className="dropdown-item">Our Doctors</a>
                    </Link>
                  </li>
                </ul>
              </li>
            
              <li className="nav-item">
                <Link href={'/a-to-z'}>
                  <a className="nav-link">
                    A-Z of Fertility
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="offcanvas-header border-top">
            <Link href="/contact-us">
              <a className="btn btn-primary w-100">
                <i className="bx bx-paper-plane fs-5 lh-1 me-1"></i>
                &nbsp;Contact us
              </a>
            </Link>
          </div>
        </div>
        {/* <!-- <div
            className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4"
            data-bs-toggle="mode"
          >
            <input type="checkbox" className="form-check-input" id="theme-mode" />
            <label className="form-check-label d-none d-sm-block" for="theme-mode"
              >Light</label
            >
            <label className="form-check-label d-none d-sm-block" for="theme-mode"
              >Dark</label
            >
          </div> --> */}
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link href="/contact-us">
          <a className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex">
            <i className="bx bx-paper-plane fs-5 lh-1 me-1"></i>
            &nbsp;Contact us
          </a>
        </Link>
      </div>
    </header>
  );
};
