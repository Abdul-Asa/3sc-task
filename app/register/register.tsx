"use client";
import { Button } from "@/components/ui/button";
import { submitLogin, submitRegister } from "@/lib/server-actions";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

interface RegisterProps {
  type: "login" | "register";
}

export default function RegisterForm({ type }: RegisterProps) {
  const loginForm = useForm();
  const registerForm = useForm();
  const form = type === "login" ? loginForm : registerForm;

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    try {
      if (type === "login") {
        await submitLogin(formData).then((res) => toast.error(res.data.error));
      } else {
        await submitRegister(formData).then((res) =>
          toast.error(res.data.error)
        );
      }
    } catch (error) {
      toast.error("An error occurred: " + error);
    }
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex h-full flex-col gap-4 p-8 "
    >
      {type === "register" && (
        <div className="flex flex-col gap-2">
          <label className="font-bold uppercase lg:text-[16px] font-poppins">
            <span className="text-secondary-pink">* </span>
            Name
          </label>
          <input
            type="text"
            className="py-2 px-4 border font-anonpro text-primary-black border-primary-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-pink focus-visible:border-transparent "
            placeholder="John Doe"
            {...registerForm.register("name", { required: true, minLength: 3 })}
            name="name"
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <label className="font-bold uppercase lg:text-[16px] font-poppins">
          <span className="text-secondary-pink">* </span>
          Email
        </label>
        <input
          type="email"
          className="py-2 px-4 border font-anonpro text-primary-black border-primary-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-pink focus-visible:border-transparent "
          placeholder="JohnDoe@email.com"
          {...form.register("email", { required: true })}
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
          placeholder="John Doe"
          {...form.register("password", { required: true, minLength: 6 })}
          name="password"
        />
      </div>
      <Button className="mt-4" type="submit">
        Register
      </Button>
    </form>
  );
}
