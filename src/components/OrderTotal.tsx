import { useMemo } from "react";
import { fomatCurrency } from "../helpers";
import { OrderItem } from "../types";

type Props = {
  order: OrderItem[];
  tip: number;
  placeHorder: () => void;
};

export const OrderTotal = ({ order, tip,placeHorder }: Props) => {
  const subTotal = useMemo(
    () => order.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [order]
  );

  const tipAmount = useMemo(() => subTotal * tip, [subTotal, tip]);

  const total = useMemo(() => subTotal + tipAmount, [subTotal, tipAmount]);

  return (
    <div className="space-y-5 mt-10">
      <h2 className="font-black text-2xl">Totales y Propinas</h2>

      {order.length === 0 ? (
        <p className="text-center text-gray-500">No hay elementos en el pedido</p>
      ) : (
        <div className="space-y-2 text-lg">
          <p>
            SubTotal: <span className="font-black">{fomatCurrency(subTotal)}</span>
          </p>
          <p>
            Propina: <span className="font-black">{fomatCurrency(tipAmount)}</span>
          </p>
          <p>
            Total a Pagar: <span className="font-black">{fomatCurrency(total)}</span>
          </p>
        </div>
      )}



      {total > 0 && (
        <button
        className="bg-teal-500 w-full py-3 text-white font-bold rounded-lg hover:bg-teal-600 transition-colors duration-300 cursor-pointer  uppercase"
        type="button"
        onClick={() => placeHorder()}
      >
        Guardar Pedido
      </button>

      )}
      
    </div>
  );
};
