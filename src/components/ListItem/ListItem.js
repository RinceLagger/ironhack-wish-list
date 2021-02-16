import React from "react";

import Button from "../Button/Button";

function ListItem({ wish, onRemove }) {
  return (
    <div className="card">
      <p>{wish}</p>
      <Button className="button" wish={wish} onRemove={onRemove} />
    </div>
  );
}

export default ListItem;
