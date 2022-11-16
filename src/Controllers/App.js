import { useEffect, useState } from 'react';
import HomeIndex from '../Views/HomeIndex';
import Lunch from '../Models/Lunch';

export default function App() {
  const requestURI = 'https://localhost:7246/api/Lunch/';

  var idx = null;
  var id = null;
  const [refresh, setRefresh] = useState(() => false);
  var [data, setData] = useState(() => []);
  var lunch = new Lunch();
  var lunches = data;
  var showEdit = false;
  var showCreate = false;
  var showDelete = false;

  // GET
  useEffect(() => {
    fetch(requestURI)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setRefresh(false);
      });
  }, [refresh]);

  lunches = data;
  // console.log(lunches);

  // PUT
  function PutData(dataObj, id) {
    fetch(requestURI + id, {
      method: 'PUT',
      body: JSON.stringify(dataObj),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => {
      if (response.status !== 204) {
        console.log('PUT Failed', response);
        return;
      } else {
        console.log('PUT Succeeded', response);
      }
    });
  }

  // POST
  function PostData(dataObj) {
    // console.log(dataObj);
    fetch(requestURI, {
      method: 'POST',
      body: JSON.stringify(dataObj),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => {
      if (response.status !== 201) {
        console.log('POST Failed', response);
        return;
      } else {
        setRefresh(true);
        console.log('POST Succeeded', lunches);
      }
    });
  }

  // DELETE
  function DeleteData(dataObj, id) {
    fetch(requestURI + id, {
      method: 'DELETE',
      body: JSON.stringify(dataObj),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    }).then((response) => {
      if (response.status !== 204) {
        console.log('DELETE Failed', response);
        return;
      } else {
        setRefresh(true);
        console.log('DELETE Succeeded', lunches);
      }
    });
  }

  // console.log('lunch is ', lunches);
  var selection = [
    idx,
    id,
    lunch,
    lunches,
    showEdit,
    showCreate,
    showDelete,
    PutData,
    PostData,
    DeleteData,
  ];

  return <HomeIndex data={selection} />;
}
