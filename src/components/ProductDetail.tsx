"use client";
import { actions, reducer } from "@/reducer/getOnProduct";
import { getOneProduct } from "@/services/getProducts";
import { useStoreCart } from "@/stores/storeAll";
import { actionType, stateType } from "@/utils/Type";
import { useRouter } from "next/navigation";
import { useEffect, useReducer } from "react";

const ProductDetail = ({ id }: { id: number }) => {
  const router = useRouter();
  const { addItem } = useStoreCart((state) => state);
  const [state, dispatch] = useReducer<React.Reducer<stateType, actionType>>(
    reducer,
    {
      quantity: 1,
      product: null,
    }
  );

  useEffect(() => {
    const onproduct = async () => {
      const response = await getOneProduct(id);
      dispatch({ type: actions.FETCH_SUCCESS, payload: response.data });
    };
    onproduct();
  }, []);

  if (state.product) {
    return (
      <div className="w-11/12 mx-auto px-4 sm:w-4/5 lg:w-3/4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto">
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <img
                src={state.product.image}
                alt={state.product.title}
                className="object-cover w-full h-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-full max-w-xl">
              <p className="text-lg font-medium leading-8 text-indigo-600 mb-4">
                {state.product.categoryId}
              </p>
              <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-4 capitalize">
                {state.product.title}
              </h2>
              <div className="flex items-center mb-6">
                <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900">
                  ${state.product.price}
                </h6>
              </div>
              <p className="text-gray-500 text-base font-normal mb-6">
                Description: {state.product.description}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <button
                  className="py-2 px-4 border border-gray-400 rounded-l-lg bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm"
                  title="Decrease quantity"
                  onClick={() => {
                    dispatch({
                      type: actions.INC_QUANTITY,
                      payload: "decrement",
                    });
                  }}
                >
                  <svg
                    className="stroke-gray-900"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 11H5.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  className="w-16 text-center border-y border-gray-400 bg-transparent text-lg font-semibold"
                  value={state.quantity}
                  readOnly
                />
                <button
                  className="py-2 px-4 border border-gray-400 rounded-r-lg bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-sm"
                  title="Increase quantity"
                  onClick={() => {
                    dispatch({
                      type: actions.INC_QUANTITY,
                      payload: "increment",
                    });
                  }}
                >
                  <svg
                    className="stroke-gray-900"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <button
                className="w-3/4 py-3 px-5 rounded-full bg-indigo-600 text-white font-semibold text-lg flex items-center justify-center gap-2 transition-all duration-500 hover:bg-indigo-700"
                onClick={() => {
                  addItem({
                    product: state.product,
                    quantity: state.quantity,
                  });
                  router.push("/ecommerce");
                }}
              >
                <svg
                  className="stroke-white"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ProductDetail;
