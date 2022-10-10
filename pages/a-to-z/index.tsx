import {  GetStaticProps, InferGetStaticPropsType  } from 'next';
import Link from 'next/link';
import { promises as fs } from 'fs';
import path from 'path';

const aToZDirectory = path.join(process.cwd(), '/data/a-to-z');

export const getStaticProps: GetStaticProps<{ data: string[] }> = async (
  context
) => {
 
  
  try {
    const filenames = await fs.readdir(aToZDirectory);
    
    return {
      props: { data: filenames.map((filename) => filename.replace('.json', '')) },
    }

  } catch (e) {
    console.log(e);
    
    return {
      notFound: true,
    };
  }
};

const AtoZPage = ({data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <div style={{ marginTop: 80 }} />
       <section id="landings" className="container text-center pt-5 mt-2 mt-md-4 mt-lg-5">
        <h2 className="h1 pt-2 pt-lg-0">A to Z of Fertility</h2>
        <p className="fs-lg pb-2 pb-md-3 pb-lg-0 mb-4 mb-lg-5">Learn all things about fertility</p>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5">
          {data.map((letter) => (

          <div key={letter} className="col position-relative mb-4 mb-lg-5">
            <div className="card card-hover border-0 bg-transparent">
              <div className="position-relative">
                <Link href={`/a-to-z/${letter}`}>
                      <a>
                <img src={`/assets/img/a-to-z/${letter.toLocaleUpperCase()}.png`} className="b-block  rounded-3" alt={letter} />
                <div className="card-img-overlay d-flex flex-column align-items-center justify-content-center rounded-3">
                  <span className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25 rounded-3"></span>
                  <div className="position-relative d-flex zindex-2">
                    
                        
                      
                    
                  </div>
                </div>
                </a>
                  </Link>
              </div>
              
            </div>
          </div>
          ))}
          
        </div>
      </section>
    </>
  );
};

export default AtoZPage;
