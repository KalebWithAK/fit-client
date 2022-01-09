import { React, useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

function ExercisePlot (props) {
    const [dates, setDates] = useState([]);
    const [minWeights, setMinWeights] = useState([]);
    const [maxWeights, setMaxWeights] = useState([]);
    const [minReps, setMinReps] = useState([]);
    const [maxReps, setMaxReps] = useState([]);

    const [plotType, setPlotType] = useState('weight');
    const [title, setTitle] = useState('min and max weight of each session');

    useEffect(() => {
        addValues(props.plotData);
    }, [props.plotData]);

    function addValues(arr) {
        if (arr.length > 0) {
            setDates([]);

            setMinWeights([]);
            setMaxWeights([]);

            setMinReps([]);
            setMaxReps([]);

            if (arr.length > 1) {
                arr.forEach(i => {
                    setDates([...dates, new Date(i.time)]);

                    setMinWeights([...minWeights, i.min_weight]);
                    setMaxWeights([...maxWeights, i.max_weight]);

                    setMinReps([...minReps, i.min_reps]);
                    setMaxReps([...maxReps, i.max_reps]);
                });
            }
            else {
                setDates([new Date(arr[0].time), new Date()]);

                setMinWeights([arr[0].min_weight, 0]);
                setMaxWeights([arr[0].max_weight, 0]);

                setMinReps([arr[0].min_reps, 0]);
                setMaxReps([arr[0].max_reps, 0]);
            }
        }
    }

    function plotTypeChange(e) {
        setPlotType(e.target.value);
        setTitle('min and max ' + e.target.value + ' of each session');
    }

    if (props.plotData.length > 0) {
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

export default ExercisePlot;