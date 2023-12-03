import { IconEnum } from '@polybank/enums'
import { Icon } from '@polybank/ui'
import { Link } from 'react-router-dom'

export interface PageGeneralProps {
  isLoading?: boolean
}

const items = [
  { title: 'Gérer les utilisateurs', subtitle: 'Worry-free database management', icon: IconEnum.APPLICATION, link: '/users' },
  { title: 'Gérer les projets', subtitle: 'Deliver data with scalable object storage', icon: IconEnum.APPLICATION, link: '/projects' },
  { title: 'Gérer les news', subtitle: 'Distribute traffic between multiple Droplets', icon: IconEnum.APPLICATION, link: '/news' },
]

export function PageGeneral ({ isLoading }: PageGeneralProps) {
  return (
    <div className='bg-white h-full'>
      <div className="grid grid-cols-2 p-4 gap-y-5">
        { items.map((item, index) => <Item key={index} {...item} />)}
      </div>
    </div>
  )
}

function Item ({ title, subtitle, icon, link }) {
  return (
    <Link to={link}>
      <div className='flex items-stretch gap-4'>
        <div className='p-3 border border-blue-600 rounded-sm hover:bg-blue-100 duration-100 ease-in-out'>
          <Icon name={icon} className='w-6' />
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-blue-600 text-md'>{ title }</span>
          <span className='text-xs text-gray-400'>{ subtitle }</span>
        </div>
      </div>
    </Link>
    
  )
}