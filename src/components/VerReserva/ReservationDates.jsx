import React from 'react';
import Swal from 'sweetalert2';

const ReservationDates = () => {
    const handleConfirmClick = () => {
        Swal.fire({
            title: '¡Reserva Confirmada!',
            text: 'El producto ha sido reservado correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    };

    return (
        <section className="text-gray-600 body-font mt-10"> {/* Añadir margen superior */}
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img 
                    className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" 
                    alt="Producto" 
                    src="https://dummyimage.com/720x600"
                />
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Nombre del producto</h1>
                    <p className="mb-8 leading-relaxed">Descripcion del producto</p>
                    <p className="mb-8 leading-relaxed">Sucursal de entrega</p>
                    <p className="mb-8 leading-relaxed">Nombre y apellido usuario</p>
                    <p className="mb-8 leading-relaxed">Correo@usuario</p>
                    <p className="mb-8 leading-relaxed">Check in: 2024-06-10</p>
                    <p className="mb-8 leading-relaxed">Check out: 2024-06-15</p>
                    <p className="mb-8 leading-relaxed">Precio: $50</p>
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
