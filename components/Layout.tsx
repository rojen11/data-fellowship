import Meta from "./meta"
import {Navbar} from './Navbar'
import {Footer} from './Footer'
export const Layout:React.FC = ({children}) =>{
    return(
        <>
         <Navbar />
        <Meta/>
            <main>
        {children}
            </main>
            <Footer/>
        </>
    )
}