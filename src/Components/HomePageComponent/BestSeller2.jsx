import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { HomePageSingleCard } from "./HomePageSingleCard";
import { getAllProductsFunc } from "../../ReduxToolkit/Products/productsActions";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Skeleton, SkeletonText } from "@chakra-ui/react";

const BestSeller2 = () => {

     const dispatch = useDispatch();
     const navigate = useNavigate();
     const { allProducts, isProductsError, isProductsLoading } = useSelector(state => state?.productsSlice);
     console.log({ allProducts })

     var settings = {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          autoplay: false,
          arrows: true,
          // autoplaySpeed: 5000,
          cssEase: "linear",
          swipeToSlide: true,
     };


     useEffect(() => {
          dispatch(getAllProductsFunc(navigate));
     }, [dispatch]);


     return (
          <Box display='block' w={'100%'}>
               {
                    isProductsLoading ? (
                         <Grid
                              w={{
                                   base: "100%",
                                   md: "90%",
                                   lg: "80%",
                              }}
                              m="auto"
                              templateColumns={{
                                   base: "repeat(2,1fr)",
                              }}
                              gap="2"
                              p="2"
                         >
                              {new Array(5).fill(0).map((e, i) => (
                                   <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
                                        <Skeleton size="15" h="150px" />
                                        <SkeletonText
                                             w="80%"
                                             m="auto"
                                             mb="20px"
                                             mt="4"
                                             noOfLines={2}
                                             spacing="1"
                                        />
                                   </Box>
                              ))}
                         </Grid>
                    ) : (
                         <>
                              <Slider {...settings}>
                                   {allProducts?.map((ele) => <HomePageSingleCard size={100} key={ele._id} {...ele} />)}
                              </Slider>
                         </>
                    )
               }
          </Box>

     );
};

export { BestSeller2 };