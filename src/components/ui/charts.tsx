import React from 'react';
import EChartsReact, { EChartsOption } from 'echarts-for-react';

interface ChartsProps {
    option: EChartsOption;
}

const Charts: React.FC<ChartsProps> = ({ option }) =>
{
    return (
        <EChartsReact 
            option={option}
            lazyUpdate={true}
            style={{ height: '100%', width: '100%' }}
            notMerge={true}
        />
    )
};

export default Charts;