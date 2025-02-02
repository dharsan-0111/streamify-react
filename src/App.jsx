import { DashboardProvider } from "./contexts/DashboardContext";
import DashboardPage from "./pages/DashboardPage";

const App = () =>
{
  return (
    <DashboardProvider>
      <DashboardPage />
    </DashboardProvider>
  )
};

export default App;