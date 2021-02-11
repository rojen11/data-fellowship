import ContentType from "../types/content"
import MarkdownComponent from "./MarkdownComponent"

export interface Props {
    data: ContentType
}
export const Steps: React.FC<Props> = (props) => {
    const { data } = props
    return (
        <section className="py-12 md:py-32 overflow-x-hidden w-4/5 mx-auto">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-1/2">
                        <div className="py-6 lg:pr-32">
                            <div className="mb-4">
                                {/* <span className="text-xs py-1 px-3 text-blue-600 font-semibold bg-blue-50 rounded-xl">Lorem ipsum</span> */}
                                <h2 className="text-4xl mt-3 font-bold font-heading">{data.title}</h2>
                            </div>
                            {data.steps?.map((step,stepsIndex) => {
                                return (
                                    <div key={`${stepsIndex}`} className="flex items-start py-4">
                                        {/* <div className="w-8 mr-5 text-blue-500">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                            </svg>
                                        </div> */}
                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold font-heading">{step.title}</h3>
                                            <p className="text-blueGray-400 leading-loose">{step.detail}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="relative w-full lg:w-1/2 my-12 lg:my-0 px-12 flex items-center"><img className="relative mx-auto rounded-xl w-full z-10 pb-12" src="assets/approach.svg" alt="" /></div>
                </div>
            </div>
        </section>

    )
}