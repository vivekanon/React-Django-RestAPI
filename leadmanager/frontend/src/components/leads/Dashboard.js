import React, { Fragment } from "react";
import Form from "./Form.js";
import Leads from "./Leads";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Leads />
    </Fragment>
  );
}
