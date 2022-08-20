import { useState } from 'react';

function NavItem({ item, onClick }) {
    const { lable, icon, active } = item;

    const [isActive, setActive] = useState(active);

    return (
        <li
            className={`flex p-2 justify-end items-center cursor-pointer${
                isActive ? ' bg-sky-700 text-white' : ''
            } hover:bg-sky-700 hover:text-white`}
            onClick={onClick}
        >
            <h3 className="mr-2">{lable}</h3>
            {icon}
        </li>
    );
}

export default NavItem;
