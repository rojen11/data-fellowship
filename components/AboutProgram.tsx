import ContentType from "../types/content"
import MarkdownComponent from './MarkdownComponent'
export interface Props {
    data: ContentType
}
export const AboutProgram: React.FC<Props> = (props) => {
    const { data } = props;
    return (
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
                minHeight: "80vh"
            }}>
            <div className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                    backgroundImage: `url('/assets/markus.jpg')`
                }}>
                <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
            </div>
            <div className="container relative mx-auto">
                <div className="items-center flex flex-wrap">
                    <div className="w-full lg:w-3/5 px-4 ml-auto mr-auto text-left">
                        <div>
                            <h1 className="text-white font-semibold text-3xl pt-16 md:text-5xl">
                                {data.title}
                            </h1>
                            <div className="mt-4 tracking-wider leading-relaxed text-white text-xs">
                                <MarkdownComponent content={data.content} />
                            </div>
                        </div>
                    </div>

                </div>
                <span style={{
                    color: 'white', position: 'absolute',
                    bottom: '-63px',
                    padding: '16px'
                }}>Photo by <a href="https://unsplash.com/@markusspiske?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Markus Spiske</a> on <a href="https://unsplash.com/s/photos/data?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
            </div>
            <div
                className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                style={{ height: "70px", transform: "translateZ(0)" }}
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
                        className="text-gray-300 fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
        </div>
    )
}