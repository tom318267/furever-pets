import { GET_PETS, LIKE_PET, GET_PET } from "../actions/types";
import axios from "axios";

// Get Pets
export const getPets = () => async (dispatch) => {
  try {
    const res = await axios.get("https://furever-pets-api.herokuapp.com/pets");
    const data = await res.data;
    console.log(res);

    dispatch({
      type: GET_PETS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
  }
};

// Add like
export const addLike = (petId) => async (dispatch) => {
  try {
    dispatch({
      type: LIKE_PET,
      payload: petId,
    });
  } catch (err) {
    console.error(err);
  }
};
