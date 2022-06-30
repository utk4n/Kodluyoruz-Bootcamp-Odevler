//Groupların teke indirgenip menü butonu olarak ayarlanması.

function SelectedItem({data, handleClick }) {
  const listItem = data
    .reduce((init, val) => {
      if (!init.includes(val.group)) init.push(val.group);
      return init;
    }, [])
    .map((group) => (
      <li key={group}>
        <button onClick={() => handleClick(group)}>{group}</button>
      </li>
    ));

  return (
    <ul>
      {listItem}
      <li>
        <button onClick={() => handleClick("all")}>All Members</button>
      </li>
    </ul>
  );
}
export default SelectedItem;
