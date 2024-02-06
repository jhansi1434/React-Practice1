
import React,{useState} from 'react';
import 'tailwindcss/tailwind.css';


const Range = () => {
   
        const [sliderValue, setSliderValue] = useState(0); // Set an initial value for the slider
    
        const handleSliderChange = (event) => {
            setSliderValue(event.target.value);
        };
    

        


    return (
        <div class="w-1/2">
            <label for="range" class="font-bold text-gray-600">
                <input type="text" value={sliderValue}/>
            </label>
            <input type="range"
                name="range"
                class="w-full h-2 bg-blue-100 appearance-none"
                onChange={handleSliderChange}
                value={sliderValue}
                min="0"
                max="100"

            />
            {/* <span className="w-1/4 text-center text-gray-700">{sliderValue}</span> */}

        </div>

/* <>
<div className="box-border h-11 w-48 p-4 border-4 ">{sliderValue}
<div className="w-[374px] h-8 justify-start items-start inline-flex">
   
<div className="w-[35px] px-3 pt-3 pb-4 bg-emerald-600 rounded-tl-md rounded-bl-md border-b-4 border-black border-opacity-40 justify-center items-center gap-2 flex"
 onChange={() => handleSliderChange(0)}>
<div className="text-white text-base font-bold font-['Montserrat']">0</div>
</div>
<div className="grow shrink basis-0 h-8 justify-start items-start flex">
<div className="w-px h-8 px-3 pt-3 pb-4 bg-emerald-600 border-b-4 border-black border-opacity-40"  />
<div className="w-10 px-2 pt-3 pb-4 bg-emerald-500 border-b-4 border-black border-opacity-40 justify-center items-center gap-2 flex"
 onChange={() => handleSliderChange(50)}   >
<div className="w-6 h-6 relative" />
</div>
<div className="grow shrink basis-0 h-8 px-3 pt-3 pb-4 bg-gray-500 border-b-4 border-black border-opacity-40" />
</div>
<div className="w-[52px] px-3 pt-3 pb-4 bg-gray-500 rounded-tr-md rounded-br-md border-b-4 border-black border-opacity-40 justify-center items-center gap-2 flex"
onChange={() => handleSliderChange(100)}>
<div className="text-white text-base font-bold font-['Montserrat']">100</div>
</div>
</div>

</div>
</> */

    )
}

export default Range
