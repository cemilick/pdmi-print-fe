import React from "react"
import { color as cols } from "../utils/constant";
import { Text } from "@react-pdf/renderer";

interface ILine {
    width?: number;
    height?: number;
    color?: string;
}

export const Line: React.FC<ILine> = ({ width = 300, height = 5, color = cols.secondary }) => {
    return (
        <div style={{
            width: width,
            backgroundColor: color,
            fontSize: height,
            marginBottom: 2
        }}><Text> </Text>
        </div>
    )
}