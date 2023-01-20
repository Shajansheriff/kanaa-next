export const VisionAndMission = () => {
  return (
    <section className="position-relative pt-5">
      <div
        className="position-absolute top-0 start-0 w-100 bg-position-bottom-center bg-size-cover bg-repeat-0"
        style={{ backgroundImage: 'url(assets/img/about/hero-bg.svg)' }}
      >
        <div className="d-lg-none" style={{ height: 960 }}></div>
        <div className="d-none d-lg-block" style={{ height: 768 }}></div>
      </div>
      <div className="container position-relative zindex-5 pt-5">
        <div className="row">
          <div className="col-lg-6">
            <nav
              className="pt-md-2 pt-lg-3 pb-4 pb-md-5 mb-xl-4"
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <i className="bx bx-home-alt fs-lg me-1"></i>Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>
            <h1 className="pb-2 pb-md-3">New age Gynaecologists</h1>
            <p
              className="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3"
              style={{ maxWidth: 526 }}
            >
              We are a team of new age gynaecologists aiming to break the stigma
              and secrecy surrounding fertility and help women understand their
              bodies better.
            </p>
            {/* <img
              src="assets/img/about/clutch-dark.png"
              className=" d-dark-mode-none"
              width="175"
              alt="Clutch"
            /> */}
            <div className="row row-cols-3 pt-4 pt-md-5 mt-2 mt-xl-4">
              <div className="col">
                <h3 className="h2 mb-2">5,000+</h3>
                <p className="mb-0">
                  <strong>Deliveries</strong> successfully
                </p>
              </div>
              <div className="col">
                <h3 className="h2 mb-2">20+</h3>
                <p className="mb-0">
                  <strong>Years</strong> of experience
                </p>
              </div>
              <div className="col">
                <h3 className="h2 mb-2">1,00,000+</h3>
                <p className="mb-0">
                  <strong>Happy</strong> families
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-xl-3 pt-5 pt-lg-4">
            <img
              src="/assets/img/kanaa-team.jpeg"
              className=" d-dark-mode-none"
              alt="Kanaa Team"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
