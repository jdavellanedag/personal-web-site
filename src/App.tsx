import { AppProvider } from "./context/AppProvider";
import { LandingPage } from "./pages/LandingPage";
import "./styles/app.scss";

function App() {
  return (
    <AppProvider>
      <LandingPage />
    </AppProvider>
  );
}

export default App;
