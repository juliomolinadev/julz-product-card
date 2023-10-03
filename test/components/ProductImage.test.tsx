import React from 'react';
import render from 'react-test-renderer';

import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('<ProductImage /> tests', () => {
  // test('should show component with custom image', () => {
  //   const wrapper = render.create(<ProductImage img={'https://hello.jpg'} />);

  //   expect(wrapper.toJSON()).toMatchSnapshot();
  // });

  test('should show component with product image', () => {
    const wrapper = render.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
