import React, { useContext } from 'react'
import CartContext from '../Context/CartContext'

const Cart = () => {
    let ctx = useContext(CartContext)
  return (
    <div>
        
     

        {/* <!-- component --> */}
<div className="flex flex-col w-[100%]">
  <div className="overflow-x-auto  ">
    <div className=" inline-block w-[100%]  ">
      <div className="overflow-hidden">
        <table className="w-[100%] bg-black md-flex md-flex-col">
          <thead className="bg-black text-white border-b w-[100%] md-flex md-flex-col">
            <tr className='sm-flex sm-flex-col sm-flex-wrap'>
              <th scope="col" className="text-xl font-bold  px-6 py-5 text-left ">
                Sno
              </th>
              <th scope="col" className="text-xl font-bold  px-6 py-5 text-left ">
                Product
              </th>
              <th scope="col" className="text-xl font-bold  px-6 py-5 text-left ">
                Title
              </th>
              <th scope="col" className="text-xl font-bold  px-6 py-5 text-left ">
                Price
              </th>
              <th scope="col" className="text-xl font-bold  px-6 py-5 text-left ">
                Quantity
              </th>
              <th scope="col" className="text-sm font-medium  px-6 py-5 text-left">
                
              </th>
              
            </tr>
          </thead>
          <tbody>
           {
            ctx.cartArr.map((item,index)=>{
              return  <tr className="bg-gray-100 border-b w-[100%]">
                <th scope="row" className="text-2xl font-medium  px-6 py-4 text-left">
                {index+1}.
                </th>
              

              <td className="text-xl black font-light px-6 py-4 whitespace-nowrap">
                <img className='w-[90px] h-[80px]' src={item.thumbnail} alt="" />
              </td>
              <td className="text-xl text-black fontbold  px-6 py-4 whitespace-nowrap ">
                {item.title}
              </td>
              <td className="text-xl text-black fontbold  px-6 py-4 whitespace-nowrap ">
              {Math.round(item.price)}$
              </td>
              <td className="text-xl text-black fontbold  px-6 py-4 whitespace-nowrap ">
                1
              </td>
              <td className="text-xl text-black font-bold px-6 py-4 whitespace-nowrap   ">
                <div className='flex w-[100px] gap-2'>
                <button className='bg-blue-700 text-white text-2xl rounded-xl font-bold px-3 py-2'>+</button>
                <button className='bg-blue-700 text-white text-2xl rounded-xl font-bold px-4 py2'>-</button>
                </div>
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button className='bg-red-500 text-white rounded-xl p-3 text-xl'>Delete</button>
              </td>
            </tr>
            })
           }
          
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}

export default Cart


{/* <div className='flex justify-evenly items-center bg-blue-200'>
<img src={item.thumbnail} alt="" />
<h1 className='text-2xl font-bold'>{item.title}</h1>
<h1 className='text-xl font-bold'>Price:-{Math.round(item.price)}$</h1>
<button className='bg-red-500 p-3 rounded-xl text-white'>Delete</button>
</div> */}



