import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  Calendar, 
  Video, 
  FileText, 
  Clock, 
  Pill,
  ArrowLeft,
  UserCheck,
  Activity,
  AlertCircle
} from "lucide-react";

const DoctorDashboard = () => {
  const navigate = useNavigate();

  const todaySchedule = [
    {
      id: 1,
      patient: "John Doe",
      time: "9:00 AM",
      type: "Video Call",
      status: "confirmed",
      issue: "Follow-up checkup"
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      time: "10:30 AM",
      type: "In-person",
      status: "confirmed",
      issue: "Chest pain"
    },
    {
      id: 3,
      patient: "Mike Wilson",
      time: "2:00 PM",
      type: "Video Call",
      status: "pending",
      issue: "Diabetes consultation"
    }
  ];

  const stats = [
    { label: "Total Patients", value: "247", icon: Users, color: "text-blue-600" },
    { label: "Today's Appointments", value: "8", icon: Calendar, color: "text-green-600" },
    { label: "Pending Reviews", value: "12", icon: FileText, color: "text-orange-600" },
    { label: "Active Prescriptions", value: "34", icon: Pill, color: "text-purple-600" }
  ];

  const recentPatients = [
    { name: "Alice Brown", lastVisit: "2 days ago", condition: "Hypertension", status: "stable" },
    { name: "Robert Davis", lastVisit: "1 week ago", condition: "Diabetes", status: "monitoring" },
    { name: "Emily Wilson", lastVisit: "3 days ago", condition: "Asthma", status: "improved" }
  ];

  return (
    <div className="min-h-screen bg-medical-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Doctor Dashboard</h1>
                <p className="text-muted-foreground">Good morning, Dr. Sharma</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="secondary">License: MD12345</Badge>
              <Button size="sm">
                <UserCheck className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Button className="h-16 flex items-center justify-center space-x-3">
                  <Video className="w-5 h-5" />
                  <span>Start Consultation</span>
                </Button>
                <Button variant="outline" className="h-16 flex items-center justify-center space-x-3">
                  <FileText className="w-5 h-5" />
                  <span>Write Prescription</span>
                </Button>
                <Button variant="outline" className="h-16 flex items-center justify-center space-x-3">
                  <Users className="w-5 h-5" />
                  <span>Patient Records</span>
                </Button>
                <Button variant="outline" className="h-16 flex items-center justify-center space-x-3">
                  <Calendar className="w-5 h-5" />
                  <span>Schedule Management</span>
                </Button>
              </div>
            </Card>

            {/* Today's Schedule */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
              <div className="space-y-4">
                {todaySchedule.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{appointment.patient}</h3>
                        <p className="text-sm text-muted-foreground">{appointment.issue}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{appointment.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={appointment.status === 'confirmed' ? 'default' : 'secondary'}
                        className="mb-2"
                      >
                        {appointment.status}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{appointment.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Patients */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Patients</h2>
              <div className="space-y-3">
                {recentPatients.map((patient, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-medical-light rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <UserCheck className="w-5 h-5 text-blue-600" />
                      <div>
                        <h4 className="font-medium">{patient.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {patient.condition} • Last visit: {patient.lastVisit}
                        </p>
                      </div>
                    </div>
                    <Badge 
                      variant={patient.status === 'stable' ? 'default' : 
                               patient.status === 'improved' ? 'secondary' : 'outline'}
                    >
                      {patient.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Alerts & Notifications */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Alerts</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-800">Critical Lab Result</p>
                    <p className="text-xs text-red-600">Patient: John Doe</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Appointment Reminder</p>
                    <p className="text-xs text-yellow-600">Next: 10:30 AM</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Performance Metrics */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">This Week</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Consultations</span>
                  <span className="font-bold">42</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Prescriptions</span>
                  <span className="font-bold">38</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Patient Satisfaction</span>
                  <span className="font-bold">4.9/5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Response Time</span>
                  <span className="font-bold">2.1 min</span>
                </div>
              </div>
            </Card>

            {/* Quick Notes */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Notes</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Follow up on John's BP</p>
                    <p className="text-xs text-muted-foreground">Today</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Review Sarah's X-ray</p>
                    <p className="text-xs text-muted-foreground">Tomorrow</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;