
import './App.css';

const apiUrl = 'http://localhost:52069/api/students/';

function App() {

  function btnGetAll() {
    console.log('start');

    fetch(apiUrl,
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8',
        })
      })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          result.map(st => console.log(st.Name));
          console.log('result[0].Grade=', result[0].Grade);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('end');
  }

  function btnGetByID() {
    console.log('start');
    let id = 2;
    fetch(apiUrl + id,
      {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8',
        })
      })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          console.log('result.Grade=', result.Grade);
          console.log('result.Name=', result.Name);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('end');
  }

  function btnPost() {
    console.log('start');

    let newStudent =
    {
      "ID": 7,
      "Name": "tal",
      "Grade": 97
    };

    fetch(apiUrl,
      {
        method: 'POST',
        body: JSON.stringify(newStudent),
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8',
        })
      })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('end');
  }

  function btnPut() {
    console.log('start');

    let updatedStudent =
    {
      "ID": 2,
      "Name": "tal",
      "Grade": 97
    };

    fetch(apiUrl + updatedStudent.ID,
      {
        method: 'PUT',
        body: JSON.stringify(updatedStudent),
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8',
        })
      })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          console.log('result.Grade=', result.Grade);
          console.log('result.Name=', result.Name);
        },
        (error) => {
          console.log("err post=", error);
        });

    console.log('end');
  }

  function btnDelete() {
    console.log('start');
    let id = 2;
    fetch(apiUrl + id,
      {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json; charset=UTF-8',
          'Accept': 'application/json; charset=UTF-8',
        })
      })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        
        if (res.ok)
          console.log('was deleted:)');
        else
          console.log('wasnt deleted:(');
      });

    console.log('end');
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={btnGetAll}>Get ALL</button> <br />
        <button onClick={btnGetByID}>Get Student BY ID</button> <br />
        <button onClick={btnPost}>POST Student</button> <br />
        <button onClick={btnPut}>Put</button> <br />
        <button onClick={btnDelete}>Delete</button> <br />
      </header>
    </div>
  );
}

export default App;
