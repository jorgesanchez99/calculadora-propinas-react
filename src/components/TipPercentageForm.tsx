import { Dispatch, SetStateAction } from "react";

type Props = {
    setTip: Dispatch<SetStateAction<number>>
    tip : number
};


export const TipPercentageForm = ({setTip,tip}:Props) => {
    const tips = [
      { id: 1, value: 0.1,label : '10%'},
      { id: 2, value: 0.15,label : '15%'},
      { id: 3, value: 0.2,label : '20%'},
      { id: 4, value: 0.5,label : '50%'},
    ];


  
    return (
      <div className="mt-10">
        <h3 className="font-black text-3xl">Propina</h3>
        <p className="text-lg mt-2 mb-5 text-gray-600">Elige un porcentaje:</p>
  
        <form className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {tips.map((tipOption) => (
            <div key={tipOption.id} className="flex items-center gap-2">
              <input
                type="radio"
                name="tip"
                id={`tip${tipOption.id}`}
                value={tipOption.value}
                className="accent-green-500 w-5 h-5 cursor-pointer"
                onChange={(e) => setTip(Number(e.target.value))}
                checked={tipOption.value === tip}
              />
              <label
                htmlFor={`tip${tipOption.id}`}
                className="text-base font-medium cursor-pointer"
              >
                {tipOption.label}
              </label>
            </div>
          ))}
        </form>
      </div>
    );
  };
  