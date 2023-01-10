import React from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js';
import LableComponent from './lableComponent';
import {default as api} from '../store/apiSlice'
import { chart_Data, totalAmount } from '../helper/helper';

Chart.register(ArcElement);

const GridComponent = () => {
  const {data,isFetching,isSuccess,isError} = api.useGetLablesQuery()
    let graphData;
    
    if(isFetching){
        graphData = <div>Featching</div>
    }else if (isSuccess) {
      graphData = <Doughnut{...chart_Data(data)}/>
    } else if(isError){
        graphData = <div>Error</div>   
    }
  return (
    <div className='flex justify-content max-w-xs mx-auto'>
      <div className='item'>
        <div className='chart relative'>
          {graphData}
          <h3 className='mb-4 font-bold title'>Total
          <span className='block text-3xl text-emerald-500 '>${totalAmount(data)??0}</span>
          </h3>
        </div>

        <div className='flex flex-col py-10 gap-4'>
          {/* lables */}
          <LableComponent/>

        </div>
      </div>
    </div>
  );
}

export default GridComponent;
