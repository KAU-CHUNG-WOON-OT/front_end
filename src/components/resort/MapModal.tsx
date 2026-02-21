import { useState, useEffect, useRef } from "react";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const MapModal = ({ isOpen, onClose, imageSrc }: MapModalProps) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [lastTapTime, setLastTapTime] = useState(0);  
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleDoubleTap = (e: React.TouchEvent | React.MouseEvent) => {
    if (imageRef.current && scale === 1) {
       const { naturalWidth, clientWidth } = imageRef.current;
       if (naturalWidth <= clientWidth) return;
    }

    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTapTime;

    if (tapLength < 300 && tapLength > 0) {
      if (scale > 1) handleReset();
      else setScale(2.5);
      e.preventDefault();
    }
    setLastTapTime(currentTime);
  };

  const onMouseDown = (e: any) => {
    if (scale === 1) return;
    setIsDragging(true);
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setStartPos({ x: clientX - position.x, y: clientY - position.y });
  };

  const onMouseMove = (e: any) => {
    if (!isDragging || scale === 1) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    setPosition({ x: clientX - startPos.x, y: clientY - startPos.y });
  };

  const onMouseUp = () => setIsDragging(false);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="relative rounded-2xl overflow-hidden shadow-2xl max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div 
          className="relative overflow-hidden touch-none"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onMouseDown}
          onTouchMove={onMouseMove}
          onTouchEnd={(e) => { onMouseUp(); handleDoubleTap(e); }}
          onClick={handleDoubleTap}
        >
          <img 
            ref={imageRef}
            src={imageSrc} 
            alt="지도 상세" 
            className="transition-transform duration-300 ease-out will-change-transform"
            style={{ 
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              maxWidth: "100%", 
              maxHeight: "85vh", 
              display: "block", 
              cursor: scale > 1 ? "grab" : "default",
              objectFit: "contain"
            }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default MapModal;