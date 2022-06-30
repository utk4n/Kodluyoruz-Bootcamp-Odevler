import { useState } from "react";
import SelectedItem from "./SelectedItem"
import ListItem from "./ListItem"

// Butonların işlevselleştirilmesi.

function List({data}) {

    const [filtered, setFiltered] = useState("all");

    const handleClick = (group) => {
        setFiltered(group);
    }
    
    return(
        <>
            <SelectedItem data={data} filtered={filtered} setFiltered={setFiltered} handleClick={handleClick} />
            <ListItem filtered={filtered} data={data}/>
        </>
    );
}
export default List;