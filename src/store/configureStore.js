import { configureStore as configAppStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export default function configureStore() {
  return configAppStore({ reducer });
}
