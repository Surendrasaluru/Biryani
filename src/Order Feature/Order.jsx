// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../Services/apiRestaurant";
import OrderItem from "./OrderItem";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../Utilities/helpers";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="space-y-6 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-bold">Order# {id} status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="text-md w-[60px] rounded-full bg-red-500 px-4 py-1 font-semibold text-yellow-50">
              Priority
            </span>
          )}
          <span className="text-md  w-[60px] rounded-full bg-blue-500 px-4 py-1 font-semibold text-yellow-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center  justify-between gap-2 bg-slate-400 px-6 py-3">
        <p className="text-lg font-bold uppercase">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide space-y-3 divide-y-2 bg-[#fecaca] px-6 py-3">
        {cart.map((item) => (
          <OrderItem item={item} key={order.id} />
        ))}
      </ul>

      <div className="space-y-3  bg-blue-300 px-6 py-3">
        <p className="text-md font-medium">
          Pizza's Cost: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-md font-medium">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}

        <p className="text-lg font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
