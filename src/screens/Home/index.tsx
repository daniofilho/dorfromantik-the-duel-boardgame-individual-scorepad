"use client";

import { UseControllerProvider } from "./hooks/useController";
import View from "./View";
export default function Home() {
  return (
    <UseControllerProvider>
      <View />
    </UseControllerProvider>
  );
}
