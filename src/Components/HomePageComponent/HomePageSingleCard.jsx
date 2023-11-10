import { Box, Button, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePageSingleCard = ({
     _id,
     GenericName,
     createdAt,
     description,
     name,
     picture,
     price,
     rating,
     updatedAt
}) => {
     return (
          <Box p={2} display='flex' flexDir={'column'} border={'1px solid gray'} m={1} bg={'white'} borderRadius={'10px'}>
               <Box height={{ base: '100px', sm: '200px', md: '200px', }} w={{ base: '100%', sm: '80%', md: '100%' }} m={'auto'}>
                    <Image width='100%' maxH={'100%'} src={picture} alt={name} />
               </Box>
               <Box display={'flex'} flexDir={'column'}>
                    <Text fontSize={{ base: '80%', sm: '85%', md: '90%', lg: '110%' }} fontWeight={500}>{name}</Text>
                    <Text fontSize={{ base: '80%', sm: '85%', md: '90%', lg: '110%' }} fontWeight={500}>{GenericName}</Text>
               </Box>
               <Box display='flex' justifyContent='center' alignItems='center' p={2}>
                    <Link to={`/${_id}`}>
                         <Button bg={'yellow.400'} size={{ base: 'sm', md: 'md' }} fontWeight={500}>Add To Cart</Button>
                    </Link>
               </Box>
          </Box>
     );
};

export { HomePageSingleCard };