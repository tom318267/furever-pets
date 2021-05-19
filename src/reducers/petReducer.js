import { LIKE_PET, GET_PETS, GET_PET } from "../actions/types";
// import silvia from "../assets/silvia.png";
// import buddy from "../assets/buddy.png";
// import charlie from "../assets/charlie.png";
// import chloe from "../assets/chloe.png";
// import coda from "../assets/coda.png";
// import bella from "../assets/bella.png";

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
