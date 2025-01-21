import BarChart from "./Components/BarChart";
import Header from "./Components/Header";
import Orders from "./Components/Orders";
import TopCards from "./Components/TopCards";

export default function Home() {
  return (
    <main className="bg-gray-200 min-h-screen">
      <Header />
      <TopCards />
      <div className="p-4 grid md:grid-cols-3">
        <BarChart />
        <Orders />
      </div>
    </main>
  );
}
