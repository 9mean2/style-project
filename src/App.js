import React, { useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 21, name: "김유정" },
    { id: 4, age: 29, name: "구교환" },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  //추가 버튼 핸들러
  const buttonClickHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };

    setUsers([...users, newUser]);
  };

  const deleteButtonClickHandler = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div>
      <div>
        이름 : <input value={name} onChange={nameChangeHandler} /> <br />
        나이 : <input value={age} onChange={ageChangeHandler} /> <br />
        <br />
        <button onClick={buttonClickHandler}>추가</button>
      </div>
      <div className="app-style">
        {users.map(function (item) {
          return (
            <div key={item.id} className="component-style">
              {item.age} - {item.name}{" "}
              <button onClick={() => deleteButtonClickHandler(item.id)}>
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
