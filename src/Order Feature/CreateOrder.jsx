//import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../Services/apiRestaurant";
import { useSelector } from "react-redux";
import { clearCart, getCart } from "../Cart Feature/CartSlice";
import EmptyCart from "../Cart Feature/EmptyCart";
import store from "../Store";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const username = useSelector((state) => state.user.username);
  const navigation = useNavigation();
  const formErrors = useActionData();
  const isSubmit = navigation.state === "submitting";
  // const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new">
        <div className="my-4 flex  flex-col gap-2 sm:flex sm:flex-row sm:items-center">
          <label className="sm:basis-32">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={username}
            required
            className="input w-full"
          />
        </div>

        <div className="my-4 flex flex-col gap-2 sm:flex sm:flex-row sm:items-center">
          <label className="sm:basis-32">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="mt-2 text-xs text-red-600">{formErrors.phone}</p>
            )}
          </div>
        </div>

        <div className="my-4 flex w-full flex-col gap-2 sm:flex sm:flex-row sm:items-center">
          <label className="sm:basis-32">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className=" mb-10   flex items-center gap-5">
          <input
            className="h-5 w-5 accent-blue-500"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="text-lg font-semibold">
            Want Us to give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button
            disabled={isSubmit}
            className="text-md mb-4 inline-block h-[40px]  w-[155px] rounded-lg bg-green-300 px-4  font-semibold uppercase tracking-wider hover:bg-green-600 disabled:cursor-not-allowed md:mb-7"
          >
            {isSubmit ? "Placingorder" : "Ordernow"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  console.log(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please Enter Your Valid Number for Us to Contact you";

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  store.dispatch(clearCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
