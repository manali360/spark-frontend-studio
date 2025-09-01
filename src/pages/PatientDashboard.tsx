import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Calendar, 
  Video, 
  FileText, 
  User, 
  Clock, 
  Pill,
  ArrowLeft,
  Heart,
  Activity
} from "lucide-react";

const PatientDashboard = () => {
  const navigate = useNavigate();

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Sharma",
      specialty: "Cardiologist",
      date: "Today",
      time: "2:30 PM",
      type: "Video Call",
      status: "confirmed"
    },
    {
      id: 2,
      doctor: "Dr. Patel",
      specialty: "General Physician",
      date: "Tomorrow",
      time: "10:00 AM",
      type: "In-person",
      status: "pending"
    }
  ];

  const healthMetrics = [
    { label: "Blood Pressure", value: "120/80", icon: Heart, color: "text-green-600" },
    { label: "Heart Rate", value: "72 bpm", icon: Activity, color: "text-blue-600" },
    { label: "Weight", value: "70 kg", icon: User, color: "text-purple-600" }
  ];

  const recentPrescriptions = [
    { medicine: "Paracetamol", dosage: "500mg", frequency: "Twice daily", days: "5 days" },
    { medicine: "Vitamin D3", dosage: "1000 IU", frequency: "Once daily", days: "30 days" }
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
                <h1 className="text-2xl font-bold text-foreground">Patient Dashboard</h1>
                <p className="text-muted-foreground">Welcome back, John Doe</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="secondary">Patient ID: P001</Badge>
              <Button size="sm">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Button className="h-16 flex items-center justify-center space-x-3">
                  <Calendar className="w-5 h-5" />
                  <span>Book Appointment</span>
                </Button>
                <Button variant="outline" className="h-16 flex items-center justify-center space-x-3">
                  <Video className="w-5 h-5" />
                  <span>Start Video Call</span>
                </Button>
                <Button variant="outline" className="h-16 flex items-center justify-center space-x-3">
                  <FileText className="w-5 h-5" />
                  <span>View Reports</span>
                </Button>
                <Button variant="outline" className="h-16 flex items-center justify-center space-x-3">
                  <Pill className="w-5 h-5" />
                  <span>Prescriptions</span>
                </Button>
              </div>
            </Card>

            {/* Upcoming Appointments */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 bg-medical-light rounded-lg border">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{appointment.doctor}</h3>
                        <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{appointment.date} at {appointment.time}</span>
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

            {/* Recent Prescriptions */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Prescriptions</h2>
              <div className="space-y-3">
                {recentPrescriptions.map((prescription, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-3">
                      <Pill className="w-5 h-5 text-green-600" />
                      <div>
                        <h4 className="font-medium">{prescription.medicine}</h4>
                        <p className="text-sm text-muted-foreground">
                          {prescription.dosage} - {prescription.frequency}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">{prescription.days}</Badge>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Health Metrics */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Health Metrics</h2>
              <div className="space-y-4">
                {healthMetrics.map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <IconComponent className={`w-5 h-5 ${metric.color}`} />
                        <span className="font-medium">{metric.label}</span>
                      </div>
                      <span className="font-semibold">{metric.value}</span>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Consultation completed</p>
                    <p className="text-xs text-muted-foreground">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Prescription uploaded</p>
                    <p className="text-xs text-muted-foreground">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Lab results available</p>
                    <p className="text-xs text-muted-foreground">3 days ago</p>
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

export default PatientDashboard;