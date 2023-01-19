import Image from 'next/image';

export interface FertilityCheckupItem {
  title: string;
  description: string;
  expect?: string;
  tests?: string[];
  image: string;
  slug: string;
}

interface Props {
  data: FertilityCheckupItem;
}

export function FertilityCheckup({ data }: Props) {
  return (
    <section className="container mt-4 mb-5 pt-2 pb-lg-5">
      <div className="row gy-4">
        <div className="col-lg-7 col-md-6">
          <img src={data.image} alt={data.title} className="rounded-3" />
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="ms-xl-5 ms-lg-4 ps-xxl-34">
            <div className="d-flex align-items-center mb-2">
              <Image
                src="/assets/img/support.svg"
                alt="Icon"
                width={20}
                height={20}
                className="d-block"
              />
              <h3 className="ms-2 h6 mb-0">Consultation</h3>
            </div>
            <h1 className="display-5 pb-md-3">{data.title}</h1>
            <div
              className="mb-0 fs-lg"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
            {data.expect ? (
              <div className="pb-2 pb-xl-0 mb-4 mb-xl-5">
                <div className="d-flex align-items-start">
                  {/* <div className="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                    <img src="/assets/img/support.svg" alt="Icon" />
                  </div> */}
                  <div className="">
                    <h3 className="h5 pb-1 mb-2">Our Services</h3>
                    <div
                      className="mb-0"
                      dangerouslySetInnerHTML={{ __html: data.expect }}
                    ></div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
