import ProductTablet from './ProductTable';
import { render, screen } from '@testing-library/react';
import { resolvedComponent } from '@/utils/testHelper';
import * as HttpClient from '@/service/HttpClient';

jest.mock('@/service/HttpClient');

describe('BaseProductTable', () => {
  beforeEach(() => {
    (HttpClient.ApiRequest as jest.Mock).mockClear()
  })

  it('testa', async () => {
    const ProductTabletResolved = await resolvedComponent(ProductTablet, {})
    render(<ProductTabletResolved />)

    const product = await screen.findByText("Produtos")

    expect(product).toBeTruthy()
  });

  it('should call api', async () => {
    const ProductTabletResolved = await resolvedComponent(ProductTablet, {})
    render(<ProductTabletResolved />)

    expect(HttpClient.ApiRequest).toHaveBeenCalledTimes(1)
  });
});
