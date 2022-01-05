import { configureStore as configAppStore } from "@reduxjs/toolkit";
import reducer from "./projects/reducer";

export default function configureStore() {
  return configAppStore({ reducer });
}
