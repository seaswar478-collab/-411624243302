import { Link } from "react-router-dom"
export default function Navbar(){
    return(
        <ul>
            <li>
                <Link to='/home'>Home</Link>
            </li>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    )
}