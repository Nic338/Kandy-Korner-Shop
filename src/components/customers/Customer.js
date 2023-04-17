import { Link } from "react-router-dom"

export const Customer = ({id, name, email}) => {
    //each customer will have a link on their name to show more details about them
    return <section className="customer">
        <div>
            <Link to={`/customers/${id}`}>Name: {name}</Link>
        </div>
        <div>Email: {email}</div>
    </section>
}