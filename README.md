# SF-Product-Card

This is a deployment test package

## Example

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'do-product-card'
```

```
<ProductCard
    product={product}
    initialValues={{
    quantity: 4,
    maxCount: 10,
    }}
>
    {({ reset, isMaxCountReached, quantity, increaseBy }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )}
</ProductCard>

```
