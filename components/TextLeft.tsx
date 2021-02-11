import ContentType from "../types/content"
import MarkdownComponent from "./MarkdownComponent"

export interface Props {
    data: ContentType
}
export const TextLeft: React.FC<Props> = (props) => {
    const { data } = props
    return (
        <section className="py-12 md:py-32 w-4/5 mx-auto">
        <div className="container md:px-4 mx-auto">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 md:px-3 order-1 md:order-0">
              <div className="w-full mx-auto">
                <h2 className="mb-4 text-3xl md:text-4xl font-bold font-heading">{data.title}</h2>
              <MarkdownComponent content={data.content}/>
                {/* <p className="mb-6 leading-loose text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                <ul>
                  <li className="py-4">
                    <span className="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded">1</span>
                    <span>Proin volutpat ex eu</span>
                  </li>
                  <li className="py-4">
                    <span className="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded">2</span>
                    <span>Fusce posuere nibh in cursus</span>
                  </li>
                  <li className="py-4">
                    <span className="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded">3</span>
                    <span>Maecenas sit amet vehicula</span>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="w-full md:w-1/2 px-12 order-0 md:order-1 mb-12 md:mb-0 flex items-center"><img className="sm:max-w-sm lg:max-w-full mx-auto" src={data.image || "assets/about.svg"} alt=""/></div>
          </div>
        </div>
      </section>

    )
}