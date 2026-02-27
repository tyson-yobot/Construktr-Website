import { motion } from 'framer-motion';
import { Calendar, DollarSign, FileText, Clock, CheckCircle, Users } from 'lucide-react';
import DeviceMockup from './device-mockup';

interface ProductScreenshotProps {
  type: 'quotes' | 'schedule' | 'payments' | 'dashboard';
  className?: string;
}

const screenshots = {
  quotes: {
    title: "Generate Professional Quotes",
    subtitle: "30-second quote generation with AI pricing",
    content: (
      <div className="bg-gradient-to-b from-blue-50 to-white h-full rounded-t-2xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="text-gray-800 font-semibold text-lg">New Quote</div>
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              AI Powered
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-800">HVAC Repair - Furnace</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Diagnostic check: $125</div>
                <div>• Thermostat replacement: $280</div>
                <div>• Labor (2 hours): $220</div>
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-green-800 font-medium">Total Quote</span>
                <span className="text-green-800 font-bold text-xl">$625.00</span>
              </div>
              <div className="text-green-600 text-sm mt-1">Generated in 28 seconds</div>
            </div>
            
            <div className="flex gap-2 pt-2">
              <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-medium">
                Send Quote
              </button>
              <button className="px-4 py-3 border border-gray-300 rounded-xl">
                📧
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  },
  
  schedule: {
    title: "Smart Route Optimization",
    subtitle: "AI schedules your day for maximum efficiency",
    content: (
      <div className="bg-gradient-to-b from-green-50 to-white h-full rounded-t-2xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="text-gray-800 font-semibold text-lg">Today's Schedule</div>
            <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Optimized
            </div>
          </div>
          
          <div className="space-y-3">
            {[
              { time: "8:00 AM", client: "Johnson Residence", job: "Plumbing repair", status: "current" },
              { time: "10:30 AM", client: "Office Complex", job: "HVAC maintenance", status: "next" },
              { time: "2:00 PM", client: "Smith Home", job: "Electrical install", status: "pending" },
              { time: "4:30 PM", client: "Downtown Store", job: "Emergency call", status: "pending" }
            ].map((appointment, i) => (
              <div key={i} className={`rounded-xl p-4 border ${
                appointment.status === 'current' 
                  ? 'bg-blue-50 border-blue-200' 
                  : appointment.status === 'next'
                  ? 'bg-yellow-50 border-yellow-200'
                  : 'bg-white border-gray-200'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    appointment.status === 'current' 
                      ? 'bg-blue-600' 
                      : appointment.status === 'next'
                      ? 'bg-yellow-600'
                      : 'bg-gray-300'
                  }`} />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800 text-sm">
                      {appointment.time} - {appointment.client}
                    </div>
                    <div className="text-gray-600 text-xs">{appointment.job}</div>
                  </div>
                  {appointment.status === 'current' && (
                    <Clock className="w-4 h-4 text-blue-600" />
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 bg-green-50 border border-green-200 rounded-xl p-3">
            <div className="text-green-800 font-medium text-sm">Route Optimized</div>
            <div className="text-green-600 text-xs">Saved 2.5 hours of drive time today</div>
          </div>
        </div>
      </div>
    )
  },

  payments: {
    title: "Instant Payment Processing", 
    subtitle: "Get paid on the spot with same-day deposits",
    content: (
      <div className="bg-gradient-to-b from-purple-50 to-white h-full rounded-t-2xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="text-gray-800 font-semibold text-lg">Payments</div>
            <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Same Day
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-gray-800">Invoice #2847</span>
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-gray-600 text-sm mb-2">HVAC Repair - Johnson Residence</div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-800">$625.00</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  PAID
                </span>
              </div>
              <div className="text-gray-500 text-xs mt-1">Paid via card • 2 minutes ago</div>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
                <DollarSign className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-blue-800 font-bold text-lg">$2,850</div>
                <div className="text-blue-600 text-xs">This Week</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
                <Users className="w-6 h-6 text-green-600 mx-auto mb-2" />
                <div className="text-green-800 font-bold text-lg">12</div>
                <div className="text-green-600 text-xs">Jobs Complete</div>
              </div>
            </div>
            
            <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-medium">
              Request Payment
            </button>
          </div>
        </div>
      </div>
    )
  },

  dashboard: {
    title: "Business Overview",
    subtitle: "Track performance and growth metrics",
    content: (
      <div className="bg-gradient-to-b from-gray-50 to-white h-full rounded-t-2xl">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="text-gray-800 font-semibold text-lg">Dashboard</div>
            <div className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Live Data
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-3">
                <div className="text-blue-600 text-xs font-medium mb-1">REVENUE</div>
                <div className="text-blue-800 font-bold text-xl">$18,450</div>
                <div className="text-blue-600 text-xs">+23% vs last month</div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                <div className="text-green-600 text-xs font-medium mb-1">JOBS</div>
                <div className="text-green-800 font-bold text-xl">47</div>
                <div className="text-green-600 text-xs">+12 this week</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <div className="text-gray-800 font-medium mb-3">Recent Activity</div>
              <div className="space-y-2">
                {[
                  { action: "Quote sent", client: "Mike's Diner", time: "2m ago", status: "success" },
                  { action: "Payment received", client: "Johnson Home", time: "15m ago", status: "success" },
                  { action: "Job completed", client: "Office Building", time: "1h ago", status: "success" }
                ].map((activity, i) => (
                  <div key={i} className="flex items-center gap-3 py-2">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.status === 'success' ? 'bg-green-500' : 'bg-gray-400'
                    }`} />
                    <div className="flex-1">
                      <div className="text-gray-800 text-sm font-medium">{activity.action}</div>
                      <div className="text-gray-600 text-xs">{activity.client}</div>
                    </div>
                    <div className="text-gray-500 text-xs">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default function ProductScreenshot({ type, className }: ProductScreenshotProps) {
  const screenshot = screenshots[type];
  
  return (
    <div className={className}>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{screenshot.title}</h3>
        <p className="text-[var(--clr-text-2)]">{screenshot.subtitle}</p>
      </div>
      
      <div className="flex justify-center">
        <DeviceMockup floating className="glow-blue">
          {screenshot.content}
        </DeviceMockup>
      </div>
    </div>
  );
}