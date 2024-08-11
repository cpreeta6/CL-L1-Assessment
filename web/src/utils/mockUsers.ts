import { User } from './types';

// Mock user data
const users: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    password: '$2a$12$wZtE5XyAfUqAqfzFzpftB.V8y8Z1bRz7zA7du1pl8gls/vIa14Cx2', // 'password123' hashed
    role: 'Admin',
  },
  {
    id: '2',
    email: 'approver@example.com',
    password: '$2a$12$wZtE5XyAfUqAqfzFzpftB.V8y8Z1bRz7zA7du1pl8gls/vIa14Cx2', // 'password123' hashed
    role: 'Approver',
  },
];

export default users;
