import CustomerList from "@/components/CustomerList";
export default function Home() {
  return (
    <div className="max-w-xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Customer List</h1>
      <CustomerList />
    </div>
  );
}
