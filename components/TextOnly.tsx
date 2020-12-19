import ContentType from "../types/content"
import MarkdownComponent from "./MarkdownComponent"

export interface Props {
    data: ContentType
    gray?:boolean
}
export const TextOnly: React.FC<Props> = (props) => {
    const { data,gray } = props
    return (
        <section className={`relative py-20 ${gray? 'bg-gray-300':''}`}>
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
                        className={`${gray? 'text-gray-300':'text-white'} fill-current`}
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-left mb-24">
                    <div className="w-full lg:w-3/5 px-4">
                        <h2 className="text-4xl font-semibold">
                            {data.title}
                </h2>
                        <div className="text-lg leading-relaxed m-4 text-gray-600 text-left pt-6">
                            <MarkdownComponent content={data.content}/>
                </div>
                    </div>
                </div>

            </div>
        </section>

    )
}