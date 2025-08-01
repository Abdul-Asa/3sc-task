import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterForm from "./register";

export default async function Register() {
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
          <RegisterForm type="register" />
        </TabsContent>
        <TabsContent value="login">
          <RegisterForm type="login" />
        </TabsContent>
      </Tabs>
    </main>
  );
}

//add form validation and server feedback
