import { getAllContents } from "../lib/api";
import { ComponentProps } from "../types/content";
import { AboutProgram } from "../components/AboutProgram";
import { TextLeft } from "../components/TextLeft";
import { TextRight } from "../components/TextRight";
import { Steps } from "../components/Steps";
import { TextOnly } from "../components/TextOnly";
import { Layout } from "../components/Layout";
import ContentType from "../types/content";
import markdownToHtml from "../lib/markdownToHtml";
import { formUrl } from "../config";
import Head from "next/head";

type Props = {
  allContents: ContentType[];
};

const AvailableTemplates: {
  [id: string]: React.ComponentType<ComponentProps>;
} = {
  aboutProgram: AboutProgram,
  steps: Steps,
  right: TextRight,
  left: TextLeft,
  DEFAULT: TextOnly,
};
const Index: React.FC<Props> = ({ allContents }) => {
  return (
    <Layout>
      <Head>
        <title>{allContents[0].title}</title>
      </Head>
      {allContents.map((content) => {
        const Template =
          AvailableTemplates[content.template] || AvailableTemplates.DEFAULT;
        return Template && <Template key={content.slug} data={content} />;
      })}
      <section className="pb-20 relative block bg-gray-300">
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-4/5 px-4">
              <h2 className="text-4xl font-semibold my-20 md:my-0">
                Apply Now
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="relative block py-24 lg:pt-0 bg-gray-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-4/5 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200">
                <iframe
                  title="Application Form"
                  src={
                    formUrl ||
                    "https://docs.google.com/forms/d/e/1FAIpQLSdo0eiuCJRF_2KM3Q8p3jBKFnDnNSpAyg8PILzCHot4xgU7DA/viewform?embedded=true"
                  }
                  height="700"
                  frameBorder={0}
                  marginHeight={0}
                  marginWidth={0}
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const allContentsNoHtml = getAllContents([
    "title",
    "image",
    "order",
    "steps",
    "template",
    "content",
    "experpt",
    "ogimage",
  ]);
  const allContentsWithHtml = await new Promise<ContentType[]>(
    async (resolve) => {
      const withHtml = [];
      for (let i = 0; i < allContentsNoHtml.length; i++) {
        const currentObject = allContentsNoHtml[i];
        const html = await markdownToHtml(currentObject.content);
        withHtml.push({ ...currentObject, content: html });
        if (withHtml.length === allContentsNoHtml.length) {
          resolve(withHtml);
        }
      }
    }
  );
  return {
    props: { allContents: allContentsWithHtml },
  };
}
