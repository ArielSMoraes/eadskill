import {render, screen} from '@testing-library/react'
import BaseProductTable from './BaseProductTable';
import { mockProducts } from './mock';

describe('BaseProductTable', () => {
  it('shoud render all items on the table', () => {
    render(<BaseProductTable products={mockProducts}/>)

    const product1 = screen.queryByText(mockProducts[0].title)
    const product2 = screen.queryByText(mockProducts[1].title)
    const product3 = screen.queryByText(mockProducts[2].title)

    expect(product1).toBeInTheDocument()
    expect(product2).toBeInTheDocument()
    expect(product3).toBeInTheDocument()
  });

  xit('should empty state form a empty lit ', () => {
    render(<BaseProductTable products={[]}/>)

    const emptyState = screen.queryByText("Nenhum produto disponivel")

    expect(emptyState).toBeInTheDocument()
  });
});
