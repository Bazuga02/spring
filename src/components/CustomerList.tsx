import { useState } from "react";
import CustomerCard from "@/components/CustomerCard";
import customersData from "@/data/customers.json";

export default function CustomerList() {
  const [customers, setCustomers] = useState(customersData);
  const [search, setSearch] = useState("");

  const toggleActive = (id: number) => {
    setCustomers(prev => prev.map(c => c.id === id ? { ...c, IsActive: !c.IsActive } : c));
  };

  const deleteCustomer = (id: number) => {
    setCustomers(prev => prev.filter(c => c.id !== id));
  };

  const filteredCustomers = customers.filter(c =>
    c.DisplayName.toLowerCase().includes(search.toLowerCase()) ||
    c.Locations[0]?.City.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search customers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 w-full mb-4"
      />
      <div className="grid gap-4">
        {filteredCustomers.map((customer) => (
          <CustomerCard key={customer.id} customer={customer} toggleActive={() => toggleActive(customer.id)} deleteCustomer={() => deleteCustomer(customer.id)} />
        ))}
      </div>
    </div>
  );
}
