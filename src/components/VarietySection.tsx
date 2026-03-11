import Image from 'next/image'
import BottleHand from '../../public/botol-variety/botol_hand.svg'
import variety1 from '../../public/botol-variety/v1.svg'
import variety2 from '../../public/botol-variety/v2.svg'
import variety3 from '../../public/botol-variety/v3.svg'
import variety4 from '../../public/botol-variety/v4.svg'
import Variety from './ui/Variety'
import { BOTTLE_VARITIES } from '@/config/constants'

const VarietySection = () => {
  const varieties: string[] = BOTTLE_VARITIES
  const varietyIcons = [variety1, variety2, variety3, variety4]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-72 w-full">
      <div className="bg-[#E6D4CB]">
        <Image src={BottleHand} alt="BottleHand" className="w-full h-full" priority />
      </div>
      <div className="bg-[#20292C]">
        <div className="flex flex-col justify-center items-center gap-4 lg:gap-14 h-[80vh] lg:h-screen">
          {varieties.map((variety: string, index: number) => (
            <Variety key={variety + index} text={variety} icon={varietyIcons[index]} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default VarietySection
