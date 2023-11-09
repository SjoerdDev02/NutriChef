import styles from "./CartFooter.module.css";
import { CartItemType } from "../../../types/CartType";
import { useMemo } from "react";
import CTAButton from "../../CtaButton/CtaButton";

const CartFooter = ({ cart }: { cart: CartItemType[] }) => {
  const totalAmount = useMemo(
    () => cart.reduce((total, cartItem) => total + cartItem.amount, 0),
    [cart]
  );

  return (
    <div className={styles.cartFooter}>
      <div>
        <p>Total</p>
        <h4>{`€${totalAmount},00`}</h4>
      </div>
      {cart.length !== 0 && (
        <CTAButton page="/checkout">Continue Order</CTAButton>
      )}
    </div>
  );
};

export default CartFooter;
