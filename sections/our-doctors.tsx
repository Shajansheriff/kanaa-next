import Link from 'next/link';
import doctorsData from '../data/doctors.json';
import { Routes } from '../utils';
const { items: doctors } = doctorsData;
export function OurDoctors({ isMini }: { isMini?: boolean }) {
  const items = isMini ? doctors.slice(0, 4) : doctors;
  return (
    <section className="container pt-xl-2 pb-5 mb-md-3 mb-lg-5">
      {isMini && (
        <div className="d-md-flex align-items-center justify-content-between text-center text-md-start pb-1 pb-lg-0 mb-4 mb-lg-5">
          <h2 className="h1 mb-md-0">Qualified Medical Specialists</h2>
          <Link href="/doctors">
            <a className="btn btn-outline-primary">
              See all doctors
              <i className="bx bx-right-arrow-alt fs-xl ms-2 me-n1"></i>
            </a>
          </Link>
        </div>
      )}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {items.map((item) => (
          <div key={item.name} className="col">
            <div className="card card-hover border-0 bg-transparent">
              <div className="position-relative">
                <Link href={Routes.doctorsDetails(item.slug)}>
                  <a>
                    <img
                      src={`/assets/img${item.image}`}
                      className="rounded-3"
                      alt={item.name}
                    />
                  </a>
                </Link>
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-35 rounded-3"></span>
                  <div className="position-relative d-flex zindex-2">
                    <Link href={Routes.doctorsDetails(item.slug)}>
                      <a className="btn btn-secondary  btn-sm bg-white me-2">
                        View
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body text-center p-3">
                <h3 className="fs-lg fw-semibold pt-1 mb-2">{item.name}</h3>
                <p className="fs-sm mb-2">{item.designation}</p>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="fs-xs text-muted">{item.degree}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-2 mt-md-4 mt-lg-5'>
        <h2 className='h2 fw-semibold'>Our Team</h2>
        <div></div>
        <div className='fs-lg'>{doctorsData.team.content}</div>
      </div>
    </section>
  );
}
