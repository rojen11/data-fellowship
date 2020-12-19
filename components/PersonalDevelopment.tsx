import ContentType from "../types/content"
import MarkdownComponent from "./MarkdownComponent"

export interface Props {
    data: ContentType
}

export const PersonalDevelopment: React.FC<Props> = (props) => {
    const {data} = props
    return (
        <section className="pt-20 pb-48">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center mb-24">
                    <div className="w-full lg:w-4/5 px-4">
                        <h2 className="text-4xl font-semibold">
                            {data.title}
                </h2>
                        <div className="text-lg leading-relaxed m-4 text-gray-600">
                            <MarkdownComponent content={data.content}/>
                </div>
                    </div>
                </div>

            </div>
        </section>
    )
}