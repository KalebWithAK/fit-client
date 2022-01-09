import { React } from 'react';

function ExerciseStats(props) {
    if (props.stats.max_weight) {
        const { max_weight, max_reps, avg_weight, avg_reps, total_sets, total_reps } = props.stats;

        return (
            <div className='stats'>
                <p>Max Weight</p>
                <p>{max_weight}</p>
                <p>Max Reps</p>
                <p>{max_reps}</p>
                <p>Avg Weight</p>
                <p>{avg_weight.toFixed(2)}</p>
                <p>Avg Reps</p>
                <p>{avg_reps.toFixed(2)}</p>
                <p>Total Sets</p>
                <p>{total_sets}</p>
                <p>Total Reps</p>
                <p>{total_reps}</p>
            </div>
        );
    }

    if (props.stats.max_reps) {
        const { max_reps, avg_reps, total_sets, total_reps } = props.stats;


        return (
            <div className='stats'>
                <p>Max Reps</p>
                <p>{max_reps}</p>
                <p>Avg Reps</p>
                <p>{avg_reps.toFixed(2)}</p>
                <p>Total Sets</p>
                <p>{total_sets}</p>
                <p>Total Reps</p>
                <p>{total_reps}</p>
            </div> 
        );
    }
    
    if (props.stats.name === null) {
        return (
            <div className='stats' style={{ display: 'block', textAlign: 'center' }}>
                <p>That exercise has no data</p>
            </div>
        );
    }

    return (
        <div>
        </div>
    );
}


export default ExerciseStats;