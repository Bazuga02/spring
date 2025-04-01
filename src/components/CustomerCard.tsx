import { Popover } from "@radix-ui/react-popover";
import { TrashIcon, CheckIcon, XIcon } from "@heroicons/react/solid";
import { cn } from "@/utils/classnames";

type Customer = {
  id: number;
  DisplayName: string;
  Locations: { City: string }[];
  LocationErrors: string[];
  IsActive: boolean;
};

export default function CustomerCard({ customer, toggleActive, deleteCustomer }: { customer: Customer, toggleActive: () => void, deleteCustomer: () => void }) {
  return (
    <div className={cn("p-4 border rounded-lg flex justify-between items-center", customer.IsActive ? "" : "opacity-50")}>
      <div>
        <h3 className="font-bold">{customer.DisplayName}</h3>
        <p className="text-sm text-gray-600">{customer.Locations[0]?.City}</p>
      </div>
      {customer.LocationErrors.length > 0 && <span className="text-red-500">⚠</span>}
      <Popover>
        <Popover.Trigger className="p-2">⋮</Popover.Trigger>
        <Popover.Content className="bg-white shadow-md p-2 rounded">
          <button onClick={toggleActive} className="flex items-center gap-2 p-2 hover:bg-gray-200">{customer.IsActive ? <XIcon className="w-4 h-4" /> : <CheckIcon className="w-4 h-4" />} {customer.IsActive ? "Deactivate" : "Activate"}</button>
          <button onClick={deleteCustomer} className="flex items-center gap-2 p-2 hover:bg-gray-200 text-red-500"><TrashIcon className="w-4 h-4" /> Delete</button>
        </Popover.Content>
      </Popover>
    </div>
  );
}
