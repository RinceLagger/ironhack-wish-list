import React from "react";

const initialState = {
  wish: "",
};

function InputForm({ wishList, setwishList }) {
  const [formState, setFormState] = React.useState(initialState);

  const handleChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newWish = { ...formState };

    const newWishList = [...wishList, newWish];
    setwishList(newWishList);
    setFormState(initialState);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="wish">Wish</label>
      <input
        type="text"
        name="wish"
        id="wish"
        required
        value={formState.wish}
        onChange={handleChange}
      />

      <button type="submit">Add Wish</button>
    </form>
  );
}

export default InputForm;
