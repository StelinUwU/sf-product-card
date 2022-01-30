import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  img?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  const image = img || product.img || noImage;
  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={image}
      style={style}
      alt="Product img"
    />
  );
};
