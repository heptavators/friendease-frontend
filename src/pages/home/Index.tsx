import Content from "components/Homepage/Content";
import Footer from "components/Homepage/Footer/Footer";
import Header from "components/Homepage/Header";
import OurTeam from "components/Homepage/OurTeam";

export default function Home() {

    return (
        <div className="bg-neutralPrimary flex flex-col gap-5">
            <Header />
            <Content />
            <OurTeam/>
            <Footer/>
        </div>
    );
}
