import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, deleteCartItem, getAllCartItemsFunc, increaseQuantity, placeOrder } from "../ReduxToolkit/Cart/cartActions";
import { useEffect, useMemo, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";


const Cart = () => {

     const dispatch = useDispatch();
     const navigate = useNavigate();
     const { allCartItems } = useSelector(state => state.cartSlice);
     const [total, setTotal] = useState(0);

     const handleQuantityDecrease = (id) => {
          dispatch(decreaseQuantity(id));
     };

     const handleQuantityIncrease = (id) => {
          dispatch(increaseQuantity(id));
     };

     const handleDeleteCartItem = (id) => {
          dispatch(deleteCartItem(id));
     };

     const placeOrderFunc = () => {
          dispatch(placeOrder(navigate));
     };

     useEffect(() => {
          dispatch(getAllCartItemsFunc());
     }, [dispatch]);

     const calculateTotalPrice = (item) => {
          const productPrice = item.product.price;
          const quantity = item.quantity;
          return productPrice * quantity;
     };

     useMemo(() => {
          setTotal(allCartItems.reduce((acc, item) => acc + calculateTotalPrice(item), 0));
     }, [allCartItems]);

     return (
          <Box>
               <Heading mt={3} mb={3} as={'h1'}>Shopping Cart</Heading>
               <Box display='flex' flexDir={{ base: 'column-reverse', md: 'row' }}>
                    <Box w={{ base: '100%', md: '70%' }}>
                         {
                              allCartItems?.map((el) => {
                                   return (
                                        <Box key={el._id} display='flex' justifyContent='space-between' border='0.5px solid gray' m={4} p={2}>
                                             <Box w='250px'>
                                                  <Image w='full' src={el?.product?.picture} />
                                             </Box>
                                             <Box display='flex' flexDir='column' pt={5} pl={3} w={'60%'}>
                                                  <Text display='flex' textAlign={'left'} fontWeight='bold'>{el?.product?.name}</Text>
                                                  <Text display='flex' textAlign={'left'} fontWeight={400}>{el?.product?.GenericName}</Text>
                                                  <Text display='flex' textAlign={'left'} fontWeight={400}>Price: {el?.product?.price}</Text>
                                             </Box>
                                             <Box w={'fit-content'} display='flex' justifyContent='space-between' flexDir='column' p={2}>
                                                  <Box display='flex' justifyContent='center'>
                                                       <Button onClick={() => handleQuantityDecrease(el?.product?._id)} size={'sm'}><AiOutlineMinus /></Button>
                                                       <Button size={'sm'} bg={'white'} border='1px solid black'>{el?.quantity}</Button>
                                                       <Button onClick={() => handleQuantityIncrease(el?.product?._id)} size={'sm'}><AiOutlinePlus /></Button>
                                                  </Box>
                                                  <Box>Sub-Total: {el?.product?.price * el?.quantity}</Box>
                                                  <Box>
                                                       <Button onClick={() => handleDeleteCartItem(el?.product?._id)} size={'sm'} colorScheme="red"><RxCross1 /></Button>
                                                  </Box>
                                             </Box>
                                        </Box>
                                   );
                              })
                         }
                    </Box>
                    <Box w={{ base: '70%', sm: '50%', md: '30%' }} p={3}>
                         <Box p={5} boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px">
                              <Heading fontWeight={500} display='flex' as={'h3'} fontSize={'120%'}>Total</Heading>
                              <Text display='flex'>Sub-total: {total || 0}</Text>
                              <Heading fontWeight={500} display='flex' fontSize={'120%'} as={'h3'}>Order Total</Heading>
                              <Text display='flex'>Total: {total || 0}</Text>
                              <Button mt={5} bg={'yellow.400'} size={'md'} onClick={placeOrderFunc}>Place Order</Button>
                         </Box>
                    </Box>
               </Box>
          </Box>
     );
};

export { Cart };