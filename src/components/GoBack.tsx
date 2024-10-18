import React from "react";
import { useStore } from "@/utils/useStore";
import { ArrowLeftIcon } from "lucide-react";

function GoBack() {
  const { setPageSelected } = useStore();

  return (
    <div className="fixed left-0 top-0 p-5">
      <ArrowLeftIcon
        color="white"
        className="cursor-pointer"
        onClick={() => setPageSelected("home")}
      />
    </div>
  );
}

export default GoBack;
