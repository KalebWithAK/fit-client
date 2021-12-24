import { React, useEffect } from 'react';

function SelectConcentration(props) {
    const { setConcentration } = props;
    useEffect(() => {
        setConcentration('lower body');
    });


    function handleChange(e) {
        props.setConcentration(e.target.value);
    }

    return (

        <div className='selectConcentration'>
            <h2>concentration</h2>
            <select name='concenctration' onChange={handleChange}>
                <option value='lower body'>lower body</option>
                <option value='upper body'>upper body</option>
                <option value='core'>core</option>
            </select>
        </div>
    );
}

export default SelectConcentration;