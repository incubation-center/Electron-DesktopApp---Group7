import { useRequest } from "ahooks";
import React from "react";
import { getStudents } from "../services/student";

const StudentPage = () => {
  const { data, error, loading } = useRequest(getStudents);
  return <div>student</div>;
};

export default StudentPage;
