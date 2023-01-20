import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '../utils';

export function OtherCheckups({
  items,
  path,
}: {
  items: { title: string; image: string; slug: string }[];
  path:string;
}) {
  return (
    <section className="container py-5 mt-2 mt-md-4 mt-lg-5 mb-xl-2">
      <h2 className="h1 text-center pt-2 pt-md-3 pb-4 mb-2 mb-lg-3">
        Explore Other Checkups
      </h2>
      <div className="row">
        {items.map((item) => (
          <div key={item.title} className="col">
            <div className="card card-portfolio">
              <div className="card-img" style={{ width: 356, height: 220 }}>
                <img src={item.image} alt="Image" />
              </div>
              <div className="card-body">
                <h3 className="h4 mb-2">
                  <Link href={`/services/${path}/${item.slug}`}>
                    <a className="stretched-link">{item.title}</a>
                  </Link>
                </h3>
                <div className="card-portfolio-meta">
                  <span className="text-muted">{item.title}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
