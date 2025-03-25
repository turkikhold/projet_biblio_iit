import React from 'react';
import { Activity } from 'lucide-react';

const activities = [
  {
    id: 1,
    user: 'User1',
    action: 'emprunté',
    book: 'IA',
    time: '2 hours ago'
  },
  {
    id: 2,
    user: 'User2',
    action: 'emprunté',
    book: 'React',
    time: '5 hours ago'
  }
];

export function UserActivity() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Activité Récente</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4">
            <div className="p-2 bg-[#EBEEF2] rounded-full">
              <Activity className="w-5 h-5 text-[#2B4E84]" />
            </div>
            <div>
              <p className="text-sm text-gray-900">
                <span className="font-medium">{activity.user}</span>
                {' '}{activity.action}{' '}
                <span className="font-medium">{activity.book}</span>
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}