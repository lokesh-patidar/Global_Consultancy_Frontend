import { Box, Grid, Image, Skeleton, SkeletonText } from "@chakra-ui/react";
import { BestSeller } from "../Components/HomePageComponent/BestSeller";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllProductsFunc } from "../ReduxToolkit/Products/productsActions";
import { BestSeller1 } from "../Components/HomePageComponent/BestSeller1";
import { BestSeller2 } from "../Components/HomePageComponent/BestSeller2";


const Home = () => {

     return (
          <Box w='100%'>
               <Box w='full'>
                    <Image w='full' src="/assets/CMS.webp" />
               </Box>

               <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    padding="2%"
                    fontSize="170%"
                    fontWeight="bold"
                    color="gray.600">
                    Best Seller Products
               </Box>
               <Box display={{ base: 'none', md: 'none', lg: 'block' }} w={'100%'}>
                    <BestSeller />
               </Box>
               <Box display={{ base: 'none', md: 'block', lg: 'none' }} w={'100%'}>
                    <BestSeller1 />
               </Box>
               <Box display={{ base: 'block', md: 'none' }} w={'100%'}>
                    <BestSeller2 />
               </Box>

               <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    padding="2%"
                    fontSize="170%"
                    fontWeight="bold"
                    color="gray.600">
                    Exclusive Products
               </Box>
               <Box display={{ base: 'none', md: 'none', lg: 'block' }} w={'100%'}>
                    <BestSeller />
               </Box>
               <Box display={{ base: 'none', md: 'block', lg: 'none' }} w={'100%'}>
                    <BestSeller1 />
               </Box>
               <Box display={{ base: 'block', md: 'none' }} w={'100%'}>
                    <BestSeller2 />
               </Box>

               <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    padding="2%"
                    fontSize="170%"
                    fontWeight="bold"
                    color="gray.600">
                    Featured Products
               </Box>
               <Box display={{ base: 'none', md: 'none', lg: 'block' }} w={'100%'}>
                    <BestSeller />
               </Box>
               <Box display={{ base: 'none', md: 'block', lg: 'none' }} w={'100%'}>
                    <BestSeller1 />
               </Box>
               <Box display={{ base: 'block', md: 'none' }} w={'100%'}>
                    <BestSeller2 />
               </Box>

               <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    padding="2%"
                    fontSize="170%"
                    fontWeight="bold"
                    color="gray.600">
                    Shop By Categories
               </Box>
               <Box display={{ base: 'none', md: 'none', lg: 'block' }} w={'100%'}>
                    <BestSeller />
               </Box>
               <Box display={{ base: 'none', md: 'block', lg: 'none' }} w={'100%'}>
                    <BestSeller1 />
               </Box>
               <Box display={{ base: 'block', md: 'none' }} w={'100%'}>
                    <BestSeller2 />
               </Box>

               <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    padding="2%"
                    fontSize="170%"
                    fontWeight="bold"
                    color="gray.600">
                    Latest Blogs
               </Box>
               <Box display={{ base: 'none', md: 'none', lg: 'block' }} w={'100%'}>
                    <BestSeller />
               </Box>
               <Box display={{ base: 'none', md: 'block', lg: 'none' }} w={'100%'}>
                    <BestSeller1 />
               </Box>
               <Box display={{ base: 'block', md: 'none' }} w={'100%'}>
                    <BestSeller2 />
               </Box>
          </Box>
     );
};

export { Home };