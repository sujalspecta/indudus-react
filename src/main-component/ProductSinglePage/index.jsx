import React, {Fragment, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Product from './product'
import api from "../../api";
import ProductTabs from './alltab';
import Footer from '../../components/footer/Footer';
import Logo from '../../images/logo2.svg'


const ProductSinglePage =(props) => {
    const { slug } = useParams();
    const dispatch = useDispatch();

    const products = api();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const found = products.find((p) => String(p.slug) === String(slug));
        setProduct(found || null);
    }, [slug, products]);

    const addToCartProduct = (item, qty = 1) => {
        dispatch(addToCart({ ...item, qty }));
    };

    return(
        <Fragment>
            <NavbarS2 hclass={'wpo-site-header wpo-header-style-4'} Logo={Logo} />
            <PageTitle pageTitle={'Shop Single'} pagesub={'Shop Single'}/> 
            <section className="wpo-shop-single-section section-padding">
                <div className="container">
                    {product && (
                        <Product item={product} addToCart={addToCartProduct} />
                    )}
                    <ProductTabs/>
                </div>
            </section>
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    )
};

export default ProductSinglePage;
