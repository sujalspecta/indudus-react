import React, { Fragment, useState } from 'react';
import { useDispatch } from "react-redux";
// ✅ Redux Toolkit action
import { addToCart } from "../../store/slices/cartSlice";
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from '../../components/pagetitle/PageTitle'
import ShopProduct from '../../components/ShopProduct';
import api from "../../api";
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Logo from '../../images/logo2.svg';



const ShopPage = () => {


    const dispatch = useDispatch();

    const productsArray = api();

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    const totalProducts = productsArray.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages) return;
        setCurrentPage(pageNumber);
    };

    const currentProducts = productsArray.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    // ✅ RTK dispatch
    const addToCartProduct = (product, qty = 1) => {
        dispatch(addToCart({ ...product, qty }));
    };



    return (
        <Fragment>
            <NavbarS2 hclass={'wpo-site-header wpo-header-style-4'} Logo={Logo} />
            <PageTitle pageTitle={'Shop'} pagesub={'Shop'} />
            <section className="wpo-shop-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ShopProduct
                                addToCartProduct={addToCartProduct}
                                products={currentProducts}
                            />
                            {/* PAGINATION */}
                            <div className="pagination-wrapper pagination-wrapper-center">
                                <ul className="pg-pagination">

                                    <li>
                                        <button
                                            onClick={() => handlePageChange(currentPage - 1)}
                                            disabled={currentPage === 1}
                                        >
                                            <i className="ti-angle-left"></i>
                                        </button>
                                    </li>

                                    {[...Array(totalPages)].map((_, index) => (
                                        <li
                                            key={index}
                                            className={currentPage === index + 1 ? "active" : ""}
                                        >
                                            <button
                                                onClick={() => handlePageChange(index + 1)}
                                            >
                                                {index + 1}
                                            </button>
                                        </li>
                                    ))}

                                    <li>
                                        <button
                                            onClick={() => handlePageChange(currentPage + 1)}
                                            disabled={currentPage === totalPages}
                                        >
                                            <i className="ti-angle-right"></i>
                                        </button>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer hclass={'wpo-site-footer'} />
            <Scrollbar />
        </Fragment>
    )
};

export default ShopPage;