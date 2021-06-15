import React, { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import styles from './Box.module.scss'

interface BoxProps {
    children?: ReactNode
    text?: string
    color?: any
    bgColor?: any
    // inlineStyle?: React.CSSProperties | undefined,
};

const Box: FunctionComponent<BoxProps & HTMLAttributes<HTMLDivElement>> = ({
    children,
    text,
    color,
    bgColor
    // inlineStyle
}) => {

    // const style<CSSProperties> = {color, bgColor}
    return <div className={styles.Box} style={{color: color, backgroundColor: bgColor}}>{text || children}</div>;
}

export default Box;
