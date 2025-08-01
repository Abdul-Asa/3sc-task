"use client";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { submitLogin, submitRegister } from "@/lib/server-actions";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface RegisterProps {
  type: "login" | "register";
}

export default function RegisterForm({ type }: RegisterProps) {
  const loginForm = useForm();
  const registerForm = useForm();
  const form = type === "login" ? loginForm : registerForm;
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    try {
      let result;
      if (type === "login") {
        result = await submitLogin(formData);
      } else {
        result = await submitRegister(formData);
      }

      // If we get a result (meaning there was an error), show the error
      if (result && result.success === false) {
        toast.error(result.error);
      }
      // If no result is returned, it means the redirect was successful
    } catch (error) {
      // This should only happen for unexpected errors, not auth errors
      console.error("Unexpected error:", error);
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <div className="flex h-full flex-col gap-4 p-8">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
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
              {...registerForm.register("name", {
                required: true,
                minLength: 3,
              })}
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
          {type === "login" ? "Login" : "Register"}
        </Button>
      </form>

      {/* Test Credentials Collapsible */}
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-4">
        <CollapsibleTrigger className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
          <ChevronRight
            className={cn(
              "size-4 transition-transform",
              isOpen ? "rotate-90" : ""
            )}
          />
          Test Credentials
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
            <p className="font-medium text-blue-800 mb-1">
              Use these for testing:
            </p>
            <p className="text-blue-700">Email: test@gmail.com</p>
            <p className="text-blue-700">Password: test123</p>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
