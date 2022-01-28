import '../styles/sessionForm.css';
import addIcon from '../images/add-iconfinder.png';
import { React, useState } from 'react';
import SelectConcentration from '../components/selectConcentration';
import SelectExercise from '../components/selectExercise';

function SessionForm() {
    const [concentration, setConcentration] = useState('');
    const [exercises, setExercises] = useState([]);
 

    function sendSession(e) {
        e.preventDefault();
        
        const data = { concentration, exercises };
        
        fetch('http://localhost:3001/input_session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    }

    function addExercise(e) {
        e.preventDefault();
    
        if (concentration) {
            setExercises([...exercises, { id: exercises.length, exercise_name: '', sets: [] }]);
        }
    }

    function removeExercise(id) {
        if (id < exercises.length) {
            // remove selected exercise
            setExercises(exercises.filter(i => i.id !== id));

            // fix remaining ids
            for (let i = id; i < exercises.length; i++) {
                exercises[i].id--;
            }
        }
    }

    function exerciseName(id, name) {
        exercises[id].exercise_name = name;
    }

    function updateSets(id, sets) {
        exercises[id].sets = sets;
    }

    function listExercises(e) {
        e.preventDefault();
    }


    return (
        <form>
            <SelectConcentration setConcentration={setConcentration} />

            <div className='exercises'>
                { exercises.map(i => <SelectExercise key={i.id} id={i.id} concentration={concentration} exerciseName={exerciseName} updateSets={updateSets} removeExercise={removeExercise} />) }
                {/*<button className='addExercise' onClick={addExercise}>add exercise</button>*/}
                <img className='addIcon' id='addExercise' src={addIcon} alt='add a new exercise' onClick={addExercise} />
            </div>
            <button onClick={sendSession}>submit</button>
        </form>
    );
}

export default SessionForm;