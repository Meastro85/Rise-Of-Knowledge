import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import ExamPage from "./components/exam/ExamPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalClasses withCssVariables withStaticClasses>
        <ExamPage />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
