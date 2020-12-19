
import { getAllContents } from '../lib/api'
import Content from '../types/content'
import { AboutProgram } from '../components/AboutProgram'
import { TextLeft } from '../components/TextLeft'
import { TextRight } from '../components/TextRight'
import { PersonalDevelopment } from '../components/PersonalDevelopment'
import { Layout } from '../components/Layout'
import ContentType from '../types/content'
import markdownToHtml from '../lib/markdownToHtml'
interface NormalizedObject {
    [slug:string]:ContentType
}
type Props = {
    allContents:NormalizedObject
}

const Index:React.FC<Props> = ({allContents}) => {
    return (
        <Layout>
            <AboutProgram data={allContents.AboutProgram || {}} />
            <TextLeft data={allContents.AboutTheScholarship || {}} />
            <TextRight data={allContents.LearningOutcomes || {}} />
            <TextLeft data ={allContents.PersonalDevelopment || {}} />
            <TextRight data={allContents.ApplicationDetails || {}} />

            <section className="pb-20 relative block bg-primary">
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
                            className="text-primary fill-current"
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
            <section className="relative block py-24 lg:pt-0 bg-primary">
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

        </Layout>
    )
}

export default Index

export async function getStaticProps() {
    const allContentsNoHtml = getAllContents([
        'title',
        'image',
        'content'
    ])
    const keys = Object.keys(allContentsNoHtml)
    const allContentsWithHtml = await new Promise<NormalizedObject>(async(resolve) =>{
        let newObjects:NormalizedObject = {}
        for (let i = 0 ; i < keys.length;i++){
            const currentObject = allContentsNoHtml[keys[i]]
            const html = await markdownToHtml(currentObject.content)
            newObjects = {...newObjects,[keys[i]]:{...currentObject,content:html}}
            if(Object.keys(newObjects).length === keys.length){
                resolve(newObjects)
            }
        }
    })
    return {
        props: { allContents:allContentsWithHtml },
    }
}
