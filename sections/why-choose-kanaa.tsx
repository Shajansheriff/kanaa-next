import Image from 'next/image';

export const WhyChooseKanaa = () => (
  <section className="bg-secondary py-5 my-2 my-md-4 my-lg-5">
    <div className="container pb-4">
      <h2 className="h1 text-center">Why choose Kanaa?</h2>
      <p className="text-center pb-1 pb-sm-0 mb-4 mb-sm-5">
        Nisi augue at ridiculus ullamcorper ibendum nunc dignissim
      </p>
      <div className="row align-items-lg-center">
        <div className="col-sm-6 col-lg-3">
          <div className="pe-lg-4 pe-xl-5">
            <div className="text-center text-lg-end pb-2 mb-4 mb-xl-5">
              {/* <!-- <img
                    src="assets/img/services/single/icons/01.svg"
                    className="d-inline-block"
                    width="56"
                    alt="Icon"
                  /> --> */}
              <div className="d-inline-block">
                <i className="bx bx-search-alt fs-1 lh-1 me-1 bg-primary text-light rounded-circle p-2"></i>
              </div>
              <h3 className="h5 pt-1 my-2">Searching for answers?</h3>
              <p className="fs-sm mb-0">
                Our Fertility Program is designed to address each couple&apos;s
                unique medical, emotional and financial needs.
              </p>
            </div>
            <div className="text-center text-lg-end pb-2 mb-4 mb-xl-5">
              <i className="bx bx-extension fs-1 lh-1 me-1 bg-primary text-light rounded-circle p-2"></i>
              <h3 className="h5 pt-1 my-2">One size does not fit all!</h3>
              <p className="fs-sm mb-0">
                Difficulty in getting pregnant is a multi-faceted problem and
                there is a definite need for a personalised couple-based
                approach.
              </p>
            </div>
            <div className="text-center text-lg-end">
              <i className="bx bx-list-check fs-1 lh-1 me-1 bg-primary text-light rounded-circle p-2"></i>
              <h3 className="h5 pt-1 my-2">Let&apos;s make a plan!</h3>
              <p className="fs-sm mb-0">
                we strongly believe that the main decision-makers in your
                treatment should always remain YOU!
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <div
            className="ratio ratio-1x1 border rounded-circle position-relative mx-auto"
            style={{ maxWidth: 580 }}
          >
            <div className="p-5">
              <Image
                src="/assets/img/heart_foot.jpg"
                width={482}
                height={482}
                className="rounded-circle img-fit-cover"
                alt="new born baby foot"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="ps-lg-4 ps-xl-5">
            <div className="text-center text-lg-start pb-2 mb-4 mb-xl-5">
              <i className="bx bx-user-voice fs-1 lh-1 me-1 bg-primary text-light rounded-circle p-2"></i>
              <h3 className="h5 pt-1 my-2">We keep it real!</h3>
              <p className="fs-sm mb-0">
                We believe in giving you age and case-specific chances of
                success with any treatment option.
              </p>
            </div>
            <div className="text-center text-lg-start pb-2 mb-4 mb-xl-5">
              <i className="bx bx-mask fs-1 lh-1 me-1 bg-primary text-light rounded-circle p-2"></i>
              <h3 className="h5 pt-1 my-2">Blindfolds off, please!</h3>
              <p className="fs-sm mb-0">
                we want each and every couple to be aware of each and every step
                of their treatment.
              </p>
            </div>
            <div className="text-center text-lg-start pb-2 mb-4 mb-xl-5">
              <i className="bx bx-star fs-1 lh-1 me-1 bg-primary text-light rounded-circle p-2"></i>
              <h3 className="h5 pt-1 my-2">Why choose kanaa?</h3>
              <p className="fs-sm mb-0">
                Because we we believe in delivering best results by adopting an evidence based , ethical and holistic approach In fertility care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
