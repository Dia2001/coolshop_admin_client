import React from 'react'

const CardStatistic = ({item}) => {
  return (
    // [${item.color===''?'bg-WarningColor':item.color}]
    <div className={`p-6 rounded-[6px] cursor-pointer shadow-sm flex items-center  gap-4 h-[120px] w-[250px]  ${item.color!==undefined?item.color:'bg-WarningColor/90'} text-white`}>
        <item.Icon size={45} className={`font-bold bg-MainBlue/75 rounded-full w-[60px] h-[60px] text-BlackCool/90`}/>
        <div>
            <h5 className="font-semibold">{item.title}</h5>
            <h6 className="flex gap-1 items-center">{item.data}<item.Suffix/></h6>
        </div>
    </div>
  )
}

export default CardStatistic