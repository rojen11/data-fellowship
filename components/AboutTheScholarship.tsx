import ContentType from "../types/content"
import MarkdownComponent from "./MarkdownComponent"

export interface Props{
    data:ContentType
}

export const AboutTheScholarship:React.FC<Props> = (props) =>{
    const {data} = props
    return(
        <section className="pb-20 bg-gray-300 -mt-24">
                    <div className="container mx-auto px-4">

                        <div className="flex flex-wrap items-center pt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                                    <i className="fas fa-user-friends text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                {data.title}
                </h3>
                                <MarkdownComponent content={data.content}/>
                            </div>

                            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                                <div className="relative flex flex-col min-w-0 break-word w-full mb-6 shadow-lg rounded-lg bg-secondary">
                                <img
                                    alt="..."
                                    className="max-w-full rounded-lg shadow-lg"
                                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                                />
                            
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

    )
}