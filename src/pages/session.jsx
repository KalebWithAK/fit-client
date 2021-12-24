import '../styles/session.css';
import addIcon from '../images/add-iconfinder.png';
import { React, useEffect, useState } from 'react';
import SelectConcentration from '../components/selectConcentration';
import SelectExercise from '../components/selectExercise';


function Session() {
    const [concentration, setConcentration] = useState('');
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/')
        .then(res => res.json())
        .then(data => console.log(data));
    }, [])

    /*function sendSession() {
        const data = { concentration, exercises };
    }*/

    function addExercise(e) {
        e.preventDefault();
    
        if (concentration) {
            setExercises([...exercises, { id: exercises.length, name: '', sets: [] }]);
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
        exercises[id].name = name;
    }

    function updateSets(id, sets) {
        exercises[id].sets = sets;
    }

    function listExercises(e) {
        e.preventDefault();

        console.log(exercises);
    }

    /*function sendSession() {
       // TODO - send exercises to server
       fetch() 
    }*/


    return (
        <form>
            <SelectConcentration setConcentration={setConcentration} />

            <div className='exercises'>
                { exercises.map(i => <SelectExercise key={i.id} id={i.id} concentration={concentration} exerciseName={exerciseName} updateSets={updateSets} removeExercise={removeExercise} />) }
                {/*<button className='addExercise' onClick={addExercise}>add exercise</button>*/}
                <img className='addIcon' id='addExercise' src={addIcon} alt='add a new exercise' onClick={addExercise} />
            </div>
            <button onClick={listExercises}>list exercises</button>
        </form>
    );
}

export default Session;