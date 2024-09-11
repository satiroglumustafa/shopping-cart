import { BsBasket2 } from "react-icons/bs"
import "./CartIcon.css"

const CartIcon = () => {
    return (
        <>
            <div className="basket-area position-relative">
                <BsBasket2 />
                <span className="text-white bg-danger sepet-count py-1 px-1 rounded">0</span>
            </div>
        </>
    )
}

export default CartIcon