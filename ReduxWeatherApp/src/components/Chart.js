import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";

export default props => {
  return (
    <div>
      <Sparklines height={300} width={400} data={props.data}>
        <SparklinesLine color={props.color} />
      </Sparklines>
    </div>
  );
};
