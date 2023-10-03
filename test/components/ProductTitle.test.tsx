import React from 'react';
import render from 'react-test-renderer';

import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('<ProductTitle /> tests', () => {
  test('should show component with custom title', () => {
    const wrapper = render.create(
      <ProductTitle title="Custom product" className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should show component with product title', () => {
    const wrapper = render.create(
      <ProductCard product={product1}>
        {() => <ProductTitle className="custom-class" />}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
