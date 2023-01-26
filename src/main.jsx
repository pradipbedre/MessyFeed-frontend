import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Store";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://38ce8258b2504deeb45f03295c2a2a4f@o4504546279620608.ingest.sentry.io/4504546289451008",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
// import { initializeFirebase } from "../firebase.config";
import { initializeApp } from "firebase/app";

import { getStorage, ref, uploadString } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBIdDXUyBEetVR1w2Xqy5xNEZWXyyQd4A8",
  authDomain: "messyfeed-bf7f2.firebaseapp.com",
  projectId: "messyfeed-bf7f2",
  storageBucket: "messyfeed-bf7f2.appspot.com",
  messagingSenderId: "456404882293",
  appId: "1:456404882293:web:92a196fac47204d519f93c",
};

// // Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseStorage = getStorage(firebaseApp);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#cc6200",
              borderColor: "#0e2e3c",
            },
          }}
        >
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
