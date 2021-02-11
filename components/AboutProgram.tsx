import {ComponentProps} from "../types/content"
import MarkdownComponent from './MarkdownComponent'

export const AboutProgram: React.FC<ComponentProps> = (props) => {
    const { data } = props;
    return (
        <section className="xl:bg-contain bg-top bg-no-repeat">
        <div className="container md:px-4 mx-auto">
          
          <div className="py-12 md:text-center text-left">
            <div className="w-4/5 mx-auto mb-8">
              <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading text-secondary">
               {data.title} {new Date().getFullYear()}
              </h2>
              <p className="text-gray-700 leading-relaxed">
              <MarkdownComponent content={data.content}/>
              </p>
            </div>
            {/* <div><a className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" href="#">Check Now</a><a className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white rounded" href="#">Documentation</a></div> */}
          </div>
          <div className="relative max-w-3xl mt-6 mb-8 mx-auto">
            <img src="assets/metis-assets/elements/pattern-small.png" alt="" />
            <div className="absolute bg-gray-100 rounded-lg px-8 pt-2" style={{ top: '3%', left: '9%', width: '82%', height: '90%', }}><img className="object-contain w-full h-full" src="assets/data.svg" alt="" /></div>
          </div>
           <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-8 pb-12">
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8"><img className="mx-auto" src="https://codefornepal.org/assets/img/c4n_logo.png" alt="" /></div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8"><img className="mx-auto" src="assets/datacamp.png" alt="" /></div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8 ml-4"><img className="mx-auto" src="assets/okn.png" alt="" /></div>
            {/* <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8"><img className="mx-auto" src="assets/metis-assets/logos/brands/marvel.svg" alt="" /></div> */}
            {/* <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8"><img className="mx-auto" src="assets/metis-assets/logos/brands/nike.svg" alt="" /></div> */}
            {/* <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8"><img className="mx-auto" src="assets/metis-assets/logos/brands/airbnb.svg" alt=""/></div> */}
            </div> 
          </div>
          <div className="hidden navbar-menu relative z-50">
            <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <a className="mr-auto text-3xl font-semibold leading-none" href="#"><img className="h-10" src="assets/metis-assets/logos/metis/metis.svg" alt="" width="auto" /></a>
                <button className="navbar-close">
                  <svg className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Product</a></li>
                  <li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Company</a></li>
                  <li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">About Us</a></li>
                  <li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Features</a></li>
                </ul>
                <div className="mt-4 pt-6 border-t border-blueGray-100"><a className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded" href="#">Sign Up</a><a className="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" href="#">Log In</a></div>
              </div>
              <div className="mt-auto">
                <p className="my-4 text-xs text-blueGray-400">
                  <span>Get in Touch</span>
                  <a className="text-blue-600 hover:text-blue-600 underline" href="#">info@example.com</a>
                </p>
                <a className="inline-block px-1" href="#"><img src="assets/metis-assets/icons/facebook-blue.svg" alt="" /></a><a className="inline-block px-1" href="#"><img src="assets/metis-assets/icons/twitter-blue.svg" alt="" /></a><a className="inline-block px-1" href="#"><img src="assets/metis-assets/icons/instagram-blue.svg" alt="" /></a>
              </div>
            </nav>
          </div>
      </section>
    )
}

/**
 * 
 * <section className="xl:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: `url('assets/metis-assets/backgrounds/intersect.svg')` }}>
        <div className="container px-4 mx-auto">
          
          <div className="py-12 text-center">
            <div className="max-w-lg mx-auto mb-8">
              <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
                <span>The quick</span>
                <span className="text-blue-600">brown fox</span>
                <span>jumps over the lazy dog.</span>
              </h2>
              <p className="text-blueGray-400 leading-relaxed">The quick brown fox jumps over the lazy dog.</p>
            </div>
            <div><a className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" href="#">Check Now</a><a className="block sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white rounded" href="#">Documentation</a></div>
          </div>
          <div className="relative max-w-3xl mt-6 mb-8 mx-auto">
            <img src="assets/metis-assets/elements/pattern-small.png" alt="" />
            <div className="absolute" style={{ top: '3%', left: '9%', width: '82%', height: '90%', }}><img className="object-contain w-full h-full" src="assets/metis-assets/elements/app-mockup.png" alt="" /></div>
          </div>
          <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-8 pb-12">
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8"><img className="mx-auto" src="assets/metis-assets/logos/brands/tesla.svg" alt="" /></div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8"><img className="mx-auto" src="assets/metis-assets/logos/brands/facebook.svg" alt="" /></div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8"><img className="mx-auto" src="assets/metis-assets/logos/brands/marvel.svg" alt="" /></div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8"><img className="mx-auto" src="assets/metis-assets/logos/brands/nike.svg" alt="" /></div>
            <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8"><img className="mx-auto" src="assets/metis-assets/logos/brands/airbnb.svg" alt=""/></div>
            </div>
          </div>
          <div className="hidden navbar-menu relative z-50">
            <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
            <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <a className="mr-auto text-3xl font-semibold leading-none" href="#"><img className="h-10" src="assets/metis-assets/logos/metis/metis.svg" alt="" width="auto" /></a>
                <button className="navbar-close">
                  <svg className="h-6 w-6 text-blueGray-400 cursor-pointer hover:text-blueGray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Product</a></li>
                  <li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Company</a></li>
                  <li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">About Us</a></li>
                  <li className="mb-1"><a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-600" href="#">Features</a></li>
                </ul>
                <div className="mt-4 pt-6 border-t border-blueGray-100"><a className="block px-4 py-3 mb-3 text-xs text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 text-white rounded" href="#">Sign Up</a><a className="block px-4 py-3 mb-2 text-xs text-center text-blue-600 hover:text-blue-700 font-semibold leading-none border border-blue-200 hover:border-blue-300 rounded" href="#">Log In</a></div>
              </div>
              <div className="mt-auto">
                <p className="my-4 text-xs text-blueGray-400">
                  <span>Get in Touch</span>
                  <a className="text-blue-600 hover:text-blue-600 underline" href="#">info@example.com</a>
                </p>
                <a className="inline-block px-1" href="#"><img src="assets/metis-assets/icons/facebook-blue.svg" alt="" /></a><a className="inline-block px-1" href="#"><img src="assets/metis-assets/icons/twitter-blue.svg" alt="" /></a><a className="inline-block px-1" href="#"><img src="assets/metis-assets/icons/instagram-blue.svg" alt="" /></a>
              </div>
            </nav>
          </div>
      </section>
 */