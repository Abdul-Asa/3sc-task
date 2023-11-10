import axios from "axios";
import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";

export default async function Register() {
  const isAuthenticated = cookies().get("auth-token");
  if (isAuthenticated) {
    redirect("/", RedirectType.replace);
  }

  async function submitLogin(formData: FormData) {
    "use server";
    const endpoint = "https://cube-academy-api.cubeapis.com/api/login";
    try {
      const response = await axios.post(endpoint, formData);
      console.log(response.data);
      cookies().set("auth-token", response.data.data.authToken);
    } catch (error) {
      console.error("There was an error submitting the form", error);
    }
    if (cookies().get("auth-token")) {
      redirect("/", RedirectType.push);
    }
  }

  async function submitRegister(formData: FormData) {
    "use server";
    const endpoint = "https://cube-academy-api.cubeapis.com/api/register";
    try {
      const response = await axios.post(endpoint, formData);
      console.log(response.data);
      cookies().set("auth-token", response.data.data.authToken);
    } catch (error) {
      console.error("There was an error submitting the form", error);
    }
    if (cookies().get("auth-token")) {
      redirect("/", RedirectType.push);
    }
  }

  return (
    <main className="relative flex flex-col items-center justify-center p-10">
      <div className="flex">
        <form
          action={submitRegister}
          className="flex flex-col gap-4 p-8 rounded-xl shadow-lg bg-white dark:bg-zinc-800/50"
        >
          <span className="text-sm font-semibold">Name</span>
          <input
            type="text"
            className="p-2 rounded-lg border text-black border-gray-300 dark:border-neutral-700"
            placeholder="John Doe"
          />
          <span className="text-sm font-semibold">Email</span>
          <input
            type="email"
            className="p-2 rounded-lg border text-black border-gray-300 dark:border-neutral-700"
            placeholder="email@gmail.com"
          />
          <span className="text-sm font-semibold">password</span>
          <input
            type="password"
            className="p-2 rounded-lg border text-black border-gray-300 dark:border-neutral-700"
            placeholder="email@gmail.com"
          />

          <button
            type="submit"
            className="p-2 rounded-lg bg-gray-200 dark:bg-neutral-800"
          >
            Register
          </button>
        </form>
        <form
          action={submitLogin}
          className="flex flex-col gap-4 p-8 rounded-xl shadow-lg bg-white dark:bg-zinc-800/50"
        >
          <span className="text-sm font-semibold">Email</span>
          <input
            type="email"
            name="email"
            className="p-2 rounded-lg border text-black border-gray-300 dark:border-neutral-700"
            placeholder="email@gmail.com"
          />
          <span className="text-sm font-semibold">password</span>
          <input
            name="password"
            type="password"
            className="p-2 rounded-lg border text-black border-gray-300 dark:border-neutral-700"
            placeholder="email@gmail.com"
          />

          <button
            type="submit"
            className="p-2 rounded-lg bg-gray-200 dark:bg-neutral-800"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
