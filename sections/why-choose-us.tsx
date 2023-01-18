import Image from 'next/image';

export const WhyChooseUs = () => {
  return (
    <section className=" pb-md-2 pb-lg-5">
      <div
        className="d-none d-lg-block"
        style={{ marginTop: '-60px', paddingTop: '60px' }}
      ></div>
      <div className="container pb-4 pt-5">
        <h2 className="h1 text-center pt-1 pt-xl-2 mb-4">
          See What Makes Us Different
        </h2>
        <p className="fs-lg text-reset text-center pb-4 mb-2 mb-lg-3">
          Your best care begins here. Let us break the stigma and misinformation
          surrounding fertility
        </p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 pb-xl-3">
          <div className="col text-center border-end">
            <div
              className="card d-flex align-items-center justify-content-center border-0 rounded-circle shadow-sm p-3 mx-auto mb-4"
              style={{ height: 64, width: 64 }}
            >
              {/* <Image
                src="/assets/img/why-choose-us/1.png"
                width={32}
                height={32}
                alt="Icon"
              /> */}
              <i
                className={`bx bx-trophy fs-2 text-gradient-primary`}
                style={{ padding: '0.375rem' }}
              ></i>
            </div>
            <h3 className="h5 mb-2 mb-lg-0">
              Results that speak for themselves
            </h3>
          </div>
          <div className="col text-center border-end">
            <div
              className="card d-flex align-items-center justify-content-center border-0 rounded-circle shadow-sm p-3 mx-auto mb-4"
              style={{ height: 64, width: 64 }}
            >
              {/* <Image
                src="/assets/img/why-choose-us/2.png"
                width={32}
                height={32}
                alt="Icon"
              /> */}
              <i
                className={`bx bxs-zap fs-2 text-gradient-primary`}
                style={{ padding: '0.375rem' }}
              ></i>
            </div>
            <h3 className="h5 mb-2 mb-lg-0">
              Decades of experience, at your service
            </h3>
          </div>
          <div className="col text-center border-end">
            <div
              className="card d-flex align-items-center justify-content-center border-0 rounded-circle shadow-sm p-3 mx-auto mb-4"
              style={{ height: 64, width: 64 }}
            >
              {/* <Image
                src="/assets/img/why-choose-us/3.png"
                width={32}
                height={32}
                alt="Icon"
              /> */}
              <i
                className={`bx bx-trip fs-2 text-gradient-primary`}
                style={{ padding: '0.375rem' }}
              ></i>
            </div>
            <h3 className="h5 mb-2 mb-lg-0">
              With you, at every step of the way
            </h3>
          </div>
          <div className="col text-center">
            <div
              className="card d-flex align-items-center justify-content-center border-0 rounded-circle shadow-sm p-3 mx-auto mb-4"
              style={{ height: 64, width: 64 }}
            >
              {/* <Image
                src="/assets/img/why-choose-us/4.png"
                width={32}
                height={32}
                alt="Icon"
              /> */}
              <i
                className={`bx bx-male-female fs-2 text-gradient-primary`}
                style={{ padding: '0.375rem' }}
              ></i>
            </div>
            <h3 className="h5 mb-2 mb-lg-0">
              Individualized Management Plan for each couple
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
