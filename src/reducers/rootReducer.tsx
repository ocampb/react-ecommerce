import { Reducer } from "redux";

type State = {
  name: string;
  items: [];
};

type ProductDetail = {
  description: string;
  price: string;
};

type Action = {
  type: string;
  payload?: any;
};

export const initialProducts = [
  {
    description: "Squeaking Toy",
    price: "$2",
  },
  {
    description: "Stuffed Toy",
    price: "$3",
  },
  {
    description: "Frisbee",
    price: "$5",
  },
  {
    description: "Chew Toy",
    price: "$7",
  },
  {
    description: "Tennis Ball",
    price: "$1",
  },
  {
    description: "Snuffle Mat",
    price: "$10",
  },
];

const initialState: State = {
  name: "Olivia",
  items: [],
};

const rootReducer: Reducer = (state = initialState, action: Action) => {
  switch (action?.type) {
    case "ADD_PRODUCT":
      const newItems = [...state.items, action.payload];
      return { ...state, items: newItems };
    case "DECREMENT":
      return { ...state, items: state.items };
    default:
      return state;
  }
};

export default rootReducer;
