import { submitRegister, submitLogin } from "@/lib/server-actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";
import Button from "@/components/ui/button";

export default async function Register() {
  const isAuthenticated = cookies().get("auth-token");
  if (isAuthenticated) {
    redirect("/", RedirectType.replace);
  }

  return (
    <main className="relative h-full max-w-[500px] w-full mx-auto lg:p-8 pt-8 items-center justify-center  z-[1] ">
      <Tabs
        defaultValue="login"
        className="lg:py-4 flex flex-col items-start h-full "
      >
        <TabsList className="gap-4 pl-3 lg:pl-0 mb-3">
          <TabsTrigger value="register">Register</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="register">
          <form
            action={submitRegister}
            className="flex h-full flex-col gap-4 p-8 "
          >
            <div className="flex flex-col gap-2">
              <label className="font-bold uppercase lg:text-[16px] font-poppins">
                <span className="text-secondary-pink">* </span>
                Name
              </label>
              <input
                type="text"
                className="py-2 px-4 border font-anonpro text-primary-black border-primary-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-pink focus-visible:border-transparent "
                placeholder="John Doe"
                required
                minLength={3}
                name="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold uppercase lg:text-[16px] font-poppins">
                <span className="text-secondary-pink">* </span>
                Email
              </label>
              <input
                type="email"
                className="py-2 px-4 border font-anonpro text-primary-black border-primary-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-pink focus-visible:border-transparent "
                placeholder="JohnDoe@email.com"
                required
                name="email"
              />
            </div>{" "}
            <div className="flex flex-col gap-2">
              <label className="font-bold uppercase lg:text-[16px] font-poppins">
                <span className="text-secondary-pink">* </span>
                password
              </label>
              <input
                type="password"
                className="py-2 px-4 border font-anonpro text-primary-black border-primary-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-pink focus-visible:border-transparent "
                placeholder="John Doe"
                required
                minLength={6}
                name="password"
              />
            </div>
            <Button className="mt-4" type="submit">
              Register
            </Button>
          </form>
        </TabsContent>
        <TabsContent value="login">
          <form
            action={submitLogin}
            className="flex justify-evenly flex-col gap-4 p-8 "
          >
            <div className="flex flex-col gap-2">
              <label className="font-bold uppercase lg:text-[16px] font-poppins">
                <span className="text-secondary-pink">* </span>
                Email
              </label>
              <input
                type="email"
                className="py-2 px-4 border font-anonpro text-primary-black border-primary-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-pink focus-visible:border-transparent "
                placeholder="JohnDoe@email.com"
                required
                name="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold uppercase lg:text-[16px] font-poppins">
                <span className="text-secondary-pink">* </span>
                password
              </label>
              <input
                type="password"
                className="py-2 px-4 border font-anonpro text-primary-black border-primary-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-pink focus-visible:border-transparent "
                placeholder="Password"
                required
                name="password"
                minLength={6}
              />
            </div>

            <Button className="mt-8" type="submit">
              Login
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </main>
  );
}

//add form validation
