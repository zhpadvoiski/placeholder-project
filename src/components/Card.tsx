import React, { FC, ReactElement, ReactChild } from "react";

export enum CardVariant {
    Outlined = "outlined",
    Primary = "primary",
}

interface CardProps {
    width?: string;
    height?: string;
    variant?: CardVariant;
    onClick: (num: number) => void;
}

const Card: FC<CardProps> = ({ width, height, children, variant, onClick }) => {
    return (
        <div
            onClick={() => onClick(3)}
            style={{
                width,
                background:
                    variant === CardVariant.Primary ? "lightgray" : undefined,
                height,
                border:
                    variant === CardVariant.Outlined
                        ? "2px solid green"
                        : undefined,
            }}
        >
            {children}
        </div>
    );
};

export default Card;
