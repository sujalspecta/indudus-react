import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "./rootReducer";
import { cartListener } from "./listeners/cartListener";
import { wishlistListener } from "./listeners/wishlistListener";

// 💡 BYPASS VITE BUG: Provide native localStorage wrappers directly
const customStorage = {
  getItem: (key) => {
    return Promise.resolve(localStorage.getItem(key));
  },
  setItem: (key, value) => {
    localStorage.setItem(key, value);
    return Promise.resolve();
  },
  removeItem: (key) => {
    localStorage.removeItem(key);
    return Promise.resolve();
  },
};

const persistConfig = {
  key: "root",
  storage: customStorage, // 👈 Use the custom wrapper here
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .prepend(cartListener.middleware)      
      .prepend(wishlistListener.middleware),
});

export const persistor = persistStore(store);
