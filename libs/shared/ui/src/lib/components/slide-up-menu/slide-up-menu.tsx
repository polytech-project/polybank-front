import { classNames } from "@polybank/utils"
import { ReactNode, useEffect, useRef, useState } from "react"

export interface SlideUpMenuProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  className?: string
}

export function SlideUpMenu ({ children, isOpen, onClose, className }: SlideUpMenuProps) {
  const [dragging, setDragging] = useState(false)
  const [dragStartY, setDragStartY] = useState(0);
  const [dragOffsetY, setDragOffsetY] = useState(0);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: any) => {
    setDragging(true);
    setDragStartY(e.clientY);
    setDragOffsetY(0)
  }

  const handleMouseMove = (e: any) => {
    if (!dragging) return;

    const deltaY = e.clientY - dragStartY;
    setDragOffsetY(deltaY);

    const newTranslateY = Math.min(0, Math.max(-menuRef.current!.clientHeight, -deltaY));
    menuRef.current!.style.transform = `translateY(${newTranslateY}px)`;
  }

  const handleMouseUp = () => {
    setDragging(false);
    menuRef.current!.style.transform = '';

    if (dragOffsetY > menuRef.current!.clientHeight / 2) {
      onClose(); // Fermer le menu si glissé à plus de la moitié
    }
  };

  const handleOutsideClick = (e: any) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [handleOutsideClick])




  return (
    <div
      className={classNames(
        "fixed  left-0 shadow right-0 transition-all bottom-0 transform  duration-300 ease-in-out  z-[100]",
        isOpen ? 'translate-y-0' : 'translate-y-full',
        className || ''
      )}
      ref={menuRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseDown={handleMouseDown}
    >
      <div
        className={classNames(
          isOpen ? 'translate-y-0' : 'translate-y-full',
          'transform origin-bottom transition-transform duration-300'
        )}

      >
        <div className="bg-grey-600  shadow-lg border-t border-grey-400  rounded-t-md p-2 ">
          <div
            className="w-10 rounded-full h-1.5 bg-grey-300 m-auto cursor-pointer"
          />
          { children }
        </div>

      </div>
    </div>

  )
}
