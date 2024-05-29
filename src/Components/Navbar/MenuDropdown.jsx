import { AiOutlineMenu } from 'react-icons/ai'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const MenuDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logout Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-3'>
                {/* Become A Host btn */}
                <div className='hidden md:block'>
                    <button className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'>
                        +Sale Order
                    </button>
                </div>
                {/* Dropdown btn */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        {/* Avatar */}
                        <FaRegUser size={18} />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <Link
                            to='/'
                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                            Home
                        </Link>

                        {
                            user ? <div onClick={handleLogOut} className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>
                                Logout
                            </div> : <>
                                <Link
                                    to='/login'
                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Login
                                </Link>
                                <Link
                                    to='/register'
                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Register
                                </Link>
                            </>
                        }
                    </div>
                </div>
            )}
        </div>
    )
}

export default MenuDropdown