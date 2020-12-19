
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { APP_NAME } from '../lib/constants'
import Post from '../types/post'
import { Navbar } from '../components/Navbar'
import { AboutProgram } from '../components/AboutProgram'
import { AboutTheScholarship } from '../components/AboutTheScholarship'
import { LearningOutcomes } from '../components/LearningOutcomes'
import { PersonalDevelopment } from '../components/PersonalDevelopment'
import { Footer } from '../components/Footer'

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
        <Head>
          <title>{APP_NAME}</title>
        </Head>
        <Navbar transparent />
            <main>
                <AboutProgram/>
                <AboutTheScholarship/>
                <LearningOutcomes/>
                <PersonalDevelopment/>
                

                <section className="pb-20 relative block bg-cred">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                        style={{ height: "80px", transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-cred fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>

                    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
                        <div className="flex flex-wrap text-center justify-center">
                            <div className="w-full lg:w-4/5 px-4">
                                <h2 className="text-4xl font-semibold text-white">
                                    Apply Now
                </h2>
                                <p className="text-lg leading-relaxed mt-4 mb-4 text-white">
                                    Put the potentially record low maximum sea ice extent tihs year down to low ice.
                                    According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
                </p>
                            </div>
                        </div>
   
                    </div>
                </section>
                <section className="relative block py-24 lg:pt-0 bg-cred">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                            <div className="w-full lg:w-4/5 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200">
                                    {/* <div className="flex-auto p-5 lg:p-10"> */}
                                    <iframe title="Application Form" src="https://docs.google.com/forms/d/e/1FAIpQLSfdX3PT_egW3Vsahj3NyNSY8dcjD7WTNfXjlvg7Ksu2o8CTcQ/viewform?embedded=true" height="700" frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
