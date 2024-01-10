import Head from "./components/Head";
import { Provider } from "react-redux";
import appStore from "./utils/appstore";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Provider store={appStore}>
      <Head />
      <Outlet />
    </Provider>
  );
}

export default App;
