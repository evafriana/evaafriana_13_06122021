import { configureStore as configAppStore } from "@reduxjs/toolkit";
import reducer from "./auth/reducer";

export default function configureStore() {
  return configAppStore({ reducer });
}