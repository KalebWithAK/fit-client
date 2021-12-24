import '../styles/session.css';
import { React, useState } from 'react';
import InputSet from './inputSet';
import addIcon from '../images/add-iconfinder.png';

function SelectExercise(props) {
    const { id, concentration, exerciseName, updateSets } = props;
    const [sets, setSets] = useState([]);

    function exerciseChange(e) {
        exerciseName(id, e.target.value);
    }

    function getWeight(id, weight) {
        sets[id].weight = weight;
        updateSets(props.id, sets);
    }

    function getReps(id, reps) {
        sets[id].reps = reps;
        updateSets(props.id, sets);
    }

    function newSet(e) {
        e.preventDefault();

        setSets([...sets, { id: sets.length, weight: 0, reps: 0 }]);
        updateSets(id, sets);
    }

    // concentration optgroup goes first
    if (concentration === 'lower body') {
        exerciseName(id, 'squats');

        return (
            <div className='selectExercise'>
                <h3>exercise {id + 1}</h3>
                <select name='exercise' id='exercise' onChange={exerciseChange}>
                    <Lower />
                    <Core />
                    <Upper />
                </select>

                {sets.map(i => <InputSet key={i.id} id={i.id} getWeight={getWeight} getReps={getReps} />)}
                <img className='addIcon' src={addIcon} alt='add a new set' onClick={newSet} />
            </div>
        );
    }
    
    if (concentration === 'upper body') {
        exerciseName(id, 'push ups');

        return (
            <div className='selectExercise'>
                <h3>exercise {id + 1}</h3>
                <select name='exercise' id='exercise' onChange={exerciseChange}>
                    <Upper />
                    <Core />
                    <Lower />
                </select>

                {sets.map(i => <InputSet key={i.id} id={i.id} getWeight={getWeight} getReps={getReps} />)}
                <img className='addIcon' src={addIcon} alt='add a new set' onClick={newSet} />
            </div>
        );
    }

    if (concentration === 'core') {
        exerciseName(id, 'dead bugs');

        return (
            <div className='selectExercise'>
                <h3>exercise {id + 1}</h3>
                <select name='exercise' id='exercise' onChange={exerciseChange}>
                    <Core />
                    <Lower />
                    <Upper />
                </select>

                {sets.map(i => <InputSet key={i.id} id={i.id} getWeight={getWeight} getReps={getReps} />)}
                <img className='addIcon' src={addIcon} alt='add a new set' onClick={newSet} />
            </div>
        );
    }

    /*return (
        <div className='selectExercise'>
            <h3>exercise {id + 1}</h3>
            <select name='exercise' id='exercise' onChange={exerciseChange}>
                    <option disabled selected>no name</option>
                    <Core />
                    <Lower />
                    <Upper />
            </select>

            {sets.map(i => <InputSet key={i.id} id={i.id} getWeight={getWeight} getReps={getReps} />)}
            <button onClick={newSet}>new set</button> 
        </div>
    );*/
}

function Lower() {
    return (
        <>
            <optgroup label='lower body'>
                <option value='squats'>squats</option>
                <option value='calf rasies'>calf raises</option>
                <option value='leg press'>leg press</option>
            </optgroup>
        </>
    );
}

function Upper() {
    return (
        <>
            <optgroup label='upper body'>
                <option value='push ups'>push ups</option>
                <option value='bench press'>bench press</option>
                <option value='bicep curl'>bicep curl</option>
                <option value='dumbbell lateral raise'>dumbbell lateral raise</option>
                <option value='shoulder roll'>shoulder roll</option>
            </optgroup>
        </>
    )
}

function Core () {
    return (
        <>
            <optgroup label='core'> 
                <option value='dead bugs'>dead bugs</option>
                <option value='flutter kicks'>flutter kicks</option>
            </optgroup> 
        </>
    );
}

export default SelectExercise;