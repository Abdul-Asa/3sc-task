import axios from "axios";
import { cookies } from "next/headers";

export default async function Home() {
  const auth = cookies().get("auth-token")?.value ?? "None";
  const nominees = await getNominees();

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
  }

  async function getNominees() {
    const endpoint = "https://cube-academy-api.cubeapis.com/api/nominee";

    const config = {
      headers: { Authorization: `Bearer ${auth}` },
    };
    try {
      const response = await axios.get(endpoint, config);
      console.log(response.data);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Auth token is&nbsp;
          <code className="font-mono font-bold">{auth}</code>
        </p>
      </div>

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
      <div className="flex flex-col gap-4 p-8 rounded-xl shadow-lg bg-white dark:bg-zinc-800/50">
        {nominees?.map(
          (participant: {
            last_name: string;
            nominee_id: string;
            first_name: string;
          }) => (
            <li key={participant.nominee_id}>
              {participant.first_name} {participant.last_name}
            </li>
          )
        )}
      </div>
    </main>
  );
}
