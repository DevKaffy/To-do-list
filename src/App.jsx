import { useState } from 'react'
import './App.css'
import Button from './Components/Button';

function App() {
  const initialNote = ["React"];
  const [lists, setLists] = useState("");
  const [notes, setNotes] = useState(initialNote);

  const [checked, setChecked] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    setNotes(notes.concat(lists));
    setLists("");
  };

  const handleCheck= (event) => {
    let updatedList = [...checked];
    if (event.target.checked){
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    };

    let isChecked = (list) => checked.includes(list) ? "checked-item": "";

  return (
    <div className="bg-blue-100 h-screen">
      <div className="w-[50vh] mx-auto pt-[10rem] ">
        <h2 className="font-bold text-4xl mb-4">Add Note</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="px-8 py-4 rounded-[5px]"
            type="text"
            value={lists}
            onChange={(e) => setLists(e.target.value)}
          />
          <Button />
          <div className="self-start">
            {notes.map((note, index) => (
              <div key={index} className="flex items-center gap-2 text-xl">
                <input
                  onClick={() => setChecked(index)}
                  onChange={handleCheck}
                  type="checkbox"
                  value={note}
                />
                <span className={isChecked(note)}>{note}</span>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App
