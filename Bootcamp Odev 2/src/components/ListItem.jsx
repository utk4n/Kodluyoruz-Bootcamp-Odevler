//Gruplara isimlerin filtrelenmesi.

function ListItem({ filtered, data }) {
  const filteredList =
    filtered !== "all" &&
    data
      .filter((filter) => filter.group === filtered)
      .map((item) => <li key={item.id}>{item.name}</li>);

  return (
    <>
      <ul>{filteredList ? filteredList : data.map(item => <li key={item.id}>{item.name}</li>)}</ul>
    </>
  );
}
export default ListItem;
