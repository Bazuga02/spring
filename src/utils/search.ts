export function searchCustomers(customers, query) {
  return customers.filter(c => c.DisplayName.toLowerCase().includes(query.toLowerCase()) || c.Locations[0]?.City.toLowerCase().includes(query.toLowerCase()));
}
