import "./index.css";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { theme } from "./theme/theme";
import { store } from "./store/store";
import { router } from "./routing/router";

function App() {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </main>
  );
}

export default App;
