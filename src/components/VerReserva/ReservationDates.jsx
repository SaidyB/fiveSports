import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { ContextGlobal } from '../utils/GlobalContextReducer';

const ReservationDates = () => {
  const { state } = useContext(ContextGlobal);
  const { selectedProduct, user, checkIn, checkOut } = state;

  if (!selectedProduct) {
    return <div>No se ha seleccionado ningún producto.</div>;
  }

  if (!user) {
    return <div>No se ha encontrado información del usuario.</div>;
  }

  const handleConfirmClick = () => {
    Swal.fire({
      title: '¡Reserva Confirmada!',
      text: 'El producto ha sido reservado correctamente.',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  };

  return (
    <section className="text-gray-600 body-font mt-10">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img 
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" 
          alt={selectedProduct.name} 
          src={selectedProduct.img}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {selectedProduct.name}
          </h1>
          <p className="mb-8 leading-relaxed">{selectedProduct.description}</p>
          <p className="mb-8 leading-relaxed">Sucursal de entrega: Bogota D.C.</p>
          <p className="mb-8 leading-relaxed">Nombre: {user.displayName}</p>
          <p className="mb-8 leading-relaxed">Correo: {user.email}</p>
          <p className="mb-8 leading-relaxed">Check in: {checkIn}</p>
          <p className="mb-8 leading-relaxed">Check out: {checkOut}</p>
          <p className="mb-8 leading-relaxed">Precio: {selectedProduct.price}</p>
          <div className="flex justify-center">
            <button 
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={handleConfirmClick}
            >
              Confirmar Reserva
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationDates;
