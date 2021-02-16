import React from "react";

import ListItem from "../ListItem/ListItem";

function List({ wishList, setwishList }) {
  const removeItem = (wish) => {
    let newList = [...wishList];

    newList = newList.filter((value) => value.wish != wish);

    setwishList(newList);
  };

  return wishList.map((value, index) => (
    <ListItem key={index} wish={value.wish} onRemove={removeItem}></ListItem>
  ));
}

export default List;
