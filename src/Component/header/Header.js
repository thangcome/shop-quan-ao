import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='logoshop'>
                <h2>SHOP VIET</h2>
                <i className="fab fa-shopify"></i>
            </div>
            <nav className='navigation'>
                <li><a href="/">TRANG CHỦ</a></li>
                <li><a href="/product">SẢN PHẨM</a></li>
                <li><a href="/contact">LIÊN HỆ</a></li>
                <li><a href="/salespromotion">KHUYẾN MẠI</a></li>
                <li>
                    <a href="#1">
                        TÀI KHOẢN
                        <i className="fas fa-angle-down"></i>
                    </a>
                    <ul className="subnav">
                        <li><a href="/signin">ĐĂNG NHẬP</a></li>
                        <li><a href="/signup">ĐĂNG KÝ</a></li>
                    </ul>
                </li>
            </nav>
        </div>
    )
}

export default Header;