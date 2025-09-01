import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Package, 
  Pill, 
  FileText, 
  TrendingUp, 
  AlertTriangle,
  ArrowLeft,
  ShoppingCart,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";

const PharmacyDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Total Medicines", value: "1,247", icon: Pill, color: "text-blue-600" },
    { label: "Pending Orders", value: "23", icon: Clock, color: "text-orange-600" },
    { label: "Low Stock Items", value: "8", icon: AlertTriangle, color: "text-red-600" },
    { label: "Today's Sales", value: "₹12,450", icon: TrendingUp, color: "text-green-600" }
  ];

  const pendingPrescriptions = [
    {
      id: 1,
      patient: "John Doe",
      doctor: "Dr. Sharma",
      medicines: ["Paracetamol 500mg", "Amoxicillin 250mg"],
      status: "pending",
      time: "10:30 AM",
      total: "₹345"
    },
    {
      id: 2,
      patient: "Sarah Johnson",
      doctor: "Dr. Patel",
      medicines: ["Insulin", "Metformin"],
      status: "processing",
      time: "11:15 AM",
      total: "₹1,200"
    },
    {
      id: 3,
      patient: "Mike Wilson",
      doctor: "Dr. Kumar",
      medicines: ["Lisinopril", "Aspirin"],
      status: "ready",
      time: "9:45 AM",
      total: "₹280"
    }
  ];

  const lowStockItems = [
    { name: "Paracetamol 500mg", currentStock: 15, minStock: 50, supplier: "MedCorp" },
    { name: "Amoxicillin 250mg", currentStock: 8, minStock: 30, supplier: "PharmaPlus" },
    { name: "Insulin Pen", currentStock: 3, minStock: 20, supplier: "DiabetesCare" }
  ];

  const recentOrders = [
    { orderNo: "PO-001", supplier: "MedCorp", items: 15, amount: "₹25,600", status: "delivered" },
    { orderNo: "PO-002", supplier: "PharmaPlus", items: 8, amount: "₹12,300", status: "shipped" },
    { orderNo: "PO-003", supplier: "HealthSupply", items: 22, amount: "₹34,500", status: "pending" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="w-4 h-4 text-orange-500" />;
      case 'processing': return <Package className="w-4 h-4 text-blue-500" />;
      case 'ready': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'delivered': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'shipped': return <Package className="w-4 h-4 text-blue-500" />;
      default: return <XCircle className="w-4 h-4 text-red-500" />;
    }
  };

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
                <h1 className="text-2xl font-bold text-foreground">Pharmacy Dashboard</h1>
                <p className="text-muted-foreground">MediCare Pharmacy - Branch #001</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="secondary">License: PH2024001</Badge>
              <Button size="sm">
                <Package className="w-4 h-4 mr-2" />
                Inventory
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
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
                  <FileText className="w-5 h-5" />
                  <span>Process Prescription</span>
                </Button>
                <Button variant="outline" className="h-16 flex items-center justify-center space-x-3">
                  <Package className="w-5 h-5" />
                  <span>Manage Inventory</span>
                </Button>
                <Button variant="outline" className="h-16 flex items-center justify-center space-x-3">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Place Order</span>
                </Button>
                <Button variant="outline" className="h-16 flex items-center justify-center space-x-3">
                  <TrendingUp className="w-5 h-5" />
                  <span>Sales Report</span>
                </Button>
              </div>
            </Card>

            {/* Pending Prescriptions */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Pending Prescriptions</h2>
              <div className="space-y-4">
                {pendingPrescriptions.map((prescription) => (
                  <div key={prescription.id} className="flex items-center justify-between p-4 bg-white rounded-lg border">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{prescription.patient}</h3>
                        <p className="text-sm text-muted-foreground">Dr. {prescription.doctor}</p>
                        <p className="text-xs text-muted-foreground">
                          {prescription.medicines.join(", ")}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-2 mb-1">
                        {getStatusIcon(prescription.status)}
                        <Badge 
                          variant={prescription.status === 'ready' ? 'default' : 
                                   prescription.status === 'processing' ? 'secondary' : 'outline'}
                        >
                          {prescription.status}
                        </Badge>
                      </div>
                      <p className="text-sm font-semibold">{prescription.total}</p>
                      <p className="text-xs text-muted-foreground">{prescription.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Orders */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Recent Purchase Orders</h2>
              <div className="space-y-3">
                {recentOrders.map((order, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-medical-light rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <ShoppingCart className="w-5 h-5 text-blue-600" />
                      <div>
                        <h4 className="font-medium">{order.orderNo}</h4>
                        <p className="text-sm text-muted-foreground">
                          {order.supplier} • {order.items} items
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{order.amount}</p>
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(order.status)}
                        <span className="text-xs text-muted-foreground">{order.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Low Stock Alert */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                Low Stock Alert
              </h2>
              <div className="space-y-3">
                {lowStockItems.map((item, index) => (
                  <div key={index} className="p-3 bg-red-50 rounded-lg border border-red-200">
                    <h4 className="font-medium text-red-800">{item.name}</h4>
                    <p className="text-sm text-red-600">
                      Stock: {item.currentStock} / Min: {item.minStock}
                    </p>
                    <p className="text-xs text-red-500">{item.supplier}</p>
                    <Button size="sm" className="mt-2 h-6 text-xs">
                      Reorder
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Today's Summary */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Today's Summary</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Prescriptions Filled</span>
                  <span className="font-bold">18</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Revenue</span>
                  <span className="font-bold">₹12,450</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Customers Served</span>
                  <span className="font-bold">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Avg. Order Value</span>
                  <span className="font-bold">₹830</span>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Inventory Status</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Well Stocked</span>
                  <span className="text-green-600 font-medium">1,185</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Running Low</span>
                  <span className="text-orange-600 font-medium">54</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Out of Stock</span>
                  <span className="text-red-600 font-medium">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Expired</span>
                  <span className="text-gray-600 font-medium">12</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PharmacyDashboard;