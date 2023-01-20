import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import dynamic from 'next/dynamic';
import { promises as fs } from 'fs';
import path from 'path';
import { Breadcrumbs } from '../../../components/Breadcrumbs/Breadcrumbs';
import {
  FertilityCheckup,
  FertilityCheckupItem,
} from '../../../sections/fetility-checkup';
import { OtherCheckups } from '../../../sections/other-checkups';

const TestSteps = dynamic(() => import('../../../sections/test-steps'), {
  ssr: false,
});

const directory = path.join(process.cwd(), '/data/health-assessments');

export const getStaticPaths: GetStaticPaths = async () => {
  const filenames = await fs.readdir(directory);

  return {
    paths: filenames.map((filename) => ({
      params: { slug: filename.replace('.json', '') },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  data: FertilityCheckupItem;
  others: FertilityCheckupItem[];
}> = async (context) => {
  const { params } = context;

  if (!params) {
    return {
      notFound: true,
    };
  }
  const { slug } = params;

  if (typeof slug !== 'string') {
    return {
      notFound: true,
    };
  }

  const filenames = await fs.readdir(directory);
  const otherFileNames = filenames.filter(
    (filename) => !filename.includes(slug)
  );
  const index = filenames.findIndex((filename) => filename.includes(slug));
  const total = filenames.length;
  let othersCount = 3;
  let startIndex = 1;
  let endIndex = startIndex + 2;
  let item = index + 1;

  try {
    const fileContents = await fs.readFile(
      directory + `/${params.slug}.json`,
      'utf8'
    );
    const objectData = JSON.parse(fileContents) as FertilityCheckupItem;

    let others: FertilityCheckupItem[] = [];

    try {
      const otherContents = await Promise.all(
        otherFileNames.map((filename) =>
          fs.readFile(directory + '/' + filename, 'utf8')
        )
      );
      others = otherContents.map(
        (content) => JSON.parse(content) as FertilityCheckupItem
      );
    } catch (e) {
      others = [];
    }

    return {
      props: { data: objectData, others },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};

const Page: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
  others,
}) => {
  return (
    <>
      <div style={{ marginTop: 80 }} />
      <Breadcrumbs items={[]} />
      <FertilityCheckup data={data} />
      {data.tests && <TestSteps items={data.tests} />}
      <OtherCheckups items={others} path="health-assessments"/>
    </>
  );
};

export default Page;
