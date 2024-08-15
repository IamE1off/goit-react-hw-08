import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css"
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";


export default function HomePage() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);

    return (
        <div className={css.container}>
            {isLoggedIn ? <h1>Welcome, {user.name}!</h1> : <h1> Welcome!</h1>} <h1>This is your own web Phonebook ☎️</h1>
            <h2>Here you can add, delete and filter your contacts just in a few seconds!</h2>
            {!isLoggedIn ? <p className={css.txt}>Before starting using the app please<br /><NavLink to="/register" className={css.logTxt}>Register</NavLink> for new users or <br /><NavLink to="/login" className={css.logTxt}>Log in</NavLink> whether you have already got your account</p>
                : <p className={css.txt}>Click on Contacts above to find your Phonebook</p>}
        </div>

    )
}