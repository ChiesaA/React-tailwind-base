import { useState } from 'react';
import { BiHomeAlt, BiMoviePlay, BiInfoSquare, BiMenu } from 'react-icons/bi';
import NavItem from './NavItem';

const defaultIconSize = '1.875rem';
const items = [
    { lable: 'Home', icon: <BiHomeAlt size={defaultIconSize} />, active: true },
    { lable: 'Movies', icon: <BiMoviePlay size={defaultIconSize} />, active: false },
    { lable: 'About', icon: <BiInfoSquare size={defaultIconSize} />, active: false },
];

// console.log(toggle);
function Nav() {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="col-span-1 bg-cyan-100">
            <div className=" flex mx-4 justify-between items-center md:block">
                <h4 className="uppercase font-bold text-primary py-4 border-b border-primary text-right  ">
                    XemPhim.fun
                </h4>
                <BiMenu
                    className="cursor-pointer md:hidden"
                    size={defaultIconSize}
                    onClick={(e) => setToggle(!toggle)}
                />
            </div>

            <ul className={`mx-4 my-2 ${toggle ? '' : 'hidden'} md:block`}>
                {items.map((item, index) => (
                    <NavItem item={item} key={index} />
                ))}
            </ul>
        </nav>
    );
}

export default Nav;
