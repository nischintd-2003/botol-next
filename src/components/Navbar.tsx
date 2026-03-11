import Image from 'next/image'
import Logo from '../../public/logo/logo_header.svg'
import { BUTTON, NAV_LINKS } from '@/config/constants'
import CommonBtn from './ui/CommonBtn'

const Navbar = () => {
  return (
    <nav className="lg:h-[80px] flex justify-center lg:justify-between w-full lg:px-24">
      <div className="left">
        <Image src={Logo} alt="Logo" className="my-5 w-auto h-auto" priority />
      </div>
      <div className="right flex py-4 items-center">
        <div className="py-3 mr-15">
          {NAV_LINKS.map((item: string) => (
            <button key={item} className="mx-8 text-[20px] hover:text-[#4DFBFB] transition-colors">
              {item}
            </button>
          ))}
        </div>
        <CommonBtn text={BUTTON.INQUIRY_NOW} />
      </div>
    </nav>
  )
}

export default Navbar
