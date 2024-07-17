import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthLoginProps } from "@/utils/Type";
import { login } from "@/services/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const [error, setError] = useState("");
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthLoginProps>({ mode: "onChange" });

  const onSubmit: SubmitHandler<AuthLoginProps> = (data) => {
    login(data).then((res: any) => {
      // console.log("Response from login:", res);
      if (res.status === 201) {
        if (typeof window !== "undefined") {
          console.log(res.data);

          window.localStorage.setItem("sub", res.data.token);
          // console.log("User data:", res.data);
          const role = res.data.role;
          toast.success("Connexion réussie");
          console.log(role);
          if (role !== 2) {
            toast.success("Vous ètes Utilisateur");
            push("/ecommerce");
          } else {
            toast.success("Vous ètes Administrateur");
            push("/admin");
          }
        }
      }
    });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Connexion
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Adresse email
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("email", {
                  required: "Ce champs est obligatoire",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Merci d'écrir une adresse mail valide",
                  },
                })}
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
                Mot de passe
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register("password", {
                  required: "Ce champs est obligatoire",
                  // pattern: {
                  //   value:
                  //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  //   message:
                  //     "Merci d'écrire 8 caractères mini dont une lettre majuscule, une minuscule, un chiffre ou un caractère spécial",
                  // },
                })}
              />
              {errors?.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
          </div>
          <div>
            <p className="text-red-600 text-italic">{error}</p>
            <input
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              value="Connexion"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
