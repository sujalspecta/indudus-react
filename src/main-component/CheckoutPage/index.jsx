import React, {Fragment} from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from "../../components/pagetitle/PageTitle";
import CheckoutSection from '../../components/CheckoutSection'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useSelector } from "react-redux";
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo2.svg'

const CheckoutPage =() => {

    const cartList = useSelector((state) => state.cart.cart);

    return(
        <Fragment>
            <NavbarS2 hclass={'wpo-site-header wpo-header-style-4'} Logo={Logo} />
            <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'}/> 
            <CheckoutSection cartList={cartList}/>
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    )
};

export default CheckoutPage;