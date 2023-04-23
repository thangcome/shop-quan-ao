import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    return (
        <div className='sidebar'>
            <div className='category-section'>
                <div className='category-header'>
                    <h3>DANH MỤC</h3>
                </div>
                <div className='category-name'>
                    <input type="checkbox" id="aonam" name="aonam" value="aonam" />
                    <label htmlFor="aonam"> Quần áo nam</label><br />
                    <input type="checkbox" id="aonu" name="aonu" value="aonu" />
                    <label htmlFor="aonu"> Quần áo nữ</label><br />
                </div>
            </div>
            <div className='product-type-section'>
                <div className='product-type-header'>
                    <h3>LOẠI QUẦN ÁO</h3>
                </div>
                <div className='product-type-name'>
                    <input type="checkbox" id="aothun" name="aothun" value="aothun" />
                    <label htmlFor="aothun"> Áo thun</label><br />
                    <input type="checkbox" id="aosomi" name="aosomi" value="aosomi" />
                    <label htmlFor="aosomi"> Áo sơ mi</label><br />
                    <input type="checkbox" id="aokhoac" name="aokhoac" value="aokhoac" />
                    <label htmlFor="aokhoac"> Áo khoác</label><br />
                    <input type="checkbox" id="aolen" name="aolen" value="aolen" />
                    <label htmlFor="aolen"> Áo len</label><br />
                    <input type="checkbox" id="quanjean" name="quanjean" value="quanjean" />
                    <label htmlFor="quanjean"> Quần jean</label><br />
                    <input type="checkbox" id="quanvai" name="quanvai" value="quanvai" />
                    <label htmlFor="quanvai"> Quần vải</label><br />
                    <input type="checkbox" id="quanshort" name="quanshort" value="quanshort" />
                    <label htmlFor="quanshort"> Quần short</label><br />
                    <input type="checkbox" id="quanni" name="quanni" value="quanni" />
                    <label htmlFor="quanni"> Quần nỉ</label><br />
                </div>
            </div>
            <div className='product-price-section'>
                <div className='product-price-header'>
                    <h3>GIÁ TIỀN</h3>
                </div>
                <div className='product-price-input'>
                    <p>Từ</p> <input type="number" placeholder="Số tiền nhỏ nhất" />
                    <p>Đến</p> <input type="number" placeholder="Số tiền cao nhất" />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;