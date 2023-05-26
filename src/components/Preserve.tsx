import useData from "../hooks/usePreserve";

function ComponentA() {
  const { getData, updateData } = useData();
  const currentData = getData();
  
  const handleClick = () => {
    updateData(getData() + 4);
  };

  return (
    <div>
      <h2>Component A</h2>
      <button onClick={handleClick}>Update Data {currentData}</button>
    </div>
  );
}



function ComponentB() {
  const { getData } = useData();
  const currentData = getData();
  console.log('Current Data in Component B:', currentData);

  return (
    <div>
      <h2>Component B</h2>
      <p>Data: {currentData}</p>
    </div>
  );
}



export default function Preserve() {
  return (
    <div>
      <ComponentA />
      <ComponentB />
    </div>
  );
}