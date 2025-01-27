import { useState, useRef } from 'react';
import DropdownMenu from './DropdownMenu';
import dropIcon from '../../assets/images/down-chevron.png';
import './NavItem.css';

interface NavItemProps {
    title: string;
}

interface DropDownArrowProps {
    isHovering: boolean;
}

function DropDownArrow({isHovering}: DropDownArrowProps) {
    return (
        <img className= {`${isHovering ? 'arrow-up' : ''} ml-1  inline-block  h-5 w-5 transition-transform duration-300`}  src={dropIcon}  alt="dropdown icon" 
        />
    );
}


function NavItem({ title }: NavItemProps) {
  const [isHovering, setIsHovering] = useState(false);
  const hoverTimeoutRef = useRef<number | null>(null); // Declare and initialize hoverTimeoutRef

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovering(false);
    }, 150);
  }

  return (
    <>
    <button 
      className={`show-underline relative `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title}
      {isHovering && <DropdownMenu title={title} />}
    </button>
    <DropDownArrow  isHovering={isHovering}/>
    </>

  );
}

export default NavItem;