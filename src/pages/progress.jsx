import '../styles/progress.css';
import { React, useEffect, useState } from 'react';
import ExerciseStats from '../components/exerciseStats';
import ExercisePlot from '../components/exercisePlot';

function Progress() {
    const [exercise_name, setName] = useState('');

    // exerciseStats logic
    const [stats, setStats] = useState({});
    
    function getStats() {
        fetch('http://localhost:3001/data/exercises', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ exercise_name, show_stats: true })
        })
        .then(response => response.json())
        .then((data) => {
            setStats(data)
        })
        .catch(err => console.log('Error: ' + err));
    }


    function handleSubmit(e) {
        e.preventDefault();

        getStats();
        getPlotData();
    }

    function handleNameChange(e) {
        setName(e.target.value.trim());
    }

    // exercisePlot logic
    const [plotData, setPlotData] = useState([]);

    function getPlotData() {
        fetch('http://localhost:3001/data/exercises', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ exercise_name, plot_data: true})
        })
        .then(response => response.json())
        .then((data) => {
            setPlotData(data);
        })
        .catch(err => console.log('Error: ' + err));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor='exerciseInput'>Exercise Name</label>
                <input id='exerciseInput' type='text' onChange={handleNameChange} />
            </form>
        
            <div className='data'>
                <ExerciseStats stats={stats} />
                <ExercisePlot plotData={plotData} />
            </div>
        </>
    )
}

export default Progress;