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
    LinearScale,
    BarElement,
    Title,
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
            labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            datasets: [
                {
                    label: 'Data 1',
                    data: [69, 420, 200],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(53,162,235,0.4)'
                },
                {
                    label: 'Data 2',
                    data: [69, 420, 200],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(53,162,235,0.4)'
                },
                {
                    label: 'Data 3',
                    data: [69, 420, 200],
                    borderColor: 'rgb(53,162,235)',
                    backgroundColor: 'rgba(53,162,235,0.4)'
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
            <Bar data={chartData} options={chartOptions} style={{width: '500px', height: '300px'}} />
        </>
    )
}