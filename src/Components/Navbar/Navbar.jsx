import {
    Avatar,
    Box,
    Button,
    Center,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserProfileFunc } from '../../ReduxToolkit/UserProfile/userProfileActions';
import { BsCart3 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { getAllCartItemsFunc } from '../../ReduxToolkit/Cart/cartActions';


export default function Navbar() {

    const dispatch = useDispatch();
    const { user, isUserProfileLoading, isUserProfileError } = useSelector((state) => state?.userprofile)
    const { allCartItems } = useSelector(state => state.cartSlice);
    console.log({ allCartItems });

    useEffect(() => {
        dispatch(getUserProfileFunc());
        dispatch(getAllCartItemsFunc());
    }, []);

    return (
        <Box
            display='flex'
            justifyContent="space-between"
            p={2}
            alignItems='center'
            w='100%'
            bg={'#96c7d6'}
        >
            <Box display='flex' alignItems='center' p={2} w={{ base: '17%', sm: '15%', lg: '13%', xl: '10%' }}>
                <Image w={'100%'} src='/assets/logo_1.webp' />
            </Box>
            <Box pr={3} display={'flex'} width={'fit-content'}>
                <Menu>
                    <MenuButton
                        as={Button}
                        bg={'transparent'}
                        _hover={{ backgroundColor: 'transparent' }}
                        leftIcon={<AiOutlineUser fontSize={{ base: '10px', sm: '20px', md: '30px', lg: '40px', xl: '50px' }} />}
                        p={1}
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        borderRadius='20px'
                        pl={3}
                        pr={3}
                        border={'2px solid white'}
                    >
                        <span style={{ margin: 'auto', fontWeight: '500' }}>My Account</span>
                    </MenuButton>
                    <MenuList>
                        <Link to='/login'>
                            <MenuItem>My Account</MenuItem>
                        </Link>
                        <Link to='/login'>
                            <MenuItem>Sign In</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton
                        as={Button}
                        bg={'transparent'}
                        _hover={{ backgroundColor: 'transparent' }}
                        leftIcon={<BsCart3 fontSize={{ base: '10px', sm: '20px', md: '30px', lg: '40px', xl: '50px' }} />}
                        p={1}
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        borderRadius='20px'
                        pl={3}
                        pr={3}
                        ml={2}
                        border={'2px solid white'}
                    >
                        <span style={{ margin: 'auto', fontWeight: '500' }}>{allCartItems?.length > 0 ? `${allCartItems?.length} Items` : 'My Cart'}</span>
                    </MenuButton>
                    <MenuList>
                        <Link to='cart'>
                            <MenuItem>
                                {allCartItems?.length > 0 ? (
                                    <Box>
                                        {allCartItems?.map((el) => {
                                            return <Box key={el._id} display='flex' bg='white' m={1} p={2}>
                                                <Box>
                                                    <Image w={'90px'} src={el?.product?.picture} />
                                                </Box>
                                                <Box display='flex' flexDir='column'>
                                                    <Text fontWeight='bold'>{el?.product?.name}</Text>
                                                    <Text fontWeight={400}>{el?.product?.GenericName}</Text>
                                                    <Text fontWeight={400}>Price: {el?.product?.price}</Text>
                                                </Box>
                                            </Box>
                                        })}
                                    </Box>
                                ) : (
                                    'No Cart Items Available'
                                )}
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
        </Box>
    );
};