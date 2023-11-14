"use client";
import { CustomFormProps, NomineeRes } from "@/lib/types";
import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import StickyDrawer from "@/components/ui/sticky-drawer";
import { useApp } from "@/lib/hooks/useAppContext";
import { Button } from "../ui/button";
import { useState } from "react";
import Modal from "../ui/modal";
import { useRouter } from "next/navigation";

const NominateForm: React.FC<CustomFormProps> = ({ placeholder }) => {
  const options = useApp().nominees as NomineeRes;
  const { control, watch, reset } = useFormContext();
  const nomineeIdValue = watch("nominee_id");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const handleLeave = () => {
    closeModal();
    reset();
    router.push("/");
  };

  return (
    <div className="px-4 lg:px-0 h-full w-full">
      <FormField
        control={control}
        name="nominee_id"
        render={({ field }) => (
          <FormItem className="flex flex-col justify-between h-full">
            <div>
              <FormLabel className="font-bold uppercase lg:text-[16px] font-poppins">
                <span className="text-secondary-pink">* </span>
                Cube’s Name
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent position="item-aligned">
                  {options.map((option) => (
                    <SelectItem
                      key={option.nominee_id}
                      value={option.nominee_id}
                    >
                      {option.first_name} {option.last_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <FormMessage />
            <div className="lg:flex hidden justify-between">
              <Button variant="secondary" onClick={openModal}>
                Back
              </Button>
              <Button disabled={!nomineeIdValue} isLink={"/vote/reason"}>
                Next
              </Button>
            </div>
            <StickyDrawer type="horizontal">
              <Button inDrawer variant="secondary" onClick={openModal}>
                Back
              </Button>
              <Button
                disabled={!nomineeIdValue}
                isLink={"/vote/reason"}
                inDrawer
              >
                Next
              </Button>
            </StickyDrawer>
          </FormItem>
        )}
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="flex flex-col gap-4 p-8">
          <h1 className="font-poppins uppercase text-lg">Are you sure? </h1>
          <p className="font-anonpro">
            If you leave this page, you will lose any progress made.
          </p>
        </div>
        <div className="flex flex-col h-full w-full p-6 gap-4 shadow-light">
          <Button
            variant="secondary"
            inDrawer
            className="w-full"
            onClick={handleLeave}
          >
            Yes, Leave page
          </Button>
          <Button
            variant="secondary"
            inDrawer
            className="w-full"
            onClick={closeModal}
          >
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default NominateForm;
