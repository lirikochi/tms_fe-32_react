import React, { useState } from "react";
//@ts-ignore
import styles from './App.module.css';
import Button, {ButtonTypes} from './Components/Button/Button'
import UserName from "./Components/UserName";
import { CloseIcon, BurgerClosedIcon } from "./Assets/icons";
import Title from "./Components/Title";
import TabsList from "./Components/TabsList";
import Input from "./Components/Input";

const App = () => {
    return (
        <div className={styles.container}>
            <Button 
            title={'Primary'} 
            type={ButtonTypes.Primary} 
            onClick={() => alert('primary')}
            disabled
            />
            <Button 
            title={'Secondary'} 
            type={ButtonTypes.Secondary} 
            onClick={() => alert('secondary')}
            />
            <Button 
            title={'Error'} 
            type={ButtonTypes.Error} 
            onClick={() => alert('error')}
            />

            <UserName username={'Artem_Malkin'}/>

            <Title title={"title"} />

            <TabsList />

            <Input 
            value={inputValue}
            onChange={onChange}
            placeholder={"placeholder"}
            title={"Title"}
            error={"error"} 
            />
        </div>
    );
}

export default App;