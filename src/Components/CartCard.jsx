
import burger from "../assets/FeaturedImages/burger.png";
import {useGlobalContextHook} from "../Context/GlobalContext";



const CartCard = ({item}) => {
    const {cart,setCart,removeFromCart,increaseQuantity,decreaseQuantity} = useGlobalContextHook()
  return (
    <div className="relative border transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.10)] w-full border-[#1A1A1A] p-4 mb-4 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-3 rounded-sm">
      <div className="w-[12rem] sm:w-[10rem] flex-shrink-0 border border-primary sm:mt-4">
        <img src={item?.image} alt="" className="w-full h-auto" />
      </div>

      <div className="flex-1 w-full flex flex-col gap-4">
        <p className="absolute top-5 sm:static sm:ml-auto right-2 border border-[#F2CA51] text-[#F2CA51] text-xs py-1 px-3 bg-[#212121] rounded-xl w-fit">
        {item?.cuisine}
      </p>
        <div className="flex items-center justify-between">
          <p className="text-white/90 font-light text-[22px]">{item?.name}</p>
          <p className="text-[#D4AF37] font-light text-[20px]">${item?.price}</p>
        </div>
      <div className="flex items-center justify-between">
        <div className="border border-[#D4AF37]/50 w-fit px-4 py-[6px] flex items-center justify-between gap-4">
        <button onClick={()=>decreaseQuantity(item?.id)} className="cursor-pointer ">-</button>
        <p className="">{item?.quantity}</p>
        <button onClick={()=>increaseQuantity(item?.id)} className="cursor-pointer ">+</button>
        </div>
        <p onClick={() => removeFromCart(item?.id)} className="text-secondary text-md cursor-pointer hover:text-primary/60">remove</p>
      </div>
      </div>
    </div>
  );
};

export default CartCard;