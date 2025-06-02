import React from 'react'

export function Appbar({firstChar}) {
  return (
    <div className='flex bg-slate-300 p-3 justify-between '>
        <div className='ml-3 '>Payment App</div>
        <div className='flex justify-around gap-3 '>
            <div>Hello</div>
            <div className="rounded-full h-6 w-6 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {firstChar.toUpperCase()}
                </div>
            </div>
        </div>
    </div>
  )
}


