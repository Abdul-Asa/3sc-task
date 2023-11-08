export default async function Home() {
  async function submitLogin(formData: FormData) {
    "use server";
    console.log(formData);
  }
  async function submitRegister(formData: FormData) {
    "use server";
    console.log(formData);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Auth token is&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
      </div>

      <div className="flex">
        <form className="flex flex-col gap-4 p-8 rounded-xl shadow-lg bg-white dark:bg-zinc-800/50">
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
        <form className="flex flex-col gap-4 p-8 rounded-xl shadow-lg bg-white dark:bg-zinc-800/50">
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
            Login
          </button>
        </form>
      </div>
      {/* <div className="flex flex-col gap-4 p-8 rounded-xl shadow-lg bg-white dark:bg-zinc-800/50">
        list of nominees
      </div> */}
    </main>
  );
}
