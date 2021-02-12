
export const Footer:React.FC = () => {
  return (
    <>
      <footer className="relative pt-8 pb-6" style={{backgroundColor:'#3f4d64'}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-gray-200">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-200">
                Find us on any of these platforms.
              </h5>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className={
                    "text-gray-300" +
                    " pr-6 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="https://www.facebook.com/codefornepal"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i
                    className={
                      "text-gray-300" +
                      " fab fa-facebook text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Facebook</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                      "text-gray-300" +
                    " pr-6 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="https://twitter.com/codefornepal"
                  target="_blank"
                  rel="noreferrer noopener"

                >
                  <i
                    className={
                      "text-gray-300" +
                      " fab fa-twitter text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Twitter</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className={
                    "text-gray-300" +
                    " pr-6 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }
                  href="https://github.com/CodeforNepal/data-fellowship"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <i
                    className={
                      "text-gray-300" +
                      " fab fa-github text-lg leading-lg "
                    }
                  />
                  <span className="lg:hidden inline-block ml-2">Github</span>
                </a>
              </li>

              {/* <li className="flex items-center">
                <button
                  className={
                    (true
                      ? "bg-white text-gray-800 active:bg-gray-100"
                      : "bg-pink-500 text-white active:bg-pink-600") +
                    " text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                  }
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <i className="far fa-check-circle"></i> Apply
                </button>
              </li> */}
            </ul>
            </div>
            <div className="w-full lg:w-6/12 px-4 py-4 md:py-0">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 md:px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm"
                         href="https://codefornepal.org/#about" target="_blank" rel="noreferrer noopenerr">About Us
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer noopenerr" className="text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm"
                         href="https://codefornepal.org/blog/">Blog
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noreferrer noopenerr" className="text-gray-200 hover:text-gray-400 font-semibold block pb-2 text-sm"
                         href="https://github.com/code4Nepal">Github
                      </a>
                    </li>
                    
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 md:px-4 py-4 md:py-0">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a target="_blank" className="text-gray-200 hover:text-gray-400  font-semibold block pb-2 text-sm"
                         href="https://codefornepal.org/#about">Contact Us
                      </a>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
          <hr className="mb-6 border-gray-200" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-200 font-semibold py-1">
              <a target="_blank" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style={{borderWidth:0}} src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" className="mx-auto" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
