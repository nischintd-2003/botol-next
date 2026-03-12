import Image from 'next/image'
import Logo from '../../public/logo/logo_footer.webp'
import { FOOTER, SOCIAL_ICONS_DATA } from '@/config/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div className="bg-surface-dark p-8 mt-20">
        <div className="flex flex-col md:flex-row justify-between w-full md:px-28 gap-6 md:gap-0">
          <div className="flex justify-center md:justify-start">
            <Image src={Logo} alt="Logo" className="h-[50px] md:h-[60px] w-auto" sizes="150px" />
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8">
            {FOOTER.PRIMARY_LINKS.map((item: string) => (
              <Link
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                key={item}
                className="text-[16px] md:text-[20px] text-white hover:text-accent-cyan transition"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between w-full md:px-28 items-center gap-6 md:gap-0 mt-12">
          <div className="flex gap-4">
            {SOCIAL_ICONS_DATA.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="w-9 h-9 text-white bg-[#535353] flex justify-center items-center rounded-full hover:bg-accent-cyan transition hover:text-surface-dark"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5">
                  <path
                    d={social.path}
                    fillRule={social.clipRule === 'evenodd' ? 'evenodd' : 'nonzero'}
                    clipRule={social.clipRule}
                  />
                </svg>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 text-center">
            {FOOTER.SECONDARY_LINKS.map((item: string) => (
              <Link
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                key={item}
                className="text-[14px] md:text-[20px] text-white hover:text-accent-cyan transition"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#323232] text-[#858585] text-center py-4 text-sm md:text-base">
        Copyright &copy; 2023 BOTOL. All Rights Reserved.
      </div>
    </>
  )
}

export default Footer
