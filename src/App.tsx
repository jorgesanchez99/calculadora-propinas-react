
import { MenuElement } from "./components/MenuElement"
import { OrdersContent } from "./components/OrdersContent"
import { OrderTotal } from "./components/OrderTotal"
import { TipPercentageForm } from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hook/useOrder"


function App() {

  const {order,addItem,removeItem,tip,setTip,placeHorder} = useOrder()



  return (
    <>
      <header className="bg-teal-500 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Consumo y Propinas</h1>
      </header>

      <main className="container mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>

          <div className="space-y-3 mt-10">

            {menuItems.map(item => (
              <MenuElement
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}

          </div> 
        </div>



        <div className="border border-dashed border-slate-300 rounded-lg space-10 p-5">
          {order.length > 0 ? (
            <>
              <OrdersContent
                order={order}
                removeItem={removeItem}
              />

              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />

              <OrderTotal
                order={order}
                tip={tip}
                placeHorder={placeHorder}
              />
            </>
          ) : (
            <>
              <h2 className="text-4xl font-black">Consumo</h2>
              <p className="text-center text-2xl mt-10">
                No hay elementos en el pedido
              </p>
            </>
          )}
        </div>

      </main>
    </>
  )
}

export default App
