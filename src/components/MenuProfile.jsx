import { MdKeyboardArrowRight } from 'react-icons/md'
import { CgCrown } from 'react-icons/cg'
import { AppContext } from '../Providers/ApplicationContext'
import { useContext } from 'react'

function MenuProfile({ toggleMenu, isShowMenu }) {
  const { userLogin } = useContext(AppContext)

  const handleToggleMenu = () => {
    if (typeof toggleMenu === 'function') {
      toggleMenu(!isShowMenu)
    }
  }
  if (userLogin) {
    return (
      <div className={`${isShowMenu ? 'w-[30vw]' : 'translate-x-[100%]'} transition-al fixed h-[100vh] right-0 rounded-tl-2xl rounded-bl-2xl bg-white shadow-lg`}
        style={{ zIndex: 100 }}>
        {isShowMenu ?
          <button
            onClick={handleToggleMenu}
            className="p-1 rounded-full text-4xl absolute left-2 top-2 bg-white shadow-md shadow-gray-400 hover:opacity-70 w-10 h-10 flex items-center justify-center">
            <>
              <MdKeyboardArrowRight className='-mr-6' />
              <MdKeyboardArrowRight />
            </>
          </button>
          : <></>
        }

        <div className={`flex flex-col items-center`}>
          <img className='rounded-full mt-6 w-36 h-36 overflow-hidden' src="https://1.bp.blogspot.com/-G6N89Ccg_lE/VRn-Etym1TI/AAAAAAAAFQQ/aYJHG3R8_xA/s1600/hinh-nen-may-tinh-full-hd-dep-me-hon.jpg" alt="" />

          <div className="flex items-center px-4 rounded-full mt-2 bg-Black10">
            <h6>{userLogin.username}</h6>
            <div className="text-yellow-400 ml-2">
              <CgCrown />
            </div>
          </div>

          <h5 className="shadow-lg w-52 h-10 rounded-lg flex items-center justify-center mt-2 mb-4">
            {userLogin.fullName || ''}
          </h5>

          <h6>{userLogin.email || ''}</h6>

          <h6>{userLogin.phoneNumber || ''}</h6>

          <button className="bg-LightBlue text-white px-4 shadow-lg w-52 hover:opacity-70 h-10 mt-10 rounded-sm flex items-center justify-center mb-4">
            <h6>
              Chỉnh sửa thông tin
            </h6>
          </button>
        </div>
      </div>
    )

  } else {
    return <></>
  }
}

export default MenuProfile
