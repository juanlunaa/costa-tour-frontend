"use client"
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function ChartBarGroup() {
    const chartRef = useRef(null);

    useEffect(() => {
        const myChart = echarts.init(chartRef.current);

        const option = {
            backgroundColor: '#D1E9FF',
            graphic: {
                type: 'text',
                right: '5%',
                top: '30%',
                style: {
                    text: 'Horarios',
                    fontSize: 16,
                    fontWeight: 'bold',
                    fill: '#333'
                }
            },
            legend: {
                data: ['Mañana', 'Tarde', 'Tarde noche'],
                top: 'center',
                right: 'right',
                width: 140,
                icon: 'circle',
                itemWidth: 20,
                itemHeight: 20,
                textStyle: {
                    fontSize: 14
                }
            },
            grid: {
                top: '10%',
                left: '5%',
                right: '20%',
                bottom: '15%',
                with: 200,
                containLabel: true
            },

            xAxis: {
                type: 'category',
                data: ['Terrestre', 'Acúatico', 'Aereo'],
                axisLabel: {
                    color: '#000',
                    fontSize: 16,
                    margin: 15
                },
                name: 'Categorias de planes extremos',
                nameLocation: 'middle',
                nameGap: 50,
                nameTextStyle: {
                    color: '#363636',
                    fontWeight: 'bold',
                    fontSize: 14
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#CCCCCC',
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: 'números de usuarios',
                nameLocation: 'middle',
                nameGap: 40,
                nameTextStyle: {
                    color: '#363636',
                    fontWeight: 'bold',
                    fontSize: 14
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#CCCCCC',
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            series: [
                {
                    name: 'Mañana',
                    data: [20, 39, 40],
                    type: 'bar',
                    color: '#44BCD7'
                },
                {
                    name: 'Tarde',
                    data: [55, 79, 70],
                    type: 'bar',
                    color: '#FF7777'
                },
                {
                    name: 'Tarde noche',
                    data: [45, 50, 90],
                    type: 'bar',
                    color: '#694BDB'
                }
            ]
        };

        myChart.setOption(option);

        return () => {
            myChart.dispose();
        };
    }, []);

    return <div ref={chartRef} className='shadow-customBoxShadow' style={{ width: '100%', height: '350px', borderRadius: '16px', overflow: 'hidden' }} />;
}