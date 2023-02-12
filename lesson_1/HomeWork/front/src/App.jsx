import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";

import "./style/main.scss";


import stella from "./img/stella.jpg"

function App(){


    return  (
        <>  
        <main className="wrapper">

        
            <Header/>

            <section>
            
                <img src={stella} id="img" alt=""/>

            </section>
            <Footer/>
            </main>
        </>

    )
}

export default App