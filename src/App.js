import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./state/reducer";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@material-ui/styles";
import theme from "./styles/Theme";

import AppRoutes from "./AppRoutes";
import Navbar from "./components/nav/Navbar";

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Router>
      <Navbar />
        <AppRoutes />
      </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
