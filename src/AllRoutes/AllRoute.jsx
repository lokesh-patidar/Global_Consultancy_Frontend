import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import { LoginPage } from "../Pages/Login";
import { RegisterPage } from "../Pages/Register";
import { Home } from "../Pages/Home";

const AllRoute = () => {

  return (
    <Routes>
      <Route path={`/login`} element={
        <Box width='100%'>
          <Box className='MainContainer'>
            <LoginPage />
          </Box>
        </Box>
      } />
      <Route path={`/register`} element={
        <Box width='100%'>
          <Box className='MainContainer'>
            <RegisterPage />
          </Box>
        </Box>
      } />
      <Route path={`/`} element={
        <Box width='100%'>
          <Box className='MainContainer'>
            <Home />
          </Box>
        </Box>
      } />
    </Routes>
  );
};

export { AllRoute };