import './NewProduct.css';
import React from 'react';

const NewProduct = (props) => {
    const _clickImage = () => {
        props.turnOnBuyCard()
    }
    return (
        <>
            <div className="new-product">
                <div className="content-section">
                    <h3>SẢN PHẨM MỚI</h3>
                </div>
                <div className="new-product-list">
                    <div className="product-item">
                        <img src="/assets/img/product/product-1.jpg" alt="Lỗi ảnh" onClick={_clickImage} />
                        <div className='product-detail'>
                            <p className="product-name">Mô tả: Set quần áo nữ</p>
                            <p className="product-price">Giá: 1600000 Đ</p>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src="/assets/img/product/product-1.jpg" alt="Lỗi ảnh" onClick={_clickImage} />
                        <div className='product-detail'>
                            <p className="product-name">Mô tả: Set quần áo nữ</p>
                            <p className="product-price">Giá: 1600000 Đ</p>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src="/assets/img/product/product-1.jpg" alt="Lỗi ảnh" onClick={_clickImage} />
                        <div className='product-detail'>
                            <p className="product-name">Mô tả: Set quần áo nữ</p>
                            <p className="product-price">Giá: 1600000 Đ</p>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src="/assets/img/product/product-1.jpg" alt="Lỗi ảnh" onClick={_clickImage} />
                        <div className='product-detail'>
                            <p className="product-name">Mô tả: Set quần áo nữ</p>
                            <p className="product-price">Giá: 1600000 Đ</p>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src="/assets/img/product/product-1.jpg" alt="Lỗi ảnh" onClick={_clickImage} />
                        <div className='product-detail'>
                            <p className="product-name">Mô tả: Set quần áo nữ</p>
                            <p className="product-price">Giá: 1600000 Đ</p>
                        </div>
                    </div>
                    <div className="product-item">
                        <img src="/assets/img/product/product-1.jpg" alt="Lỗi ảnh" onClick={_clickImage} />
                        <div className='product-detail'>
                            <p className="product-name">Mô tả: Set quần áo nữ</p>
                            <p className="product-price">Giá: 1600000 Đ</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewProduct;