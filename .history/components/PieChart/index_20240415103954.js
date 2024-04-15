import styles from './PieChart.module.css'
import { Bar, Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function HorizontalChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});
    useEffect(() => {
        setChartData({
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [
                {
                    label: '# of votes',
                    data: [12, 19, 3, 5, 2, 3],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: [ 
                        'rgba(53,162,235,0.4)',
                        'rgba(73,162,235,0.4)',
                        'rgba(53,112,235,0.4)',
                        'rgba(53,132,235,0.4)',
                        'rgba(53,162,230,0.4)',
                        'rgba(13,162,235,0.4)'
                    ],
                    borderWidth: 1
                }
            ]
        })
        setChartOptions({
            indexAxis: 'y',
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: true,
            responsive: true
        })
    }, [])
    return(
        <>
            <Pie data={chartData} options={chartOptions} style={{width: '500px', height: '300px'}} />
        </>
    )
}