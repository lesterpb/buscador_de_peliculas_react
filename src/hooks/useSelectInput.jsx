import React, { useEffect, useState } from 'react';
import { Input, SelectList } from "../components/atoms/basicComponents";
import OutsideAlerter from './useOutsideAlerter';

const useSelectInput = (placeholder,id,options,selectedKey=undefined) => {

    const [selectValue,setSelectedValue] = useState("");
    const [selectKey,setSelectedKey] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        if(selectKey !== "" && Object.keys(options).length > 0){
            options.forEach(option => {
                const key = Object.keys(option)[0];
                if(key === selectKey)
                    setSelectedValue(option[key][0])
            });
        }
    },[options,selectKey])

    const elementSelected = (elementSelectedKey,elementSelectedValue) => {
        setSelectedValue(elementSelectedValue);
        setSelectedKey(elementSelectedKey);
        setIsVisible(prevValue => !prevValue);
    }

    const toggleAction = () => {
        setIsVisible(prevValue => !prevValue);
    }

    const handleClickOutside = ()=>{
        setIsVisible(prevValue => prevValue && false);
    }

    const liStyles = (key, option) => `text-result ${(selectValue === option[key][0]
        || (selectedKey !== undefined
        && selectedKey !== ""
        && selectKey === selectedKey)) ? "selected" : ''}`;

    const Select = ()=>(
        <div className='w-100'>
            <OutsideAlerter action={handleClickOutside}>
                <Input id={id} placeholder={placeholder} defaultValue={selectValue} onFocus={toggleAction} onBlur={toggleAction} readOnly={true}/>
                <SelectList id={'list-wrapper-'+id} isVisible={isVisible}>
                    <div className="list-absolute">
                        <ul className="search-elements">
                            { options.map((option,pos)=>{
                                    const key = Object.keys(option)[0];
                                    return (
                                        <li key={id+"-"+pos} id={id+"-"+pos}
                                            className={liStyles(key,option)}
                                            onClick={()=>elementSelected(key,option[key][0])}>
                                            <div className="item">
                                                <span>{option[key][0]}</span>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </SelectList>
            </OutsideAlerter>
        </div>
    )

    return [selectKey,setIsVisible,Select];
}

export default useSelectInput;
