import React from "react";

export default function Metadata(props) {
  return (
    <>
      <title>{props.title}</title>
      <meta
        name="description"
        content={props.description}
      />
    </>
  );
}
