import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import {
     getCartItemsRequest,
     getCartItemsSuccess,
     getCartItemsFailure,
} from "./cartSlice";
const api = process.env.REACT_APP_BASE_URL;


export const getAllCartItemsFunc = () => (dispatch) => {
     const token = localStorage.getItem("global_Consultancy_token");
     dispatch(getCartItemsRequest());
     axios.get(`${api}/get-cart-items`, {
          headers: {
               Authorization: `Bearer ${token}`,
          }
     })
          .then((response) => {
               dispatch(getCartItemsSuccess(response?.data?.cart));
          })
          .catch((e) => {
               console.log({ e });
               dispatch(getCartItemsFailure(e?.response?.data?.message || e?.message));
          });
};



export const addToCart = (productId, navigate) => async (dispatch) => {
     const token = localStorage.getItem("global_Consultancy_token");
     console.log({ productId });
     axios.post(`${api}/add-to-cart/${productId}`, null, {
          headers: {
               Authorization: `Bearer ${token}`,
          },
     })
          .then((response) => {
               toast.success(response?.data?.message, {
                    autoClose: 1500,
                    position: 'top-center',
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: false,
               });
               dispatch(getAllCartItemsFunc());
          })
          .catch((e) => {
               console.log({ e });
               if (e?.response?.data?.message === 'Token expired') {
                    navigate('/login');
               }
               else {
                    toast.error(e?.response?.data?.message || e?.message, {
                         autoClose: 1500,
                         position: 'top-center',
                    });
               }
          });
};



export const increaseQuantity = (productId) => async (dispatch) => {
     const token = localStorage.getItem("global_Consultancy_token");
     console.log({ productId });
     axios.put(`${api}/increase-quantity/${productId}`, null, {
          headers: {
               Authorization: `Bearer ${token}`,
          },
     })
          .then((response) => {
               console.log({ response });
               dispatch(getAllCartItemsFunc());
          })
          .catch((e) => {
               console.log({ e });
          });
};


export const decreaseQuantity = (productId) => async (dispatch) => {
     const token = localStorage.getItem("global_Consultancy_token");
     console.log({ productId });
     axios.put(`${api}/decrease-quantity/${productId}`, null, {
          headers: {
               Authorization: `Bearer ${token}`,
          },
     })
          .then((response) => {
               console.log({ response });
               dispatch(getAllCartItemsFunc());
          })
          .catch((e) => {
               console.log({ e });
          });
};


export const deleteCartItem = (productId) => async (dispatch) => {
     const token = localStorage.getItem("global_Consultancy_token");
     axios.delete(`${api}/remove-cart-item/${productId}`, {
          headers: {
               Authorization: `Bearer ${token}`,
          },
     })
          .then((response) => {
               console.log({ response });
               dispatch(getAllCartItemsFunc());
          })
          .catch((e) => {
               console.log({ e });
          });
};

