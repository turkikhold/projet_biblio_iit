export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  joinedDate: string;
  avatar?: string;
  activeOrders: number;
  totalOrders: number;
  status: 'active' | 'suspended';
}