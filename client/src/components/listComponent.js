import React from 'react'
import 'boxicons'
import {default as api} from '../store/apiSlice'

// const obj = [
//     {
//         name:'Saving',
//         color:'green'
//     },
//     {
//         name:'Invest',
//         color:'cyan'
//     },
//     {
//         name:'Expense',
//         color:'red'
//     }
// ]

const listComponent = () => {
    const {data,isFetching,isSuccess,isError} = api.useGetLablesQuery()
    const [deleteRecord] = api.useDeleteRecordMutation()
    //console.log(data);
    let Transactions;
    
    const handlerClick = (e) => {
        if(!e.target.dataset.id) return 0;
        deleteRecord({_id:e.target.dataset.id})
    }

    if(isFetching){
        Transactions = <div>Featching</div>
    }else if (isSuccess) {
        Transactions = data.map((v,i)=><Transaction key={i} category={v} handler={handlerClick} />)
    } else if(isError){
        Transactions = <div>Error</div>   
    }
  return (
    <div className='flex flex-col py-6 gap-3'>
        <div className='py-4 font-bold text-xl'>History</div>
        {Transactions}
    </div>
  )
}

export default listComponent

function Transaction({category,handler}) {
    if(!category) return null;
    return(
        <div className='item flex justify-center bg-gray-50 py-2 rounded-r cursor-pointer' 
        style={{borderRight:`8px solid ${category.color}`}}>
            <button className='px-3 cursor-pointer' onClick={handler}>
                <box-icon data-id={category._id??''} color={category.color} name="trash"/>
            </button>
            <span className='block w-full'>{category.name??''}</span>
        </div>
    )  
}