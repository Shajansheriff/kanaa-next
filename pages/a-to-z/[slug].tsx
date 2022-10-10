import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import Image from 'next/image';



interface Section {
  title: string;
  description: string;
  image: string;
}
interface Definition {
  title: string;
  description: string;
  image: string;
  sections?: Section[]
}

interface Detail {
  title: string;
  items: Definition[]
}



const aToZDirectory = path.join(process.cwd(), '/data/a-to-z');

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = await fs.readdir(aToZDirectory);

  return {
    paths: filenames.map((filename) => ({
      params: { slug: filename.replace('.json', '') },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ data: Detail }> = async (
  context
) => {
  const { params } = context;

  if (!params) {
    return {
      notFound: true,
    };
  }
  
  try {
    const fileContents = await fs.readFile(
      aToZDirectory + `/${params.slug}.json`,
      'utf8'
    );
    
    const objectData = JSON.parse(fileContents) as Detail;
    
    return {
      props: { data: objectData },
    };
  } catch (e) {
    console.log(e);
    
    return {
      notFound: true,
    };
  }
};


const AtoZDetailPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const TabId = (slug: string) => `${slug}-tab`;
  const slugish = (text: string) => text.split(' ').join('-')
  const { title, items } = data
  return (
    <>
      <div style={{ marginTop: 80 }} />
      <section className="container pt-2 pb-2 mt-3 mb-5 mt-sm-4 mt-xl-3">
         <section className="container pt-2 pb-2 mt-3 mb-5 mt-sm-4 mt-xl-3">
      <h2 className="h1 text-center pb-3 pb-lg-4">&quot;{title}&quot; for</h2>

      <ul
        className="nav nav-tabs flex-nowrap justify-content-lg-center overflow-auto pb-2 mb-3 mb-lg-4"
        role="tablist"
      >
        {items.map((item, index) => {
          const slug = slugish(item.title)
          return (
            <li key={slug} className="nav-item" role="presentation">
              <button
                className={`nav-link text-nowrap ${
                  index === 0 ? 'active' : ''
                }`}
                id={TabId(slug)}
                data-bs-toggle="tab"
                data-bs-target={`#${slug}`}
                type="button"
                role="tab"
                aria-controls={slug}
                aria-selected="true"
              >
                {item.title}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="tab-content bg-secondary rounded-3 py-4">
        {items.map((item, index) => {
          const slug = slugish(item.title)
          return (
            <div
              key={slug}
              className={`tab-pane fade show ${
                index === 0 ? 'active' : ''
              }`}
              id={slug}
              role="tabpanel"
              aria-labelledby={TabId(slug)}
            >
              <div className="row align-items-center pt-3 pt-sm-4 pt-md-0 px-3 px-sm-4 px-lg-0">
                <div className="col-lg-4 col-md-5 offset-lg-1 text-center text-md-start">
                  <h3 className="mb-lg-4">{item.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
                <div className="col-lg-6 col-md-7 mt-md-4">
                  <Image
                    src={item.image}
                    className="d-block my-lg-2 mx-auto me-md-0"
                    width={320}
                    height={320}
                    alt="Image"
                  />
                </div>
              </div>
              <section className="container pt-5 pb-2 pb-md-3 py-lg-5">
                {(item.sections ?? []).map((section) => {
                  return (
                    <div key={section.title} className="row align-items-center my-3 py-md-3 py-lg-5">
                      <div className="col-md-6 col-xl-5 offset-lg-1 offset-xl-2 order-md-2 mb-2 mb-md-0 pb-4 pb-md-0">
                        <div className="position-relative mx-auto mx-md-0" style={{ maxWidth: '469px' }}>
                          <img src="assets/img/landing/app-showcase/features/screen01.png" className="rellax d-block" alt="Screen" data-rellax-percentage="0.5" data-rellax-speed="-0.5" data-disable-parallax-down="md" />
                          <div className="rellax position-absolute top-0 end-0 w-100 h-100" data-rellax-percentage="0.5" data-rellax-speed="0.75" data-disable-parallax-down="md">
                            <img src="assets/img/landing/app-showcase/features/screen02.png" alt="Screen" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-5 col-xl-4 offset-xl-1 order-md-1 pb-md-4">
                        <h2 className="pb-3">{section.title}</h2>
                        <div className="list-unstyled pb-3 mb-3" dangerouslySetInnerHTML={{ __html: section.description }} />
                        
                      </div>
                    </div>
                  )
                })}
                {/* <div className="row align-items-center my-3 py-md-3 py-lg-5">
                  <div className="col-md-6 col-xl-5 offset-lg-1 offset-xl-2 order-md-2 mb-2 mb-md-0 pb-4 pb-md-0">
                    <div className="position-relative mx-auto mx-md-0" style={{ maxWidth: '469px' }}>
                      <img src="assets/img/landing/app-showcase/features/screen01.png" className="rellax d-block" alt="Screen" data-rellax-percentage="0.5" data-rellax-speed="-0.5" data-disable-parallax-down="md" />
                      <div className="rellax position-absolute top-0 end-0 w-100 h-100" data-rellax-percentage="0.5" data-rellax-speed="0.75" data-disable-parallax-down="md">
                        <img src="assets/img/landing/app-showcase/features/screen02.png" alt="Screen" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-5 col-xl-4 offset-xl-1 order-md-1 pb-md-4">
                    <h2 className="pb-3">Make your money transfer simple and clear</h2>
                    <ul className="list-unstyled pb-3 mb-3">
                      <li className="d-flex align-items-center mb-2">
                        <i className="bx bx-check-circle fs-xl text-primary me-2"></i>
                        Banking transactions are free for you
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <i className="bx bx-check-circle fs-xl text-primary me-2"></i>
                        No monthly cash commission
                      </li>
                      <li className="d-flex align-items-center mb-2">
                        <i className="bx bx-check-circle fs-xl text-primary me-2"></i>
                        Manage payments and transactions online
                      </li>
                    </ul>
                    <a href="#" className="btn btn-primary">
                      Learn more
                      <i className="bx bx-right-arrow-alt fs-xl ms-2 me-n1"></i>
                    </a>
                  </div>
                </div>
                <div className="row align-items-center mt-2 mt-md-0 pt-5 pt-md-4 pt-lg-0 pb-md-3 pb-lg-5">
                  <div className="col-md-6 col-lg-5 offset-xl-1 mb-2 mb-md-0 pb-4 pb-md-0">
                    <div className="position-relative mx-auto mx-md-0" style={{maxWidth: '462px'}}>
                      <img src="assets/img/landing/app-showcase/features/screen03.png" className="rellax d-block" alt="Screen" data-rellax-percentage="0.5" data-rellax-speed="-0.5" data-disable-parallax-down="md" />
                      <div className="rellax position-absolute top-0 end-0 w-100 h-100 me-md-n3" data-rellax-percentage="0.5" data-rellax-speed="0.75" data-disable-parallax-down="md">
                        <img src="assets/img/landing/app-showcase/features/screen04.png" alt="Screen" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-5 offset-lg-1">
                    <h2 className="pb-3">Receive payment from international bank details</h2>
                    <div className="row row-cols-1 row-cols-sm-2 text-start pb-3">
                      <div className="col pb-4">
                        <div className="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                          <img src="assets/img/landing/app-showcase/features/payments.svg" alt="Easy Payments" />
                        </div>
                        <p className="mb-0">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                      </div>
                      <div className="col pb-4">
                        <div className="d-table bg-secondary rounded-3 flex-shrink-0 p-3 mb-3">
                          <img src="assets/img/landing/app-showcase/features/cashback.svg" alt="Regular Cashback" />
                        </div>
                        <p className="mb-0">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                      </div>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Learn more
                      <i className="bx bx-right-arrow-alt fs-xl ms-2 me-n1"></i>
                    </a>
                  </div>
                </div> */}
                <div className="pt-5 d-none d-dark-mode-block"></div>
              </section>
            </div>
          );
        })}
      </div>
    </section>
      
      </section>
    </>
  );
};

export default AtoZDetailPage;
