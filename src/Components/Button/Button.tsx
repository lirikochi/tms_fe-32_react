import React, { FC } from 'react';
import classnames from 'classnames';

//@ts-ignore
import styles from './App.module.css';

export enum ButtonTypes {
    Primary = 'primary',
    Secondary = 'sacondary',
    Error = 'error',
}

type ButtonProps = {
    title: string
    type: ButtonTypes
    onClick: () => void
    ClassName?: string
    disabled?: boolean
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {type, title, onClick} = props

    return <div className={classnames(styles.button)} onClick = {onClick}>
        (title)
        </div>;
}

export default Button