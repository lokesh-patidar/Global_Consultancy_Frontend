import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductByIdFunc } from "../ReduxToolkit/Products/productsActions";
import { BsFillStarFill } from 'react-icons/bs';
import { BiSolidStarHalf } from "react-icons/bi";
import { addToCart } from "../ReduxToolkit/Cart/cartActions";


const ProductDetails = () => {

     const dispatch = useDispatch();
     const navigate = useNavigate();
     const { id } = useParams();
     const { productById, isProductByIdLoading, isProductByIdError } = useSelector(state => state?.productsSlice);

     const handleAddToCart = () => {
          dispatch(addToCart(id, navigate));
          navigate('/cart');
     };

     useEffect(() => {
          dispatch(getProductByIdFunc(id, navigate));
     }, [dispatch]);


     return (
          <Box display='flex' flexDir={{ base: 'column', md: 'row' }} w='90%' m='auto' pt={5}>
               <Box w={{ base: '100%', md: '40%' }}>
                    <Image w={{ base: '70%', sm: '60%', md: '90%' }} m={'auto'} src={productById?.picture} />
               </Box>
               <Box w={{ base: '100%', md: '60%' }}>
                    <Heading as={'h1'} mt={5}>{productById?.name}</Heading>
                    <Heading as={'h3'} fontSize={'130%'} mt={3}>{productById?.GenericName}</Heading>
                    <Box display='flex' justifyContent='center' alignItems='center' p={3}>
                         <BsFillStarFill color="#ab8f2c" fontSize={'150%'} />
                         <BsFillStarFill color="#ab8f2c" fontSize={'150%'} />
                         <BsFillStarFill color="#ab8f2c" fontSize={'150%'} />
                         <BsFillStarFill color="#ab8f2c" fontSize={'150%'} />
                         <BiSolidStarHalf color="#ab8f2c" fontSize={'150%'} />
                    </Box>
                    <Text display={'flex'}>Availability: IN STOCK</Text>
                    <Text display='flex' textAlign={'left'}>{productById?.description}</Text>
                    <Text display='flex' fontSize={'110%'}>Price: {productById?.price}</Text>
                    <Button onClick={handleAddToCart} bg={'yellow.400'} size={'md'} fontWeight={500}>Add To Cart</Button>
               </Box>
          </Box>
     );
};

export { ProductDetails };