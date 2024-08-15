import React from 'react'

interface IconButtonProps {
    icon: React.ComponentType<{ size?: number }>;
    onClick: () => void;
  }

const IconButton = ({ icon: Icon, onClick}: IconButtonProps) => {
    return (
        <span className='cursor-pointer flex items-center space-x-2' onClick={onClick}>
            <Icon size={22} />
      </span>
  )
}

export default IconButton