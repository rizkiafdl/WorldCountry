import React, { ReactNode, useRef } from 'react';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

interface SectionCarouselProps {
    children: ReactNode;
}

const CarouselLayout: React.FC<SectionCarouselProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);

    const scroll = (offset: number) => {
        if (ref.current) {
            ref.current.scrollLeft += offset;
        }
    };

    return (
        <div className='relative overflow-hidden'>
            <div className='flex justify-between absolute left-0 w-full h-full'>
                <button
                    onClick={() => scroll(-500)}
                    className='z-10 hover:bg-blue-900/50 opacity-75 transition-all ease-in-out duration-300 w-10'>
                    <GoChevronLeft size={32} />
                </button>
                <button
                    onClick={() => scroll(500)}
                    className='z-10 hover:bg-blue-900/50 opacity-75 transition-all ease-in-out duration-300 w-10'>
                    <GoChevronRight size={32} />
                </button>
            </div>
            <div
                ref={ref}
                className='carousel flex overflow-x-scroll no-scrollbar relative scroll-smooth space-x-4'>
                {children}
            </div>
        </div>
    );
};

export default CarouselLayout;
