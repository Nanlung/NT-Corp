export interface Order {
  id: number;
  name: {
    first: string;
    last: string;
  };
  total: number;
  status: string;
  method: string;
  date: string;
}

export const data = [
  {
    id: 1,
    name: {
      first: "David",
      last: "Maddison",
    },
    total: 12.99,
    status: "Completed",
    method: "MasterCard",
    date: "2 days ago",
  },
  {
    id: 2,
    name: {
      first: "Alice",
      last: "Johnson",
    },
    total: 45.5,
    status: "Pending",
    method: "Visa",
    date: "1 day ago",
  },
  {
    id: 3,
    name: {
      first: "John",
      last: "Doe",
    },
    total: 89.99,
    status: "Completed",
    method: "PayPal",
    date: "5 days ago",
  },
  {
    id: 4,
    name: {
      first: "Emily",
      last: "Smith",
    },
    total: 32.5,
    status: "Failed",
    method: "MasterCard",
    date: "3 days ago",
  },
  {
    id: 5,
    name: {
      first: "Michael",
      last: "Brown",
    },
    total: 75.0,
    status: "Completed",
    method: "Visa",
    date: "1 week ago",
  },
  {
    id: 6,
    name: {
      first: "Sarah",
      last: "Wilson",
    },
    total: 22.99,
    status: "Pending",
    method: "PayPal",
    date: "4 hours ago",
  },
  {
    id: 7,
    name: {
      first: "James",
      last: "Taylor",
    },
    total: 54.5,
    status: "Completed",
    method: "MasterCard",
    date: "2 weeks ago",
  },
  {
    id: 8,
    name: {
      first: "Jessica",
      last: "Lee",
    },
    total: 15.75,
    status: "Failed",
    method: "Visa",
    date: "6 days ago",
  },
  {
    id: 9,
    name: {
      first: "Chris",
      last: "Martin",
    },
    total: 120.0,
    status: "Completed",
    method: "PayPal",
    date: "1 month ago",
  },
  {
    id: 10,
    name: {
      first: "Laura",
      last: "Anderson",
    },
    total: 39.99,
    status: "Pending",
    method: "MasterCard",
    date: "3 hours ago",
  },
  {
    id: 11,
    name: {
      first: "Brian",
      last: "Thomas",
    },
    total: 60.0,
    status: "Completed",
    method: "Visa",
    date: "4 weeks ago",
  },
  {
    id: 12,
    name: {
      first: "Anna",
      last: "Davis",
    },
    total: 18.0,
    status: "Failed",
    method: "PayPal",
    date: "1 day ago",
  },
  {
    id: 13,
    name: {
      first: "Matthew",
      last: "Garcia",
    },
    total: 95.0,
    status: "Completed",
    method: "MasterCard",
    date: "2 months ago",
  },
  {
    id: 14,
    name: {
      first: "Sophia",
      last: "Martinez",
    },
    total: 27.5,
    status: "Pending",
    method: "Visa",
    date: "3 days ago",
  },
  {
    id: 15,
    name: {
      first: "Daniel",
      last: "Harris",
    },
    total: 150.0,
    status: "Completed",
    method: "PayPal",
    date: "5 hours ago",
  },
  {
    id: 16,
    name: {
      first: "Olivia",
      last: "Clark",
    },
    total: 12.5,
    status: "Failed",
    method: "MasterCard",
    date: "2 weeks ago",
  },
];
