import { useState } from "react";
import Banner from "../../Component/banner/Banner";
import Footer from "../../Component/footer/Footer";
import Buycard from "../../Component/fragment/buycard/Buycard";
import HotSeller from "../../Component/fragment/hotSeller/HotSeller";
import NewProduct from "../../Component/fragment/newProduct/NewProduct";
import Slideshow from "../../Component/fragment/slider/Slider";
import Header from "../../Component/header/Header";



function Home() {
    const [buyCarIsdOpen, setBuyCarIsOpen] = useState(false);
    const _ChangeStatusBuyCard = () => {
        setBuyCarIsOpen(!buyCarIsdOpen)
    }

    return (
        <div className="home">
            <Header />
            <Banner />
            <NewProduct turnOnBuyCard={_ChangeStatusBuyCard} />
            <Slideshow />
            <HotSeller />
            <Footer />
            {
                buyCarIsdOpen ? <Buycard turnOffBuyCard={_ChangeStatusBuyCard} /> : ""
            }
        </div>
    );
}

export default Home;