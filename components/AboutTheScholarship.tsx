export const AboutTheScholarship:React.FC = () =>{
    return(
        <section className="pb-20 bg-gray-300 -mt-24">
                    <div className="container mx-auto px-4">

                        <div className="flex flex-wrap items-center pt-32">
                            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                                    <i className="fas fa-user-friends text-xl"></i>
                                </div>
                                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                                About the scholarship program
                </h3>
                                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                                    Don't let your uses guess by attaching tooltips and popoves
                                    to any element. Just make sure you enable them first via
                                    JavaScript.
                </p>
                                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                                    The kit comes with three pre-built pages to help you get
                                    started faster. You can change the text and images and
                                    you're good to go. Just make sure you enable them first via
                                    JavaScript.
                </p>
                                <a
                                    href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                                    className="font-bold text-gray-800 mt-8"
                                >
                                    Check Tailwind Starter Kit!
                </a>
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