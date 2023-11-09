import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { HomePageSingleCard } from "./HomePageSingleCard";
import { getAllProductsFunc } from "../../ReduxToolkit/Products/productsActions";
import { useNavigate } from "react-router-dom";
import { Box } from "@chakra-ui/react";

const BestSeller = () => {

     const dispatch = useDispatch();
     const navigate = useNavigate();
     const { allProducts, isProductsError } = useSelector(state => state?.productsSlice);
     console.log({ allProducts })

     var settings = {
          dots: false,
          infinite: true,
          slidesToShow: 5,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
     };


     useEffect(() => {
          dispatch(getAllProductsFunc(navigate));
     }, [dispatch]);


     return (
          <div style={{ display: 'block' }}>
               <Slider {...settings}>
                    {allProducts?.map((ele) => {
                         return <HomePageSingleCard key={ele._id} {...ele} />
                    })}
               </Slider>
          </div>
     );
};

export { BestSeller };