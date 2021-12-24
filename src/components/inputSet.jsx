import { React } from 'react';

function InputSet(props) {
    const { id } = props;

    function handleWeight(e) {
        let weight = Number(e.target.value);
        if (weight < 0) {
            weight = 0;
        }
        props.getWeight(id, weight);
    }

    function handleReps(e) {
        let reps = Number(e.target.value);
        if (reps <= 0) {
            reps = 1
        }
        props.getReps(id, reps);
    }


    return (
        <div className='inputSet'>
            {/* set number should increase when set is added */}
            <h4>set {id + 1}</h4>
            <label htmlFor='weight'>weight:</label>
            <input type='number' id='weight' name='weight' placeholder='lbs' onChange={handleWeight} />

            <label htmlFor='reps'>reps:</label>
            <input type='number' id='reps' name='reps' onChange={handleReps} />
        </div>
    );
}

export default InputSet;