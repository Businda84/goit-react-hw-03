
import { useId } from "react";

export default function SearchBox({ value, onSearch }) {
    const searchId =useId()
    return (

<div>
  <label htmlFor={searchId}>Find contacts by name</label>
  <input type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
            />
</div>
    )
}