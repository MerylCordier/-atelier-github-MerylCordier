import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "react";
import store from "./store/index.ts";
import App from "./App.jsx";
import "semantic-ui-css/semantic.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
    <Provider store={store}>
        <App />;
    </Provider>
</React.StrictMode>);
