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

export interface CartContextType {
  cartItems: Product[];
  productItems: Product[];
  selectedCategory: string;
  searchValue: string;
  productState: { [id: number]: boolean };
  setProductState: (
    update: (prevStates: { [id: number]: boolean }) => { [id: number]: boolean }
  ) => void;
  setSearchValue: (value: string) => void;
  setSelectedCategory: (category: string) => void;
  setProductItems: (productItem: Product[]) => void;
  addCartItem: (product: Product) => void;
  removeCartItem: (cartItem: Product) => void;
  setCartItems: (cartItems: Product[]) => void;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  isAdmin: boolean;
  userId: number;
  setUserId: (userId: number) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setIsAdmin: (isAdmin: boolean) => void;
}
