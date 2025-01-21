import { data, Order } from "../data/data";
import { MdOutlineShoppingBag } from "react-icons/md";

const Orders: React.FC = () => {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1 className="text-xl font-bold mb-4">Orders</h1>
      <ul>
        {data.map((order: Order) => (
          <li
            key={order.id}
            className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-4 flex items-center justify-between cursor-pointer"
          >
            {/* Icon */}
            <div className="flex items-center">
              <div className="bg-grey-200 rounded-lg p-3">
                <MdOutlineShoppingBag className="text-grey-800" />
              </div>
              {/* Order Details */}
              <div className="pl-4">
                <p className="text-gray-800 font-bold">
                  ${order.total.toFixed(2)}
                </p>
                <p className="text-gray-400 text-sm">
                  {order.name.first} {order.name.last}
                </p>
              </div>
            </div>
            {/* Date */}
            <p className="text-sm text-gray-500">{order.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;
