import { Link } from 'react-router-dom'

function NavbarItem(props) {
  return (
    <div className="relative">
      <Link className={`my-2 hover:opacity-70 rounded-lg overflow-hidden 
        ${props.active ? 'bg-[#4741A6] text-white' : 'bg-white text-black'} 
        ${props.show ? 'relative' : ''} w-full h-10 border flex items-center shadow-md`}
        to={props.to || ''} >
        <div className="px-2 flex items-center text-2xl">
          <props.icon />
        </div>
        <div className=' min-w-[160px]'>
          {props.title || ''}
        </div>
        {props.noti && props.noti > 0 ?
          <div className={`bg-red-500 w-5 h-5 flex items-center justify-center absolute
          ${props.show ? 'rounded-md right-2' : 'rounded-full -right-2 -top-2'} `}>
            <p className="text-xs text-white">
              {props.noti || '9'}
            </p>
          </div> : ''}
      </Link>
      {props.active ?
        <div className='absolute top-0 bottom-0 -left-[10px] rounded-lg w-1 bg-[#4741A6]'>

        </div>
        : ''}
    </div>
  )
}

export default NavbarItem
