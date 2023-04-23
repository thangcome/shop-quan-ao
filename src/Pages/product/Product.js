import Header from "../../Component/header/Header";
import ProductMain from "../../Component/productmain/ProductMain";
import Sidebar from "../../Component/sidebar/Sidebar";
import Footer from "../../Component/footer/Footer";
import './Product.css';

const Product = () => {
    return (
        <div>
            <Header />
            <div className="product-pagecontainer">
                <Sidebar />
                <ProductMain />
            </div>
            <Footer />
        </div>
    )
}

export default Product;
