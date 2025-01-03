'use client';
import { createContext, useState, ReactNode } from "react";

export interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: { 
    asset: { _ref: string; _type: string };
    alt?: string;
  }[]; 
  quantity?: number; 
}

export interface CartContextType {
  showCart: boolean;
  setshowCart: React.Dispatch<React.SetStateAction<boolean>>;
  qty: number;
  incQty: () => void;
  decQty: () => void;
  cartItems: Product[];
  addProduct: (data: Product, quantity: number) => void;
  totalQuantity: number;
  totalPrice: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [showCart, setshowCart] = useState(false);
  const [qty, setQty] = useState(1);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => (prevQty - 1 < 1 ? 1 : prevQty - 1));
  };

  const addProduct = (data: Product, quantity: number) => {
    const checkProductInCart = cartItems.find((item) => item._id === data._id);

    setTotalQuantity((prev) => prev + quantity);
    setTotalPrice((prevTotalPrice) => prevTotalPrice + data.price * quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === data._id) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity! + quantity, 
          };
        } else {
          return cartProduct;
        }
      });

      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...data, quantity }]);
    }
  };

  return (
    <CartContext.Provider value={{ showCart, setshowCart, qty, incQty, decQty, cartItems, addProduct, totalQuantity, totalPrice }}>
      <div>{children}</div>
    </CartContext.Provider>
  );
};


