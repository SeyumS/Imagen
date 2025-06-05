import React, { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import './MasonryGrid.css';

interface MasonryGridProps {
  children: React.ReactNode;
  options?: Masonry.Options;
  className?: string;
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ children, options, className }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const msnry = new Masonry(gridRef.current, {
        itemSelector: '.masonry-item',
        columnWidth: '.masonry-sizer',
        percentPosition: true,
        ...options,
      });
      imagesLoaded(gridRef.current, () => {
        msnry.layout?.();
      });

      return () => {
        msnry.destroy?.(); // cleanup on unmount
      };
    }
  }, [children, options]);

  /*return (
    <div ref={gridRef} className={className}>
      {/* This is used to define column width }
      <div className="masonry-sizer" style={{ width: '33.33%' }} />
      {children}
    </div>
  );*/
  return (
    <div ref={gridRef} className={className}>
      {/* This is used to define column width */}
      <div className="masonry-sizer" style={{ width: '33.33%' }} />
      {React.Children.map(children, (child) => (
        <div className="masonry-item">{child}</div>
      ))}
    </div>
  );

};

export default MasonryGrid;

