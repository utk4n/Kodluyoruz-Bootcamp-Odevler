import Logout from './Logout'
import Tab from '../NavBar/Tab'
import style from '../NavBar/navbar.module.css'
import dashboard from './img/dashboard.svg'
import members from './img/members.svg'
import modules from './img/modules.svg'
import projects from './img/projects.svg'
import sprint from './img/sprint.svg'
import report from './img/report.svg'
import collapse from './img/collapse.svg'

const Navbar = () => {
    return (
        <nav>
            <div className={style.navlinks_wrapper}>
                <div className={style.logo}>
                    <div className="logo">ChirKuut</div>
                    <img className={style.collapse} src={collapse} />
                </div>
                <Tab activeTab={1}>
                    <Tab.Panel>  <div><img src={dashboard}></img><span className={style.hide}> Dashboard </span></div></Tab.Panel>
                    <Tab.Panel> <div className={style.active}><img src={projects}></img><span className={style.hide}>Projects</span></div></Tab.Panel>
                    <Tab.Panel><div><img src={modules}></img><span className={style.hide}>Modules </span></div></Tab.Panel>
                    <Tab.Panel> <div><img src={sprint}></img><span className={style.hide}>Sprint </span></div></Tab.Panel>
                    <Tab.Panel><div><img src={members}></img><span className={style.hide}>Members </span></div></Tab.Panel>
                    <Tab.Panel> <div><img src={report}></img><span className={style.hide}>Reports </span></div></Tab.Panel>
                </Tab>
            </div>
            <Logout />
        </nav>
    )
}

export default Navbar;