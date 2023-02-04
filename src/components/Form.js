import React, { useReducer } from "react";

const Form = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    userName: "",
    website: "",
    bio: "",
    quantity: 0,
    terms: false,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      case "TOGGLE":
        return {
          ...state,
          terms: !state.terms,
        };
      case "INCREASE":
        return {
          ...state,
          quantity: state.quantity + 1,
        };
      case "DECREASE":
        return {
          ...state,
          quantity: state.quantity - 1,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div className="bg-gray-300">
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
        <form
          novalidate=""
          action=""
          onSubmit={onSubmit}
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Personal Inormation</p>
              <p className="text-xs">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci fuga autem eum!
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="firstname" className="text-sm">
                  First name
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="firstName"
                  onChange={(e) =>
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                  placeholder="First name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="lastname" className="text-sm">
                  Last name
                </label>
                <input
                  id="lastname"
                  type="text"
                  name="lastName"
                  onChange={(e) => {
                    dispatch({
                      type: "INPUT",
                      payload: { name: e.target.name, value: e.target.value },
                    });
                  }}
                  placeholder="Last name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={(e) => {
                    dispatch({
                      type: "INPUT",
                      payload: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    });
                  }}
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="address" className="text-sm">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  onChange={(e) => {
                    dispatch({
                      type: "INPUT",
                      payload: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    });
                  }}
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="city" className="text-sm">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  onChange={(e) => {
                    dispatch({
                      type: "INPUT",
                      payload: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    });
                  }}
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="state" className="text-sm">
                  State / Province
                </label>
                <input
                  id="state"
                  type="text"
                  name="state"
                  onChange={(e) => {
                    dispatch({
                      type: "INPUT",
                      payload: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    });
                  }}
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="zip" className="text-sm">
                  ZIP / Postal
                </label>
                <input
                  id="zip"
                  type="text"
                  onChange={(e) => {
                    dispatch({
                      type: "INPUT",
                      payload: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    });
                  }}
                  name="zip"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Profile</p>
              <p className="text-xs">Adipisci fuga autem eum!</p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="username" className="text-sm">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="username"
                  name="userName"
                  onChange={(e) => {
                    dispatch({
                      type: "INPUT",
                      payload: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    });
                  }}
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="website" className="text-sm">
                  Website
                </label>
                <input
                  id="website"
                  type="text"
                  name="website"
                  onChange={(e) => {
                    dispatch({
                      type: "INPUT",
                      payload: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    });
                  }}
                  placeholder="https://"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label for="bio" className="text-sm">
                  Bio
                </label>
                <textarea
                  id="bio"
                  name="bio"
                  onChange={(e) => {
                    dispatch({
                      type: "INPUT",
                      payload: {
                        name: e.target.name,
                        value: e.target.value,
                      },
                    });
                  }}
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                ></textarea>
              </div>
              <div className="col-span-full">
                <label for="bio" className="text-sm">
                  Photo
                </label>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://source.unsplash.com/30x30/?random"
                    alt=""
                    className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 border rounded-md dark:border-gray-100"
                  >
                    Change
                  </button>
                  <div>
                    <a onClick={(e) => {
                      dispatch({
                        type: "INCREASE"
                      })
                    }}>Increase</a>
                    <input type="text" id="quantity" value={state.quantity} />
                    <a
                      onClick={(e) => {
                        dispatch({
                          type: "DECREASE"
                        })
                      }}
                    >Decrease</a>
                  </div>
                </div>
              </div>
              <label htmlFor="terms">Terms & condition.</label>
              <input
                type="checkbox"
                name="terms"
                id="terms"
                onClick={(e) => {
                  dispatch({
                    type: "TOGGLE",
                  });
                }}
              />
              <br />
              <input
                style={{ background: "#fff" }}
                disabled={!state.terms}
                type="submit"
                value="Submit"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default Form;
