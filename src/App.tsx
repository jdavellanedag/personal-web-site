import { AppProvider } from "./context/AppProvider";
import { LandingPage } from "./pages/LandingPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

import "./styles/app.scss";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <LandingPage />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
