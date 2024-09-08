
import { useId } from "react";
import css from "./SearchBox.module.css"


export default function SearchBox({ value, onSearch }) {
    const searchId =useId()
    return (

<div className={css.searchContainer}>
  <label htmlFor={searchId} className={css.labelText}>Find contacts by name</label>
  <input type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
            />
</div>
    )
}

