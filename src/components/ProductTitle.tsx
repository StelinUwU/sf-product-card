import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  const titleToShow = title || product.title;
  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {titleToShow}
    </span>
  );
};
