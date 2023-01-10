import React from 'react'
import {default as api} from '../store/apiSlice'
import { getLables } from '../helper/helper'

const lableComponent = () => {

    const {data,isFetching,isSuccess,isError} = api.useGetLablesQuery()
    let Transaction;
    
    if(isFetching){
        Transaction = <div>Featching</div>
    }else if (isSuccess) {
        //console.log( getLables(data,'type'))
        Transaction = getLables(data,'type').map((v,i)=><Lable key={i} data={v} />)
    } else if(isError){
        Transaction = <div>Error</div>   
    }

  return (
    <>
    {Transaction}
    </>
  )
}

export default lableComponent

function Lable({data}){
    if(!data) return <></>
    return(
        <div className='lables flex justify-between'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 rounded py-3' style={{background:data.color??'#f9c74f'}}></div>
                <h3>{data.type??''}</h3>
            </div>
            <h3>{Math.round(data.percent)??0}%</h3>
        </div>
    )
}