import Head from "next/head";
import { ComponentProps } from "../types/content";
import MarkdownComponent from "./MarkdownComponent";

export const AboutProgram: React.FC<ComponentProps> = (props) => {
  const { data } = props;
  return (
    <section className="xl:bg-contain bg-top bg-no-repeat">
      <Head>
        {data.experpt && (
          <meta name="description" content={`${data.experpt}`} />
        )}

        {data.ogimage && <meta property="og:image" content={data.ogimage} />}
      </Head>
      <div className="container md:px-4 mx-auto">
        <div className="py-12 md:text-center text-left">
          <div className="w-4/5 mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading text-secondary">
              {data.title} {new Date().getFullYear()}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <MarkdownComponent content={data.content} />
            </p>
          </div>
        </div>
        <div className="relative max-w-3xl mt-6 mb-8 mx-auto">
          <img src="assets/metis-assets/elements/pattern-small.png" alt="" />
          <div
            className="absolute bg-gray-100 rounded-lg px-8 pt-2"
            style={{ top: "3%", left: "9%", width: "82%", height: "90%" }}
          >
            <img
              className="object-contain w-full h-full"
              src="assets/data.svg"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-8 pb-12">
          <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
            <a
              href="https://codefornepal.org/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className="mx-auto"
                src="https://codefornepal.org/assets/img/c4n_logo.png"
                alt=""
              />
            </a>
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8">
            <a
              href="https://www.datacamp.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img className="mx-auto" src="assets/datacamp.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
