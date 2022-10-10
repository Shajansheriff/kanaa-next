import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { promises as fs } from 'fs';
import path from 'path';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { Routes } from '../../utils';

import doctorsData from '../../data/doctors.json';
import Image from 'next/image';
const { items: doctors } = doctorsData;

interface Doctor {
  name: string;
  slug: string;
  image: string;
  description: string;
  degree: string;
  role?: string;
}

const treatmentsDirectory = path.join(process.cwd(), '/data');

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = await fs.readdir(treatmentsDirectory);

  return {
    paths: doctors.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ data: Doctor }> = async (
  context
) => {
  const { params } = context;

  if (!params || typeof params.slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const fileContents = doctors.find(({ slug }) => slug === params.slug);
  if (!fileContents) {
    return {
      notFound: true,
    };
  }
  try {
    const objectData = fileContents as Doctor;

    return {
      props: { data: objectData },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

const Page = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <main className="page-wrapper">
      <Navbar />
      <div className="container position-relative zindex-5  mt-5">
        <div className="row">
          <div className="col-lg-6">
            <Breadcrumbs items={[{ href: Routes.doctors, name: 'Doctors' }]} />

            <h1 className="pb-2 pb-md-3">{data.name}</h1>
            <p
              className="fs-xl pb-4 mb-1 mb-md-2 mb-lg-3"
              style={{ maxWidth: '526px' }}
              dangerouslySetInnerHTML={{ __html: data.description }}
            ></p>
          </div>

          <div className="col-lg-6">
            <div className="mt-5">
          <Image
                      src={`/assets/img${data.image}`}
                      className="rounded-3"
                      alt={data.name}
                      width="500"
                      height="500"
                    />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
