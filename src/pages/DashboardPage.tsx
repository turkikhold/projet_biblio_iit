import React from 'react';
import { BookOpen, Users, ShoppingCart, TrendingUp } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { RecentOrders } from '../components/dashboard/RecentOrders';
import { PopularBooks } from '../components/dashboard/PopularBooks';
import { SalesChart } from '../components/dashboard/SalesChart';
import { UserActivity } from '../components/dashboard/UserActivity';

export function DashboardPage() {
  const stats = [
    {
      title: 'Total Livres',
      value: '2,845',
      icon: BookOpen,
      trend: { value: 12.5, isPositive: true }
    },
    {
      title: 'Utilisateur Active',
      value: '1,280',
      icon: Users,
      trend: { value: 8.2, isPositive: true }
    },
    {
      title: 'Total Emprunts',
      value: '384',
      icon: ShoppingCart,
      trend: { value: 5.7, isPositive: true }
    },
    {
      title: 'Statistic Mensuelles',
      value: '12,480',
      icon: TrendingUp,
      trend: { value: 15.3, isPositive: true }
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Tableau De Bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <UserActivity />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentOrders />
        <PopularBooks />
      </div>
    </div>
  );
}