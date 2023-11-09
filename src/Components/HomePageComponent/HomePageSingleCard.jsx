import { Box, Image, Text } from "@chakra-ui/react";

const HomePageSingleCard = ({
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
          <Box p={2} width='300px' border='1px solid red' display='flex' flex>
               <Box w='90%'>
                    <Image width='100%' src={picture} alt={name} />
               </Box>
               <Box>
                    <Text>{name}</Text>
                    <Text>{GenericName}</Text>
               </Box>
          </Box>
     );
};

export { HomePageSingleCard };