import React from 'react';



const Footer = () => {

    return (
        <div className="row">
            <div className="col-sm-6">
                <h5>PARTNER LINKS</h5>
                <ul >
                    <li >Apollo Hospitals</li>
                    <li >Malar Hospitals</li>
                    <li >Government Hospitals</li>
                </ul>
            </div>
            <div className="col-sm-6">
                <h5>CONNECT WITH US</h5>
                <a href="http://www.facebook.com">
                    <span className="fa fa-facebook-official fa-3x"></span>
                </a>
                <a href="http://www.twitter.com">
                    <span className="fa fa-twitter fa-3x"></span>
                </a>
            </div>
        </div>
    );

}

export default Footer;