/* Backgrounds */
import FirstBackground from "../Templates/FirstBackground/FirstBackground";
import SecondBackground from "../Templates/SecondBackground/SecondBackground";
import Footer from "../Layout/Footer/AegisFooter";

function AegisHome(){
    return(
        <main className="flex flex-col items-center">
            <FirstBackground />
            <SecondBackground />
            <Footer />
        </main>
    );
}

export default AegisHome