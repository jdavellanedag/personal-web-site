import { QueryClient, QueryClientProvider } from "react-query";
import { ApolloProvider } from "@apollo/client";
import { AppProvider } from "./context/AppProvider";
import { Navigation } from "./routes/Navigation";
import { useGraphql } from "./hooks/useGraphql";

const queryClient = new QueryClient();

import "./styles/app.scss";

function App() {
  const { client } = useGraphql();

  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <ApolloProvider client={client}>
          <Navigation />
        </ApolloProvider>
        {/* <LandingPage /> */}
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
