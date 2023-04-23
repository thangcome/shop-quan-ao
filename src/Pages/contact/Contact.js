import styled from "styled-components";
import Header from "../../Component/header/Header";
import Footer from "../../Component/footer/Footer";

const Contact = () => {
    return (
        <FormContainer >
            <Header />
            <div className="contact-main">
                <div className="contact-header">
                    <p>CONTACT WITH US</p>
                </div>
                <div className="contact-content">
                    <div className="contact-info">
                        <p><i className="fa-sharp fa-solid fa-location-dot"></i> Hà Nội, Việt Nam</p>
                        <p><i className="fa-solid fa-mobile-screen"></i> Phone: +81 1551546435</p>
                        <p><i className="fa-solid fa-envelope"></i> Email: mail@mail.com</p>
                    </div>
                    <div className="contact-form">
                        <form action="">
                            <table>
                                <tr>
                                    <td><label htmlFor="ten"> Họ và tên:</label></td>
                                    <td><input type="text" required id="ten" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="mail"> Email:</label></td>
                                    <td><input type="email" required id="mail" className="form-control" /></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="message"> Message:</label></td>
                                    <td><textarea required rows="5" cols="40" id="message" className="form-control" /></td>
                                </tr>
                            </table>
                            <input className="form-submit-btn" type="submit" value="SEND" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </FormContainer>
    )
}

const FormContainer = styled.div`
    margin-top: 65px;
    .contact-main{
        margin-top: 60px;
        height: 90vh;
        width: 100%;
        background: url(/assets/img/jess-bailey-q10VITrVYUM-unsplash.jpg) top center / cover no-repeat;
        position: relative;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .contact-main .contact-header{
        transform: translateY(-200px);
        color: rgb(61, 45, 45);
        font-size: 40px;
    }
    .contact-main input{
        display: block;
        width: 80%;
        padding: 8px;
        margin: 5px 25px;
        border: 1px solid rgb(63, 63, 63);
        border-radius: 5px;
    }

    .contact-main textarea{
        display: block;
        padding: 5px;
        margin: 5px 25px;
        border: 1px solid rgb(63, 63, 63);
        border-radius: 5px;
    }
    .contact-content{
        width: 60%;
        height: 60%;
        background-color: #fff;
        position: absolute;
        display: flex;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.9);
        font-size: 16px;
    }
    .contact-content .contact-info{
        font-size: 16px;
        text-align: left;
        font-style: oblique;
        color: rgb(0, 174, 255);
        width: 30%;
        margin-left: 50px;
        line-height: 20px;
    }
    .contact-content .form-submit-btn{
        width: 30%;
        margin: 10px auto;
        font-weight: bold;
        background-color: rgba(91, 65, 65,.4);
    }
    .contact-content .contact-form{
        padding-left: 20px;
        display: flex;
        align-items: center;
        border-left: 1px solid rgb(147, 140, 140);
    }
`

export default Contact;