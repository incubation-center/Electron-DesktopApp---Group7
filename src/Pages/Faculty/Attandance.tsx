import React from "react";
import Button from "@/Components/Button";

import data from "../data.json";
import Table from "@/Components/Table";
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
