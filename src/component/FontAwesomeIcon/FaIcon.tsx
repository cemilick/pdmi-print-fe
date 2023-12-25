import React from 'react'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { Path, StyleSheet, Svg } from '@react-pdf/renderer'
import { Style } from '@react-pdf/types'
import { color as cols } from '../../utils/constant'

interface FaIconProps {
    faIcon: IconDefinition
    color?: string;
    size?: number;
    style?: Style;
}

const FaIcon = ({ faIcon: { icon }, color = cols.primary, size = 10, style = StyleSheet.create({}) }: FaIconProps) => {
    const duotone = Array.isArray(icon[4])
    const paths = Array.isArray(icon[4]) ? icon[4] : [icon[4]]

    const styles: any = {
        ...style,
        ...{
            backgroundColor: cols.primary,
            width: size,
            paddingLeft: '10px',
            paddingRight: size,
            paddingTop: 5,
            paddingBottom: 5,
        },
    }

    return (
        <div style={styles}>
            <Svg viewBox={`0 0 ${icon[0]} ${icon[1]}`} style={
                { color: color, width: size, marginLeft: -5 }}>
                {paths &&
                    paths.map((d, index) => (
                        <Path
                            d={d}
                            key={index}
                            fill={'#fff'}
                            fillOpacity={duotone && index === 0 ? 0.4 : 1.0}
                        />
                    ))}
            </Svg>
        </div>
    )
}

export default FaIcon