export interface Product {
  id: number;
  name: string;
  price: number;
  count: number;
  image: string;
  category: string;
}

export interface UserDetail {
  id: number;
  name: string;
  password: string;
  contact: number;
  email: string;
  dob: string;
  gender: string;
  location: string;
  isAdmin: boolean;
}

export interface ItemActionType {
  type: string;
  payload: Product;
  selectedCategory?: string;
  searchValue?: string;
}

export interface State {
  productItems: Product[];
  cartItems: Product[];
  category: string;
  search: string;
}

export interface CartContextType {
  state: State;
  productState: { [id: number]: boolean };
  dispatch: any;
  setProductState: (
    update: (prevStates: { [id: number]: boolean }) => { [id: number]: boolean }
  ) => void;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  isAdmin: boolean;
  userId: number;
  setUserId: (userId: number) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setIsAdmin: (isAdmin: boolean) => void;
}
