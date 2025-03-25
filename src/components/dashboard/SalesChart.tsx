import React from 'react';

export function SalesChart() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Total Depots</h2>
        <select className="p-2 border border-gray-200 rounded-lg text-sm">
          <option value="7days">Les 7 derniers jours</option>
          <option value="30days">Les 30 derniers jours</option>
          <option value="90days">Les 90 derniers jours</option>
        </select>
      </div>
      <div className="h-80 flex items-center justify-center text-gray-500">
      Le graphique sera implémenté avec une bibliothèque de graphiques
      </div>
    </div>
  );
}