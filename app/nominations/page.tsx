import CustomTable from "./custom-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "react-toastify/dist/ReactToastify.css";

export default async function Nominations() {
  const today = new Date();
  return (
    <div className="relative  w-full h-full mx-auto lg:p-8 pt-8 items-center justify-center  z-[1] ">
      <div className=" flex flex-col h-full justify-start">
        <h1 className="lg:text-[32px] pl-3 lg:pl-0 text-lg uppercase font-poppins mb-2 text-primary-black">
          Your Nominations
        </h1>
        <Tabs
          defaultValue="current"
          className="lg:py-4 flex flex-col items-start h-full "
        >
          <TabsList className="gap-4 pl-3 lg:pl-0 mb-3">
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
          </TabsList>
          <TabsContent value="current">
            <CustomTable today={today} type="current" />
          </TabsContent>
          <TabsContent value="closed">
            <CustomTable today={today} type="closed" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

//abstract the components into a separate file
//do closed later
