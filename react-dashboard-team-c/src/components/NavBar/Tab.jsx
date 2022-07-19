import { useState } from "react"
import tab from '../NavBar/activeNavbar.module.css'
const Tab = ({ children, activeTab }) => {
    const [active, setActive] = useState(activeTab)
    return (
        <>
            {children.map((menu, index) => <div id={tab.menu_btns} key={index} className={active === index ? tab.active : ""} onClick={() => setActive(index)}>{menu}</div>)}
        </>
    )

}


Tab.Panel = function ({ children }) {
    return (<div>{children}</div>)
}



export default Tab;