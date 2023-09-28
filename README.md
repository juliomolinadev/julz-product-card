# julz-product-card

This is a test suite for deployment in NPM

### Julz Molina

## Example

```
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "julz-product-card";

```

```
const product = {
  id: '1',
  title: 'Product title',
  // image: 'https://picsum.photos/200',
};

<ProductCard product={product} initialValues={{ count: 4, maxCount: 10 }}>
  {({ reset, increaseBy, isMaxCountReached, count }) => (
  	<>
  		<ProductImage />
  		<ProductTitle />
  		<ProductButtons />
  	</>
  )}
</ProductCard>

```
