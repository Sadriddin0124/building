import React from 'react'

const BtnOutline = ({value}) => {
  return (
    <button type='submit' className='whitespace-nowrap px-[20px] py-[8px] border-2 border-[#fff] text-white rounded-full hover:text-black hover:bg-white transition-all'>{value}</button>
  )
}

export default BtnOutline
