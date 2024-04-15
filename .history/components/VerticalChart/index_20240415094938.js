import styles from './VerticalChart.module.css'
import { Bar, Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
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

export default function VerticalChart() {
    const [cchartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});
    return(
        <>
        
        </>
    )
}