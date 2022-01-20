import { React, useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

function ExercisePlot ({plotData}) {
    const [dates, setDates] = useState([]);
    const [minWeights, setMinWeights] = useState([]);
    const [maxWeights, setMaxWeights] = useState([]);
    const [minReps, setMinReps] = useState([]);
    const [maxReps, setMaxReps] = useState([]);

    const [plotType, setPlotType] = useState('weight');
    const [title, setTitle] = useState('min and max weight of each session');

    useEffect(() => {
        setDates([]);
        setMinWeights([]);
        setMaxWeights([]);
        setMinReps([]);
        setMaxReps([]);

        plotData.forEach(i => {
            setDates(dates => [...dates, i.time]);
            setMinWeights(minWeights => [...minWeights, i.min_weight]);
            setMaxWeights(maxWeights => [...maxWeights, i.max_weight]);
            setMinReps(minReps => [...minReps, i.min_reps]);
            setMaxReps(maxReps => [...maxReps, i.max_reps]);
        });
    }, [plotData]);

    function plotTypeChange(e) {
        setPlotType(e.target.value);
        setTitle('min and max ' + e.target.value + ' of each session');
    }

    if (plotData.length > 1) {
        if (plotType === 'weight') {
            return (
                <>
                    <Plot
                    data={[
                        {
                            x: dates,
                            y: maxWeights,
                            type: 'line',
                            mode: 'lines+markers',
                            marker: { color: '#f17300' },
                            line: { color: '#473144'},
                            name: 'max weight'
                        },
                        {
                            x: dates,
                            y: minWeights,
                            type: 'line',
                            mode: 'lines+markers',
                            marker: { color: '#f17300' },
                            line: { color: '#6baa75'},
                            name: 'min weight'
                        }
                    ]}
                    layout={{ title, plot_bgcolor: '#dbe4ee', paper_bgcolor: '#dbe4ee', 'xaxis.title': 'date', 'yaxis.title': 'weight in lbs' }}
                    />

                    <select className='select' onChange={plotTypeChange}>
                        <option value='weight'>weight</option>
                        <option value='reps'>reps</option>
                    </select>
                </>
            );
        }

        return (
            <>
                <Plot
                data={[
                    {
                        x: dates,
                        y: maxReps,
                        type: 'line',
                        mode: 'lines+markers',
                        marker: { color: '#f17300' },
                        line: { color: '#473144'},
                        name: 'max reps'
                    },
                    {
                        x: dates,
                        y: minReps,
                        type: 'line',
                        mode: 'lines+markers',
                        marker: { color: '#f17300' },
                        line: { color: '#6baa75'},
                        name: 'min reps'
                    }
                ]}
                layout={{ title, plot_bgcolor: '#dbe4ee', paper_bgcolor: '#dbe4ee', 'xaxis.title': 'date', 'yaxis.title': 'number of reps' }}
                />

                <select className='select' onChange={plotTypeChange}>
                    <option value='weight'>weight</option>
                    <option value='reps'>reps</option>
                </select>
            </> 
        ); 
    }

    return (
        <>
        </>
    );
}

function addItem(arr, i) {
    arr.push(i);

    return arr;
}

export default ExercisePlot;