import { Header } from "./components/header/Header";
import { Main } from "./components/Main/Main";
import { ThemesProvider } from "./context/ThemeProvider";

function App() {
  return (
    <ThemesProvider>
      <Header />
      <Main />
    </ThemesProvider>
  );
}

export default App;
