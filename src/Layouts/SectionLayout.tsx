import React, { ReactNode } from 'react';

interface SectionLayoutProps {
    children: ReactNode;
    title?: string;
    titleClassName?: string;
    columns?: 1 | 2 | 3 | 4 | 5 | 6; // Explicitly define the allowed numbers
    textAlignment?: 'left' | 'right';
    contentAlignment?: 'left' | 'right'; // Fixed typo and added missing quote
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
    children,
    title,
    titleClassName = '',
    columns = 3,
    textAlignment = 'left',
    contentAlignment = 'left',
}) => {
    const gridClasses: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
        1: 'sm:grid-cols-1',
        2: 'sm:grid-cols-2',
        3: 'sm:grid-cols-3',
        4: 'sm:grid-cols-4',
        5: 'sm:grid-cols-5',
        6: 'sm:grid-cols-6',
    };

    const gridClass = gridClasses[columns];
    const textAlignClass = textAlignment === 'right' ? 'text-right' : 'text-left';
    const contentAlignClass = contentAlignment === 'right' ? 'text-right' : 'text-left'; // Fixed typo and reference

    return (
        <>
            <section className='relative bg-grey-300 w-full h-full py-16'>
                <div className={`max-w-7xl mx-auto ${textAlignClass}`}>
                    {title && (
                        <h1 className={`text-4xl font-bold mb-2 text-white ${titleClassName}`}>
                            {title}
                        </h1>
                    )}
                    <div className={`grid ${gridClass} justify-center ${contentAlignClass} items-center p-4 gap-16`}>
                        {children}
                    </div>
                </div>
                <div className='w-full absolute h-2'></div>
            </section>
        </>
    );
};

export default SectionLayout;
