export interface TableHeader {
   id: number;
   title: string;
   attribute: string;
}

export type TableData = Record<TableHeader['attribute'], string | number>;

export const tableHeaders: TableHeader[] = [
   {
      id: 1,
      title: 'Name',
      attribute: 'name',
   },
   {
      id: 2,
      title: 'Age',
      attribute: 'age',
   },
   {
      id: 3,
      title: 'Address',
      attribute: 'address',
   },
];

export const tableData: TableData[] = [
   {
      name: 'Hasan',
      age: 55,
      address: 'Kolkata',
   },
   {
      name: 'Rai',
      age: 12,
      address: 'Kolkata',
   },
   {
      name: 'John',
      age: 30,
      address: 'New York',
   },
   {
      name: 'Alice',
      age: 28,
      address: 'London',
   },
   {
      name: 'Bob',
      age: 35,
      address: 'San Francisco',
   },
   {
      name: 'Eva',
      age: 22,
      address: 'Paris',
   },
   {
      name: 'Daniel',
      age: 40,
      address: 'Berlin',
   },
   {
      name: 'Sophie',
      age: 32,
      address: 'Sydney',
   },
   {
      name: 'Michael',
      age: 27,
      address: 'Tokyo',
   },
   {
      name: 'Lily',
      age: 29,
      address: 'Toronto',
   },
   {
      name: 'Ryan',
      age: 31,
      address: 'Singapore',
   },
   {
      name: 'Emma',
      age: 33,
      address: 'Hong Kong',
   },
   {
      name: 'Matthew',
      age: 28,
      address: 'Mumbai',
   },
   {
      name: 'Olivia',
      age: 34,
      address: 'Dubai',
   },
   {
      name: 'William',
      age: 26,
      address: 'Shanghai',
   },
];
