import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  addItem: (item:MenuItem)=> void
}



export const MenuElement = ({item,addItem}:MenuItemProps) => {
  const {name, price} = item

  return (
    <button className="flex justify-between border-2 border-teal-500 rounded-lg w-full p-5 hover:bg-teal-500 hover:text-white transition-colors duration-300 cursor-pointer"
      onClick={()=>addItem(item)}
    >
      <p className="text-lg">{name}</p>
      <p className="text-lg font-bold">$ {price}</p>
    </button>
  )
}


