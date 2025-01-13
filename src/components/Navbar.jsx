import React from 'react';
import NavbarItem from './NavbarItem';

const items = [
  {
    name: 'home',
    label: 'Home',
    link: '/',
  },
  // {
  //   name: 'courses',
  //   label: 'Courses',
  //   link: '/courses',
  // },
  // {
  //   name: 'projects',
  //   label: 'Projects',
  //   link: '/projects',
  // }
]

const Navbar = ({name}) => {
  return (
    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-10 z-10'>
      <div className="flex flex-row gap-4 items-center justify-center">
        {items.map((item, idx) => 
          <React.Fragment key={idx}>
            <NavbarItem item={item} selected={item.name == name}/>
            {idx+1 != items.length && <div className="w-px h-5 bg-gray-300"></div>}
          </React.Fragment>
        )}
        </div>
    </div>
  )
}

export default Navbar;