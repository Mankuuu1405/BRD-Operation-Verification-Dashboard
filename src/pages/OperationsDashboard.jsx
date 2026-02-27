import React, { useState } from 'react';
import { Clock, CheckCircle, AlertCircle, FileX } from 'lucide-react';
import DashboardMetrics from '../components/Dashboard/DashboardMetrics';
import TaskList from '../components/Dashboard/TaskList';
import SiteVisitMap from '../components/Dashboard/SiteVisitMap';
import SiteVisitPhotos from './SiteVisitPhotos';
import SiteVisitReport from './SiteVisitReport';
import DocumentRejections from '../components/Dashboard/DocumentRejections';
import SLAAlerts from '../components/Dashboard/SLAAlerts';
import Sidebar from '../components/Common/Sidebar';

const OperationsDashboard = ({ user, onLogout = () => {} }) => {
  const [selectedView, setSelectedView] = useState('dashboard');
  const [selectedVisit, setSelectedVisit] = useState(null);

  const metrics = [
    {
      title: 'Pending Tasks',
      value: '47',
      trend: -12,
      color: 'yellow',
      icon: <Clock className="text-yellow-600" size={24} />
    },
    {
      title: 'Completed Today',
      value: '23',
      trend: 18,
      color: 'green',
      icon: <CheckCircle className="text-green-600" size={24} />
    },
    {
      title: 'SLA Breaches',
      value: '5',
      trend: -25,
      color: 'red',
      icon: <AlertCircle className="text-red-600" size={24} />
    },
    {
      title: 'OCR Failures',
      value: '12',
      trend: 8,
      color: 'blue',
      icon: <FileX className="text-blue-600" size={24} />
    }
  ];

  const tasks = [
    { id: 'TASK-1001', type: 'kyc', customer: 'Rahul Sharma', tatRemaining: 4, priority: 'high' },
    { id: 'TASK-1002', type: 'ocr', customer: 'Priya Patel', tatRemaining: 1, priority: 'critical' },
    { id: 'TASK-1003', type: 'site_visit', customer: 'Amit Kumar', tatRemaining: 8, priority: 'medium' },
    { id: 'TASK-1004', type: 'kyc', customer: 'Sneha Reddy', tatRemaining: 12, priority: 'low' },
    { id: 'TASK-1005', type: 'ocr', customer: 'Vikram Singh', tatRemaining: 2, priority: 'high' }
  ];

  const siteVisits = [
    {
      id: 'SV-001',
      location: 'Residential Property',
      address: 'Andheri West, Mumbai, Maharashtra',
      coordinates: '19.1136° N, 72.8697° E',
      date: '2025-11-18',
      status: 'completed',
      photoCount: 8
    },
    {
      id: 'SV-002',
      location: 'Commercial Office',
      address: 'MG Road, Bangalore, Karnataka',
      coordinates: '12.9716° N, 77.5946° E',
      date: '2025-11-19',
      status: 'in_progress',
      photoCount: 5
    },
    {
      id: 'SV-003',
      location: 'Industrial Unit',
      address: 'GIDC, Ahmedabad, Gujarat',
      coordinates: '23.0225° N, 72.5714° E',
      date: '2025-11-17',
      status: 'completed',
      photoCount: 12
    }
  ];

  const rejections = [
    {
      reason: 'Poor Image Quality',
      description: 'ITR documents from TCS employees consistently failing OCR',
      docType: 'ITR Form 16',
      frequency: 15,
      pattern: 'All failures from TCS employer - possible format issue'
    },
    {
      reason: 'Missing Signature',
      description: 'PAN cards without digital signature verification',
      docType: 'PAN Card',
      frequency: 8,
      pattern: null
    },
    {
      reason: 'Expired Document',
      description: 'Aadhaar cards with expiry date issues',
      docType: 'Aadhaar Card',
      frequency: 5,
      pattern: null
    }
  ];

  const slaAlerts = [
    {
      id: 'ALERT-001',
      taskId: 'TASK-0987',
      severity: 'critical',
      message: 'KYC verification pending for 26 hours',
      slaTarget: 24,
      elapsed: 26,
      overdue: 2
    },
    {
      id: 'ALERT-002',
      taskId: 'TASK-0954',
      severity: 'high',
      message: 'Document OCR retry limit approaching',
      slaTarget: 12,
      elapsed: 14,
      overdue: 2
    },
    {
      id: 'ALERT-003',
      taskId: 'TASK-0921',
      severity: 'medium',
      message: 'Site visit report submission overdue',
      slaTarget: 48,
      elapsed: 50,
      overdue: 2
    }
  ];

  return (
    <div className="flex">
      <Sidebar
        selectedView={selectedView}
        onSelect={setSelectedView}
        userEmail={user?.email || ''}
        onLogout={onLogout}
      />

      <main className="flex-1 min-h-screen bg-gray-50 ml-0 lg:ml-64 mt-14 lg:mt-0">

        {/* ─── Desktop Header only ─────────────────────────────── */}
        <div className="hidden lg:block bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">

              {/* Left: Title — always visible on desktop */}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Operations Dashboard</h1>
                <p className="mt-1 text-sm text-gray-500">Verification & KYC Management</p>
              </div>

              {/* Right: Welcome + Logout — desktop only */}
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  Welcome, <span className="font-semibold">{user?.name}</span>
                </span>
                <button
                  onClick={() => { setSelectedView('dashboard'); onLogout(); }}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  Logout
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* ─── Main Content ─────────────────────────────────────── */}
        <div className="max-w-7xl mx-auto px-6 py-8 space-y-6">
          {selectedView === 'dashboard' && (
            <>
              <DashboardMetrics metrics={metrics} />
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <TaskList tasks={tasks} />
                </div>
                <div>
                  <SLAAlerts alerts={slaAlerts} />
                </div>
              </div>
            </>
          )}

          {selectedView === 'siteVisits' && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Site Visits</h2>
              <SiteVisitMap
                visits={siteVisits}
                onViewPhotos={(v) => { setSelectedVisit(v); setSelectedView('siteVisitPhotos'); }}
                onViewReport={(v) => { setSelectedVisit(v); setSelectedView('siteVisitReport'); }}
              />
            </div>
          )}

          {selectedView === 'siteVisitPhotos' && (
            <SiteVisitPhotos visit={selectedVisit} onBack={() => setSelectedView('siteVisits')} />
          )}

          {selectedView === 'siteVisitReport' && (
            <SiteVisitReport visit={selectedVisit} onBack={() => setSelectedView('siteVisits')} />
          )}

          {selectedView === 'rejections' && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Document Rejections</h2>
              <DocumentRejections rejections={rejections} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default OperationsDashboard;