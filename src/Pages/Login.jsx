import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
     Container,
     Flex,
     Box,
     Text,
     Button,
     VStack,
     Wrap,
     FormControl,
     FormLabel,
     Input,
     InputGroup,
     InputLeftElement,
     Avatar,
     Stack,
     Heading,
} from '@chakra-ui/react';
import {
     MdOutlineEmail,
} from 'react-icons/md';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginFunction } from "../ReduxToolkit/Authentication/authenticationActions";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';


const LoginPage = () => {

     const navigate = useNavigate();
     const dispatch = useDispatch();
     const [show, setShow] = useState(false);
     const [loading, setLoading] = useState(false);
     const token = localStorage.getItem("global_Consultancy_token");


     const [formData, setFormData] = useState({
          email: '',
          password: '',
     });

     const handleInputChange = (event) => {
          const { name, value } = event.target;
          setFormData((prevData) => ({
               ...prevData,
               [name]: value,
          }));
     };

     const resetFormData = () => {
          setFormData({
               email: '',
               password: '',
          });
     };

     const handleClick = () => setShow(!show);


     const handleSignIn = () => {
          if (formData?.email && formData?.password) {
               console.log({ formData });
               dispatch(loginFunction(formData, navigate, setLoading, resetFormData));
          }
          else if (formData?.email !== '' && formData?.password === '') {
               toast.error('Please enter password!', {
                    autoClose: 1500,
                    position: 'top-center',
               });
          }
          else if (formData?.email === '' && formData?.password !== '') {
               toast.error('Please enter email!', {
                    autoClose: 1500,
                    position: 'top-center',
               });
          }
     };

     useEffect(() => {
          if (!token) {
               navigate(`/login`);
          }
          else {
               navigate(`/`);
          }
     }, [token]);

     return (
          <Box w={{ base: '90%', md: '70%', lg: '60%', xl: '55%' }} m={'auto'}>
               <Box spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} display='flex' flexDir={{ base: 'column', md: 'row' }}>
                    <Box display='flex' w={'full'}>
                         <Box borderRadius="lg" w={'full'}>
                              <Box m={8}>
                                   <Heading mt={3} mb={5} as={'h1'} fontSize={{ base: '130%', md: '140%', lg: '200%', xl: '250%' }} fontWeight={'bold'}>Customer Login</Heading>
                                   <VStack spacing={3}>
                                        <FormControl>
                                             <FormLabel>Email</FormLabel>
                                             <Input
                                                  size={'md'}
                                                  type="email"
                                                  value={formData?.email}
                                                  name='email'
                                                  placeholder='Enter email'
                                                  onChange={handleInputChange}
                                             />
                                        </FormControl>
                                        <FormControl>
                                             <FormLabel>Password</FormLabel>
                                             <InputGroup borderColor="#E0E1E7">
                                                  <InputLeftElement onClick={handleClick}>
                                                       {show ? <ViewOffIcon cursor='pointer' /> : <ViewIcon cursor='pointer' />}
                                                  </InputLeftElement>
                                                  <Input
                                                       size={'md'}
                                                       value={formData?.password}
                                                       name='password'
                                                       type={show ? 'text' : 'password'}
                                                       placeholder='Enter password'
                                                       onChange={handleInputChange}
                                                  />
                                             </InputGroup>
                                        </FormControl>
                                        <FormControl float="right">
                                             <Button
                                                  variant="solid"
                                                  bg="#0D74FF"
                                                  color="white"
                                                  onClick={() => handleSignIn()}
                                                  isLoading={loading}>
                                                  Sign In
                                             </Button>
                                        </FormControl>
                                   </VStack>
                                   <Stack pt={6}>
                                        <Text align={'center'}>
                                             Create account and register? <Link to='/register' color={'blue.400'}><span style={{ color: 'blue' }}>Register</span></Link>
                                        </Text>
                                   </Stack>
                              </Box>
                         </Box>
                    </Box>
               </Box>
          </Box>
     );
};

export { LoginPage };