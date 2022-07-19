import style from '../NavBar/logout.module.css'
import logout from './img/logout.svg'
const Logout = () => {
    return (
        <div className={style.logout}>
            <a href="#">Log Out</a>
        </div>
    )
}

export default Logout;