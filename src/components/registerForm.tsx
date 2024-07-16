import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthRegisterProps } from "@/utils/Type";
import { schemaRegister } from "@/validations/validationForm";
import { addRegister } from "@/services/auth";
import { yupResolver } from "@hookform/resolvers/yup";

export const RegisterForm = () => {
  const [error, setError] = useState("");
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthRegisterProps>({
    mode: "onChange",
    resolver: yupResolver(schemaRegister),
    defaultValues: { firstName: "steve" },
  });

  const onSubmit: SubmitHandler<AuthRegisterProps> = (data) => {
    if (data.password === data.confirmPassword) {
      addRegister(data).then((res) => {
        toast.success("Inscription réussie");
        push("/login");
      });
    } else {
      toast.error("Le mot de passe n'est pas indentique !!");
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Créer votre compte
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nom
            </label>
            <div className="mt-2">
              <input
                id="firstName"
                type="text"
                autoComplete="current-firstName"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("firstName")}
              />
              {errors?.firstName && (
                <p className="text-red-500">{errors.firstName.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Prénom
            </label>
            <div className="mt-2">
              <input
                id="lastName"
                type="text"
                autoComplete="current-lastName"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("lastName")}
              />
              {errors?.lastName && (
                <p className="text-red-500">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="pseudo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Pseudo
            </label>
            <div className="mt-2">
              <input
                id="pseudo"
                type="text"
                autoComplete="current-pseudo"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("pseudo")}
              />
              {errors?.pseudo && (
                <p className="text-red-500">{errors.pseudo.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Address
            </label>
            <div className="mt-2">
              <input
                id="address"
                type="text"
                autoComplete="current-city"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("address")}
              />
              {errors?.address && (
                <p className="text-red-500">{errors.address.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Téléphone
            </label>
            <div className="mt-2">
              <input
                id="phone"
                type="text"
                autoComplete="current-city"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("phone")}
              />
              {errors?.phone && (
                <p className="text-red-500">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("email")}
              />
              {errors?.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("password")}
              />
              {errors?.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="confirmPassword"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("confirmPassword")}
              />
              {errors?.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>

          <div>
            <p className="text-red-600 text-italic">{error}</p>
            <input
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              value="Singn up"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

{
  /* <header
      className=" bg-cover border-t-2 border-blue-600 h-full"
      // style={{
      //   backgroundImage:
      //     "url('https://ik.imagekit.io/q5edmtudmz/peter-lloyd-680526-unsplash_TYZn4kayG.jpg')",
      // }}
    >
      <div className="content px-8 py-2">
        <nav className="flex items-center justify-between">
          <h2 className="text-gray-200 font-bold text-2xl ">Home</h2>
          <div className="auth flex items-center">
            <button className="bg-transparent text-gray-200  p-2 rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700">
              Sign in
            </button>
            <button className="bg-gray-900 text-gray-200  py-2 px-3 rounded  hover:bg-gray-800 hover:text-gray-100">
              Sign up for free
            </button>
          </div>
        </nav>
        <div className="body mt-20 mx-8">
          <div className="md:flex items-center justify-between">
            <div
              className="w-full md:w-1/2 mr-auto"
              // style={{ textShadow: "0 20px 50px hsla(0,0%,0%,8)" }}
            >
              <h1 className="text-4xl font-bold text-white tracking-wide">
                Brand
              </h1>
              <h2 className=" text-2xl font-bold text-white tracking-wide">
                Welcome <span className="text-gray-800"> Aboard</span>
              </h2>
              <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <span className="text-white">
                Create New Account?
                <a href="#" className="text-gray-900 text-lg ml-2 font-bold">
                  Sign Up
                </a>
              </span>
            </div>
            <div className="w-full md:max-w-md mt-6">
              <div className="card bg-white shadow-md rounded-lg px-4 py-4 mb-6 ">
                <form action="#">
                  <div className="flex items-center justify-center">
                    <h2 className="text-2xl font-bold tracking-wide">
                      Welcome back
                    </h2>
                  </div>
                  <h2 className="text-xl text-center font-semibold text-gray-800 mb-2">
                    Sign In
                  </h2>
                  <input
                    type="text"
                    className="rounded px-4 w-full py-1 bg-gray-200  border border-gray-400 mb-6 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none"
                    placeholder="Email Address"
                  />
                  <input
                    type="password"
                    className="rounded px-4 w-full py-1 bg-gray-200  border border-gray-400 mb-4 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none"
                    placeholder="Password"
                  />
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-gray-600">
                      Forget Password?
                    </a>
                    <button className="bg-gray-800 text-gray-200  px-2 py-1 rounded">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> */
}
