
import { MenuElement } from "./components/MenuElement"
import { OrdersContent } from "./components/OrdersContent"
import { menuItems } from "./data/db"
import useOrder from "./hook/useOrder"


function App() {

  const {order,addItem,removeItem} = useOrder()



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
          <OrdersContent
           order={order}
            removeItem={removeItem}
          />
        </div>

      </main>
    </>
  )
}

export default App
