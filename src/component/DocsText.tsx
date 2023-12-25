import ReactPDF, { Text } from "@react-pdf/renderer"
import React, { PropsWithChildren } from "react"
import { color as cols } from "../utils/constant";
interface IDocsText {
    color?: string;
    size?: 'lg' | 'md' | 'sm' | 'xs';
    bold?: boolean;
}

export const DocsText: React.FC<PropsWithChildren & IDocsText> = ({
    color = cols.default,
    size = 'md',
    bold,
    children
}) => {

    const labelSize = {
        lg: 20,
        md: 16,
        sm: 14,
        xs: 10
    }

    return (
        <Text style={{
            fontSize: labelSize?.[size],
            fontWeight: 500,
            color: color,
            marginBottom: (labelSize?.[size] / 3)
        }}>{children}</Text>
    )
}