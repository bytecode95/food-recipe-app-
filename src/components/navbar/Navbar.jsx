import logo from '../../assets/Abstract Chef Cooking Restaurant Free Logo.png'

const Navbar = () => {
  return (
    <>
      <div className="mx-auto bg-white shadow-lg p-2 ">
        <img src={logo} className='w-20 rounded-full ms-5' alt="logo"/>
      </div>
    </>
  )
}

export default Navbar