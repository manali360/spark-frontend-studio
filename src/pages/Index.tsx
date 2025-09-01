import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Users, Stethoscope, Pill } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const userRoles = [
    {
      title: "Patient",
      description: "Book appointments, consult doctors, manage health records",
      icon: Users,
      color: "bg-blue-50 hover:bg-blue-100 border-blue-200",
      iconColor: "text-blue-600",
      path: "/patient"
    },
    {
      title: "Doctor",
      description: "Manage patients, consultations, prescriptions",
      icon: Stethoscope,
      color: "bg-green-50 hover:bg-green-100 border-green-200",
      iconColor: "text-green-600",
      path: "/doctor"
    },
    {
      title: "Pharmacy",
      description: "Manage inventory, prescriptions, medicine stock",
      icon: Pill,
      color: "bg-purple-50 hover:bg-purple-100 border-purple-200",
      iconColor: "text-purple-600",
      path: "/pharmacy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-light via-background to-medical-accent/20">
      {/* Header */}
      <header className="p-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-4">
            TeleMed Pro
          </h1>
          <p className="text-lg text-muted-foreground">
            Complete Telemedicine Solution for Modern Healthcare
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-foreground mb-4">
            Choose Your Role
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Access your personalized dashboard based on your role in the healthcare ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {userRoles.map((role) => {
            const IconComponent = role.icon;
            return (
              <Card 
                key={role.title}
                className={`p-8 cursor-pointer transition-all duration-300 hover:shadow-lg ${role.color}`}
                onClick={() => navigate(role.path)}
              >
                <div className="text-center space-y-4">
                  <div className={`w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mx-auto`}>
                    <IconComponent className={`w-8 h-8 ${role.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {role.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {role.description}
                  </p>
                  <Button className="w-full mt-4">
                    Enter as {role.title}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Features */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Platform Features
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Video Consultations",
              "Digital Prescriptions",
              "Health Records",
              "Appointment Booking"
            ].map((feature) => (
              <div key={feature} className="bg-white/50 p-4 rounded-lg border">
                <p className="font-medium text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;