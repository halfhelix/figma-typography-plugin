import React from 'react';
import Icon from './Icons';

interface ChildProps {
    title: string;
    children: React.ReactNode;
    active: boolean;
    toggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PanelToggle = (props: ChildProps) => {
    const handleClick = () => {
        props.toggle ? props.toggle(!props.active) : null;
    };

    return (
        <div className="panel-toggle">
            <button className="panel-toggle-button" onClick={handleClick}>
                <p className="text--s text--bold">{props.title}</p>
                <Icon type={props.active ? 'minus' : 'plus'} alt={props.active ? 'collapse' : 'expand'} />
            </button>

            {props.active ? <div className="panel-toggle-options">{props.children}</div> : ''}
        </div>
    );
};

export default PanelToggle;
