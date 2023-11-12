import CustomTable from "./Table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function Nominations() {
  return (
    <div className="relative  w-full h-full mx-auto p-8 items-center justify-center  z-[1] ">
      <div className=" flex flex-col h-full justify-start">
        <h1 className="text-[32px] font-poppins mb-2 text-primary-black">
          Your Nominations
        </h1>
        <Tabs
          defaultValue="current"
          className="py-4 flex flex-col items-start h-full "
        >
          <TabsList className="gap-4 mb-3">
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
          </TabsList>
          <TabsContent value="current">
            <div className="">
              <CustomTable />
            </div>
          </TabsContent>
          <TabsContent value="closed">
            {/* <CustomTable /> */}
            No closed nominations
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

//abstract the components into a separate file
//do closed later
