import { useProduct } from '../hooks/useProduct';
import React, { createContext } from 'react';
import {
  ProductContextProps,
  Product,
  onChangeArgs,
  InitialValues,
  ProductCardHandlers,
} from '../interfaces/interfaces';
import styles from '../styles/styles.module.css';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  /*   children?: ReactElement | ReactElement[]; */
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  onChange?: (args: onChangeArgs) => void;
  product: Product;
  value?: number;
  style?: React.CSSProperties;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          quantity: counter,
          isMaxCountReached,
          MaxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
