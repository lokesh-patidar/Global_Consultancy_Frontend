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
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerFunction } from "../ReduxToolkit/Authentication/authenticationActions";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { FiUser } from "react-icons/fi";


const RegisterPage = () => {

     const navigate = useNavigate();
     const dispatch = useDispatch();
     const [show, setShow] = useState(false);
     const [loading, setLoading] = useState(false);

     const [formData, setFormData] = useState({
          userName: '',
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
               userName: '',
               email: '',
               password: '',
          });
     };

     const handleClick = () => setShow(!show);

     const handleRegister = () => {
          if (formData?.userName && formData?.email && formData?.password) {
               console.log({ formData });
               dispatch(registerFunction(formData, navigate, setLoading, resetFormData));
          }
     };

     return (
          <Box w={{ base: '90%', md: '70%', lg: '60%', xl: '55%' }} m={'auto'}>
               <Box spacing={{ base: 20, sm: 3, md: 5, lg: 20 }} display='flex' flexDir={{ base: 'column', md: 'row' }}>
                    <Box display='flex' w={'full'}>
                         <Box borderRadius="lg" w={'full'}>
                              <Box m={8}>
                                   <Heading mt={3} mb={5} as={'h1'} fontSize={{ base: '130%', md: '140%', lg: '200%', xl: '250%' }} fontWeight={'bold'}>Create New Customer Account</Heading>
                                   <Text display={'flex'} mt={4} mb={4} fontSize={{ base: '100%', md: '110%', lg: '130%' }}>Personal Information</Text>
                                   <VStack spacing={3}>
                                        <FormControl>
                                             <FormLabel>User Name</FormLabel>
                                             <Input
                                                  size={'md'}
                                                  type="text"
                                                  value={formData?.userName}
                                                  name='userName'
                                                  placeholder='Enter username'
                                                  onChange={handleInputChange}
                                             />
                                        </FormControl>
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
                                                  onClick={() => handleRegister()}
                                                  isLoading={loading}>
                                                  Register
                                             </Button>
                                        </FormControl>
                                   </VStack>
                                   <Stack pt={6}>
                                        <Text align={'center'}>
                                             Already a user? <Link to='/login' color={'blue.400'}><span style={{ color: 'blue' }}>Login</span></Link>
                                        </Text>
                                   </Stack>
                              </Box>
                         </Box>
                    </Box>
               </Box>
          </Box>
     );
};

export { RegisterPage };