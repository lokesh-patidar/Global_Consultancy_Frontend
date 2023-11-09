import { Box, Image } from "@chakra-ui/react";
import { BestSeller } from "../Components/HomePageComponent/BestSeller";


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
                    color="gray.600"
               >
                    Best Seller Products
               </Box>
               <Box height='400px' width='100vh'>
                    <BestSeller />
               </Box>
          </Box>
     );
};

export { Home };