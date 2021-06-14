import { LIKE_PET, GET_PETS, GET_PET } from "../actions/types";

export const initialState = {
  pets: [],
  petInfo: null,
  loading: true,
  like: false,
  error: {},
};

export const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PETS:
      return {
        ...state,
        pets: action.payload,
        loading: false,
      };
    case GET_PET:
      return {
        ...state,
        petInfo: action.payload,
        loading: false,
      };
    case LIKE_PET:
      return {
        ...state,
        pets: state.pets.map((pet) =>
          pet.id === action.payload ? { ...pet, like: !state.like } : pet
        ),
      };
    default:
      return state;
  }
};
