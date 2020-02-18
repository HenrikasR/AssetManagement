import React, { useEffect, useState } from 'react';


const App = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/getAllAssets')
    .then((resolve, reject) => {
      return resolve.json()
    })
    .then((resolve, reject) => {
      console.log(resolve);
      const assets = resolve.map((asset, index) => {
      return <div key={index}>id:{asset.id} name:{asset.name} user: {asset.user}</div>
      })
      setTableData(assets);
    })
  }, []);

  return (
    <div className="App">
      {!tableData.length && <h1>'loading...'</h1>}
      {tableData}
    </div>
  );
}

export default App;
