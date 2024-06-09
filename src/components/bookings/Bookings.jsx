// Bookings.jsx
import React from 'react';
import { useGlobalReduceState } from '../utils/GlobalContextReducer';

const Bookings = () => {
  const { state } = useGlobalReduceState();
  const { products } = state;
  console.log(products)

  return (
    <div>
      <h1>Products with Bookings</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} {/* Suponiendo que tienes un campo 'name' */}
            {product.bookings && product.bookings.length > 0 ? (
              <ul>
                {product.bookings.map(booking => (
                  <li key={booking.id}>
                    {booking.fromdate}
                    {booking.todate} {/* Asegúrate de que este campo existe en tus documentos */}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No bookings for this product</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Bookings;