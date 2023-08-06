import './collapse.css';
import arrow from '../../assets/arrow.png';
import { useState } from 'react';

export default function Collapse({ title, description }) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse">
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)}>
                    {title}
                    <img
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}
                        src={arrow}
                        alt="Montrer la description"
                    />
                </h3>
                <div className={toggle ? 'collapse_description' : 'collapse_description_hidden'}>
                    {Array.isArray(description) ? description.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : description
                    }
                </div>
            </div>
        </>
    )
}
