export default function Contact({ data: { id, name, number }, onDelete }) {
    return (
        <div>
            <ul>
                <li>{name}</li>
                <li>{ number}</li>
                <button type="button" onClick={() => onDelete(id)}>Delete</button>
           </ul>
        </div>
    )
}