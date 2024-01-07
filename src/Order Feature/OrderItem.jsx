import { formatCurrency } from "../Utilities/helpers";
function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  return (
    <div>
      <li className="py-1">
        <div className="align-items flex justify-between">
          <p>
            <span>{quantity}&times;</span> {name}
          </p>
          <p className="font-bold">{formatCurrency(totalPrice)}</p>
        </div>
      </li>
      
    </div>
  );
}

export default OrderItem;
