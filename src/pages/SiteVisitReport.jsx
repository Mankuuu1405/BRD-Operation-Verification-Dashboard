import React from 'react';

const SiteVisitReport = ({ visit, onBack = () => {} }) => {
  if (!visit) return null;

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">Site Visit Report • {visit.location}</h3>
          <p className="text-sm text-gray-500">{visit.address} • {visit.date}</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="px-3 py-2 bg-gray-100 rounded-md text-sm">Back</button>
        </div>
      </div>

      <div className="space-y-4 text-sm text-gray-700">
        <p><strong>Status:</strong> {visit.status.replace('_', ' ')}</p>
        <p><strong>Photos taken:</strong> {visit.photoCount}</p>
        <p><strong>Coordinates:</strong> {visit.coordinates}</p>
        <div>
          <h4 className="font-semibold mb-2">Observations</h4>
          <p className="text-gray-600">This is a sample report for the site visit. Replace with actual report content fetched from backend.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Actions / Recommendations</h4>
          <ul className="list-disc ml-5 text-gray-600">
            <li>Verify address documents</li>
            <li>Re-check photo clarity for certain angles</li>
            <li>Follow up on missing signatures</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SiteVisitReport;
