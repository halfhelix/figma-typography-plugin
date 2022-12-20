import React, {cloneElement, forwardRef} from 'react';
import icons from './icons';

interface IconProps {
    type: string;
    className?: string;
    alt?: string;
}

/**
 * Renders an svg icon selected from a list of icons
 */
const Icon = forwardRef(({type, className = '', alt}: IconProps, ref) => {
    const defaultProps = {
        color: 'currentColor',
        xmlns: 'http://www.w3.org/2000/svg',
        className: 'icon ' + className,
        alt: alt || '',
        ref,
    };

    return (
        <>
            {!!icons[type] && cloneElement(icons[type], defaultProps)}
            {alt && <span className="sr-only">{alt}</span>}
        </>
    );
});

Icon.displayName = 'Icon';

export default Icon;
