import React, { useEffect, useState } from "react";
import { revenueData, topSongsData, userGrowthData } from "../dataset";
import Charts from "./ui/charts";
import { formatNumber } from "../helpers/helpers";
import { APP_CONSTANTS } from "../constants";
import { useDashboard } from "../contexts/DashboardContext";

const DataVisualisation = () =>
{

    const { setFilterBy } = useDashboard();

    const [userGrowthModifiedData, setUserGrowthModifiedData] = useState([]);
    const [topSongsModifiedData, setTopSongsModifiedData] = useState([]);

    const handlePieChartClick = (params) => {
        setFilterBy(params.name); 
    };

    // user growth chart option
    const userGrowthChartOption = {
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        legend: {
            show: true,
            data: ['Total Users', 'Active Users'],
            icon: 'circle',
            selected: {
                'Total Users': true,
                'Active Users': true,
            },
        },
        xAxis: {
            type: 'category',
            data: userGrowthData?.map((data) => data.month),
            axisTick: {
                show: false
            },
            name: 'Month',
            nameLocation: 'middle',
            nameGap: 30,
            axisLabel: {
                // interval: 0,
                rotate: 45,
                textStyle: {
                    color: '#333',
                    fontSize: 12,
                    fontWeight: 'bold',
                    width: 50,
                },
                formatter: function (value) {
                    return value.split(' ').map((item, index) => {
                        return index % 2 === 0 ? `${item}\n` : item;
                    }).join(' ');
                }
            }
        },
        yAxis: {
            splitLine: {
                show: false,
                lineStyle: {
                    type: 'value'
                }
            },
            name: 'Users',
            nameLocation: 'middle',
            nameGap: 50,
            axisLabel: {
                formatter: (value) => formatNumber(value),
            }
        },
        series: ['Total Users', 'Active Users'].map((seriesName, index) => {
            return {
                name: seriesName,
                type: 'line',
                data: userGrowthModifiedData[index],
                smooth: true,
                showSymbol: false,
                stack: 'total',
                containLabel: false,
                emphasis: {
                    focus: 'series'
                },
                itemStyle: {
                    color: APP_CONSTANTS.CHART_DEFAULT_COLORS[index],
                    emphasis: {
                        color: APP_CONSTANTS.CHART_HOVER_COLORS[index],
                    }
                },
                label: {
                    show: false
                },
            }
        })
    };
    
    // revenue chart option
    const revenueChartOption = {
        tooltip: {
            trigger: 'item',
            formatter: (params) => {
                const percentage = ((params.value / revenueData.reduce((sum, data) => sum + data.value, 0)) * 100).toFixed(2);
                return `${params.marker} ${params.name}: ${percentage}%`;
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        legend: {
            type: 'scroll',
            show: true,
            orient: 'horizontal',
            left: 'center', 
            icon: 'circle',
            padding: [8, 8, 8, 8],
            data: revenueData.map((data) => data.type),
        },
        series: [
            {
                type: 'pie',
                radius: '75%',
                color: APP_CONSTANTS.CHART_DEFAULT_COLORS,
                itemStyle: {
                    borderRadius: 4,
                    borderColor: '#fff',
                    borderWidth: 2,
                },
                data: revenueData.map((data) => ({
                    value: data.value,
                    name: data.type,
                    label: {
                        show: false,
                        position: 'outside',
                        formatter: (params) => `$${formatNumber(params.value)}`,
                    },
                    labelLine: {
                        show: false,
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 20,
                            fontWeight: 'bold',
                            position: 'inside',
                        },
                        labelLine: {
                            show: false,
                        },
                    },
                    itemStyle: {
                        emphasis: {
                            color: APP_CONSTANTS.CHART_HOVER_COLORS[revenueData.findIndex((item) => item.type === data.type)],
                        },
                    },
                })),
            },
        ],
        on: {
            click: handlePieChartClick,
        },
    };          
    
    // top songs chart option
    const topSongsChart = {
        color: APP_CONSTANTS.CHART_DEFAULT_COLORS[0],
        tooltip: {
            trigger: 'item'
        },
        dataset: {
            source: topSongsModifiedData
        },
        calculable: true,
        legend: {
            show: true,
            orient: 'horizontal',
            left: 'left',
            icon: 'circle',
            padding: [8, 8, 8, 8],
        },
        xAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            data: topSongsModifiedData[0],
            axisLabel: {
                interval: 0,
                rotate: 45,
                textStyle: {
                    color: '#333',
                    fontSize: 12,
                    fontWeight: 'bold',
                    width: 50,
                },
                formatter: function (value) {
                    return value.split(' ').map((item, index) => {
                        return index % 2 === 0 ? `${item}\n` : item;
                    }).join(' ');
                }
            }
        },
        yAxis: {
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dotted'
                }
            },
            axisLabel: {
                formatter: (value) => formatNumber(value),
            }
        },
        series: [
            {
                type: 'bar',
                barWidth: '50%',
                data: topSongsModifiedData[1],
                label: {
                    show: true,
                    position: 'top',
                    color: '#333',
                    fontSize: 12,
                    fontWeight: 'bold',
                    formatter: (params) => formatNumber(params.value)
                },
                itemStyle: {
                    color: APP_CONSTANTS.CHART_DEFAULT_COLORS[0],
                    emphasis: {
                        color: APP_CONSTANTS.CHART_HOVER_COLORS[0],
                    }
                },
            }
        ]
    };
      
    const modifyUserGrowthData = () => {
        let totalUsersData = [];
        let activeUsersData = [];
        
        let totalSum = 0;
        let activeSum = 0;
        
        for (let i = 0; i < userGrowthData.length; i++) {
            totalSum += userGrowthData[i].totalUsers;
            activeSum += userGrowthData[i].activeUsers;
            
            totalUsersData.push(totalSum);
            activeUsersData.push(activeSum);
        }
        
        return [totalUsersData, activeUsersData];
    };

    const modifyTopSongsData = () => {
        const xAxisData = topSongsData.map(song => song.name); // Extract song names for xAxis
        const yAxisData = topSongsData.map(song => song.streams); // Extract streams for yAxis

        return [xAxisData, yAxisData];
    };

    useEffect(() =>
    {
        setUserGrowthModifiedData(modifyUserGrowthData());
        setTopSongsModifiedData(modifyTopSongsData());
    }, []);

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-lg shadow-md">
                    <div className="text-2xl font-semibold">User Growth</div>
                    <div className="h-64">
                        <Charts
                            option={userGrowthChartOption}
                        />
                    </div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-md">
                    <div className="text-2xl font-semibold">Revenue</div>
                    <div className="h-64">
                        <Charts
                            option={revenueChartOption}
                        />
                    </div>
                </div>
                <div className="bg-card p-4 rounded-lg shadow-md">
                    <div className="text-2xl font-semibold">Top Songs</div>
                    <div className="h-64">
                        <Charts
                            option={topSongsChart}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataVisualisation;