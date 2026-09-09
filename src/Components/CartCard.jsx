
import burger from "../assets/FeaturedImages/burger.png";
import {useGlobalContextHook} from "../Context/GlobalContext";



const CartCard = ({item}) => {
    const {cart,setCart,removeFromCart,increaseQuantity,decreaseQuantity} = useGlobalContextHook()
  return (
    <div className="border-2 border-[#1A1A1A] p-4 mb-4 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6 rounded-sm">
      <div className="w-[12rem] flex-shrink-0 border border-primary sm:mt-4">
        <img src={item?.image} alt="" className="w-full h-auto" />
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-white font-medium text-[20px]">{item?.name}</p>
          <p className="text-[#D4AF37] font-bold text-[20px]">${item?.price}</p>
        </div>
        <p className=" border border-[#F2CA51] text-[#F2CA51] text-xs py-1 px-2 bg-[#212121] rounded-xl w-fit">
        {item?.cuisine}
      </p>
      <div className="flex items-center justify-between">
        <div className="border border-[#D4AF37]/50 w-fit px-4 py-[6px] flex items-center justify-between gap-4">
        <button onClick={()=>decreaseQuantity(item?.id)} className="cursor-pointer ">-</button>
        <p className="">{item?.quantity}</p>
        <button onClick={()=>increaseQuantity(item?.id)} className="cursor-pointer ">+</button>
        </div>
        <p onClick={() => removeFromCart(item?.id)} className="text-secondary text-md cursor-pointer">remove</p>
      </div>
      </div>
    </div>
  );
};

export default CartCard;