import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="position-relative pt-md-3 pt-lg-5 mb-md-3 mb-lg-5">
      <div className="container position-relative zindex-5 pt-5">
        <div className="row mt-4 pt-5">
          <div className="col-xl-4 col-lg-5 text-center text-lg-start pb-3 pb-md-4 pb-lg-0">
            <h1 className="fs-xl text-uppercase">
              CENTRE FOR ASSISTED REPRODUCTION
            </h1>
            <h3 className="display-4 pb-md-2 pb-lg-4">
              Fertility care Reimagined!
            </h3>
            <p className="fs-lg">
              Don&apos;t know where to begin?{' '}
              <Link href={"/contact-us"}>
                <a className="fw-medium">
                  Click here.
                </a>
              </Link>
            </p>
          </div>
          <div className="col-xl-5 col-lg-6 offset-xl-1 position-relative zindex-5 mb-5 mb-lg-0">
            <div
              className="rellax card bg-primary border-0 shadow-primary py-2 p-sm-4 p-lg-5"
              data-rellax-speed="-1"
              data-disable-parallax-down="lg"
            >
              <div className="card-body p-lg-3">
                <h2 className="text-light pb-1 pb-md-3">
                  Kanaa Fertility Center
                </h2>
                {/* <Image
                  src="/assets/img/logo.png"
                  alt="Kanaa Logo"
                  width={96}
                  height={48}
                /> */}
                {/* Point number 7: Displays not good */}
                <p className="fs-lg text-light pb-2 pb-md-0 mb-4 mb-md-5">
                  We provide you with the highest quality of care that results
                  in a healthy happy family. Our team includes board-certified
                  reproductive and infertility specialists, nurses, and lab
                  professionals who are solely focused on the needs of people
                  dealing with fertility-related issues, questions, or concerns.
                </p>
                <Link href="/about-us">
                  <a className="btn btn-light btn-lg">
                    About Us
                    <i className="bx bx-right-arrow-alt lh-1 fs-4 ms-2 me-n2"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="d-none d-lg-block"
          style={{ marginTop: '-165px' }}
        ></div>
        <div className="row align-items-end">
          <div className="col-lg-6 d-none d-lg-block">
            <img
              src="/assets/img/you-me-baby.jpg"
              className="rellax rounded-3"
              alt="Image"
              data-rellax-speed="1.35"
              data-disable-parallax-down="md"
            />
          </div>
          <div className="col-lg-6 d-flex flex-column flex-md-row align-items-center justify-content-between">
            <div className="d-flex align-items-center ps-xl-5 mb-4 mb-md-0">
              <div className="btn btn-icon btn-secondary btn-lg pe-none rounded d-lg-none d-xl-inline-flex">
                <i className="bx bx-time text-primary fs-3"></i>
              </div>
              <ul className="list-unstyled ps-3 ps-lg-0 ps-xl-3 mb-0">
                <li>
                  <strong className="text-dark">KK Nagar</strong>, Mon – Sat: 10 am –
                  5 pm
                </li>
                <li>
                  <strong className="text-dark">RK Salai</strong>, Mon – Sat: 10 am –
                  7 pm
                </li>
              </ul>
            </div>
            <Link href="/contact-us">
              <a className="btn btn-primary btn-lg shadow-primary">
                Make an appointment
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="d-none d-lg-block position-absolute top-0 end-0 w-50 d-flex flex-column ps-3"
        style={{ height: 'calc(100% - 108px)' }}
      >
        <div
          className="w-100 h-100 overflow-hidden bg-position-center bg-repeat-0 bg-size-cover"
          style={{
            backgroundImage: 'url(assets/img/hero-2.jpeg)',
            borderBottomLeftRadius: '.5rem',
          }}
        ></div>
      </div>
    </section>
  );
}
