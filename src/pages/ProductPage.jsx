import React from 'react';

const ProductPage = ({ location, match }) => {
  console.log('match', match)
  console.log('location', location)
  const { id } = match.params
  return (
    <div>
      Product-{id}
    </div>
  );
}

export default ProductPage;
