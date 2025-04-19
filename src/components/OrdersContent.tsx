import { fomatCurrency } from "../helpers";
import { OrderItem } from "../types";

type Props = {
  order: OrderItem[];
  removeItem: (id: number) => void;
};

export const OrdersContent = ({ order,removeItem }: Props) => {
  return (
    <div>
      <h2 className="text-4xl font-black">Consumo</h2>

      {order.length === 0 ? (
        <p className="text-center text-2xl mt-10">
          No hay elementos en el pedido
        </p>
      ) : (
        <div className="space-y-5 mt-10">
          {order.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-t last-of-type:border-b border-slate-300 py-5"
            >
              <div className="flex flex-col">
                <p className="text-lg font-medium">
                  {item.name} - {fomatCurrency(item.price)}
                </p>
                <p className="font-black text-sm text-gray-700">
                  Cantidad: {item.quantity} — {fomatCurrency(item.quantity * item.price)}
                </p>
              </div>

              <button
               className="w-8 h-8 rounded-full bg-red-500 text-white font-bold hover:bg-red-600 transition-colors cursor-pointer"
               onClick={() => removeItem(item.id)}
               >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
