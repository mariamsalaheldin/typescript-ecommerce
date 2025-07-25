import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="d-flex flex-column">
        <div className="flex-grow-1">
          <Stack gap={3}>
            {cartItems.map(item => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </div>
        <div className="mt-auto text-end fw-bold fs-5">
          Total{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find(i => i.id === cartItem.id)
              return total + (item?.price || 0) * cartItem.quantity
            }, 0)
          )}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
