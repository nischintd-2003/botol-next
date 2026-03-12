import Image from 'next/image'
import BottleHand from '../../public/botol-variety/botol_hand.webp'
import variety1 from '../../public/botol-variety/v1.webp'
import variety2 from '../../public/botol-variety/v2.webp'
import variety3 from '../../public/botol-variety/v3.webp'
import variety4 from '../../public/botol-variety/v4.webp'
import Variety from './ui/Variety'

const VARIETY_LIST = [
  { name: 'Vacuum Bottles', icon: variety1 },
  { name: 'Fridge Bottles & Jugs', icon: variety2 },
  { name: 'Borosilicate Bottles', icon: variety3 },
  { name: 'Kettles', icon: variety4 },
]

const VarietySection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-72 w-full">
      <div className="bg-surface-dark">
        <Image
          src={BottleHand}
          alt="BottleHand"
          className="w-full h-full"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="bg-surface-dark-alt">
        <div className="flex flex-col justify-center items-center gap-4 lg:gap-14 h-[80vh] lg:h-screen">
          {VARIETY_LIST.map((variety) => (
            <Variety key={variety.name} text={variety.name} icon={variety.icon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default VarietySection
