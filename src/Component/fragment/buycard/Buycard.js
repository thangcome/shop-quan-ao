import './Buycard.css';

const Buycard = (props) => {
    const _closeBuyCard = () => {
        props.turnOffBuyCard();
    }
    return (
        <div className="modal">
            <div className="modal-container">
                <div className="modal-close" onClick={_closeBuyCard}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="buy-item">
                    <img src="/assets/img/product/product-1.jpg" alt="Lỗi ảnh" />
                    <div className='product-detail'>
                        <p className="product-name">Mô tả: Set quần áo nữ</p>
                        <p className="product-price">Giá: 1600000 Đ</p>
                    </div>
                </div>
                <div className="modal-body">
                    <p>Mời nhập số lượng</p>
                    <input type="number" className="modal-input" placeholder="How many?" min="1" max="10"></input>
                    <button id="buy-tickets" onClick={_closeBuyCard}>
                        MUA <i className="ti-check"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Buycard;