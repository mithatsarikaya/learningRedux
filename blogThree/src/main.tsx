import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { store } from "./redux/app/store.tsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { fetchUsers } from "./redux/features/users/usersSlice.tsx";

store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
