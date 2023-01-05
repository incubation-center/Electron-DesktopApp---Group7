import React from "react";
import { userInfo } from "@/services/auth";

function Attandance() {
  const addAttd = () => {};
  return (
    <div>
      userInfo.role == "teacher" && <button onClick={addAttd}>add</button>
      None
    </div>
  );
}

export default Attandance;
