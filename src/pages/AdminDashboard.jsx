import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faShoppingCart,
  faTruck,
  faUsers,
  faTags,
  faTicketAlt,
  faImages,
  faChartLine,
  faWarehouse,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import axios from "axios";
import { Menu } from "lucide-react";

const COLORS = ["#6366f1", "#10b981", "#f59e0b", "#ef4444"];

export default function AdminDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dailySales, setDailySales] = useState([]);
  const [categorySales, setCategorySales] = useState([]);
  const [monthlyTrend, setMonthlyTrend] = useState([]);
  const [revenueAccumulated, setRevenueAccumulated] = useState([]);

  const menuItems = [
  { label: "Manage Product", icon: faBoxOpen },
  { label: "Manage Order", icon: faShoppingCart },
  { label: "Manage Supplier", icon: faTruck },
  { label: "Manage Staff", icon: faUsers },
  { label: "Manage Category", icon: faTags },
  { label: "Manage Coupon", icon: faTicketAlt },
  { label: "Manage Slide", icon: faImages },
  { label: "Manage Sale", icon: faChartLine },
  { label: "Manage SupplierPurchase", icon: faWarehouse },
  { label: "Account Setting", icon: faUserCog },
];

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const res = await axios.get("https://dummyjson.com/carts");
        const carts = res.data.carts;

        // 1. Daily Sales
        const daily = carts.map((cart) => ({
          name: `Day ${cart.id}`,
          sales: cart.total,
        }));

        // 2. Simulated Monthly Trend
        const monthly = [
          { name: "Jan", total: 2400 },
          { name: "Feb", total: 3200 },
          { name: "Mar", total: 2800 },
          { name: "Apr", total: 3900 },
          { name: "May", total: 4200 },
        ];

        // 3. Category Pie (Simulated)
        const categories = [
          { name: "Electronics", value: 400 },
          { name: "Clothing", value: 300 },
          { name: "Groceries", value: 300 },
          { name: "Accessories", value: 200 },
        ];

        // 4. Revenue Accumulation (Simulated from carts)
        let runningTotal = 0;
        const revenue = carts.map((cart) => {
          runningTotal += cart.total;
          return { name: `Day ${cart.id}`, total: runningTotal };
        });

        setDailySales(daily);
        setMonthlyTrend(monthly);
        setCategorySales(categories);
        setRevenueAccumulated(revenue);
      } catch (err) {
        console.error("Error loading data:", err);
      }
    };

    fetchSalesData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
          <Menu />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          menuOpen ? "block" : "hidden"
        } md:block bg-white w-full md:w-1/4 lg:w-1/5 border-r md:min-h-screen transition-all`}
      >
        <div className="p-4 font-semibold text-lg border-b">Dashboard</div>
        <ul className="p-4 space-y-2">
            {menuItems.map((item) => (
                <li
                key={item.label}
                className="flex items-center space-x-2 p-2 rounded hover:bg-gray-200 cursor-pointer"
                >
                <FontAwesomeIcon icon={item.icon} className="w-4 h-4 text-gray-600" />
                <span>{item.label}</span>
                </li>
            ))}
            </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Chart 1: Bar */}
        <section className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Daily Sales</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={dailySales}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Chart 2: Line */}
        <section className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Monthly Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={monthlyTrend}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="total" stroke="#10b981" />
            </LineChart>
          </ResponsiveContainer>
        </section>

        {/* Chart 3: Pie */}
        <section className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Category Sales</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={categorySales}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label
              >
                {categorySales.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </section>

        {/* Chart 4: Area */}
        <section className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Revenue Accumulated</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={revenueAccumulated}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="total"
                stroke="#f59e0b"
                fill="#fde68a"
              />
            </AreaChart>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
}
