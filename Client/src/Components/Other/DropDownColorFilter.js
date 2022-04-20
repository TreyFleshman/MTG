import React from "react";
import '../../Styles/Dropdown.css';

import Swamp from '../../Assets/Images/Mana/Swamp.png';
import Plains from '../../Assets/Images/Mana/Plains.png';
import Island from '../../Assets/Images/Mana/Island.png';
import Forest from '../../Assets/Images/Mana/Forest.png';
import Mountain from '../../Assets/Images/Mana/Mountain.png';

const DropDownColorFilter = (props) => {

    const { filter, setFilter } = props;

    const handleOnSelectFilter = (e, color) => {
        setFilter(color);
        console.log(filter, color)
    }

    return (
        <section>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-mdb-toggle="dropdown" aria-expanded="false">
                    Color Filter
                </button>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                    <li>
                        <a className="dropdown-item" href="#">
                            Mono Colors &raquo;
                        </a>
                        <ul className="dropdown-menu dropdown-submenu">
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, 'White')}> <img src={Plains} /> White</a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, 'Blue')}> <img src={Island} /> Blue</a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, 'Black')}> <img src={Swamp} /> Black</a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, 'Red')}> <img src={Mountain} /> Red</a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, 'Green')}> <img src={Forest} /> Green</a></li>
                        </ul>
                    </li>

                    <li>
                        <a className="dropdown-item" href="#">
                            Dual Colors &raquo;
                        </a>
                        <ul className="dropdown-menu dropdown-submenu">
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"White,Blue"')}>
                                <img src={Plains} /> <img src={Island} /> Azorius
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Black,Blue"')}>
                                <img src={Swamp} /><img src={Plains} /> Dimir
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Red,Black"')}>
                                <img src={Mountain} /> <img src={Swamp} /> Rakdos
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Red,Green"')}>
                                <img src={Mountain} /> <img src={Forest} /> Gruul
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Green,White"')}>
                                <img src={Forest} /> <img src={Plains} /> Selesnya
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"White,Black"')}>
                                <img src={Plains} /> <img src={Swamp} /> Orzhov
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Blue,Red"')}>
                                <img src={Island} /> <img src={Mountain} /> Izzet
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Black,Green"')}>
                                <img src={Swamp} /> <img src={Forest} /> Golgari
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Red,White"')}>
                                <img src={Mountain} /> <img src={Plains} /> Boros
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Green,Blue"')}>
                                <img src={Forest} /> <img src={Island} /> Simic
                            </a></li>
                        </ul>
                    </li>

                    <li>
                        <a className="dropdown-item" href="#">
                            Tri Colors &raquo;
                        </a>
                        <ul className="dropdown-menu dropdown-submenu">
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"White,Blue,Black"')}>
                                <img src={Plains} /> <img src={Island} /> <img src={Swamp} /> Esper
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Blue,Black,Red"')}>
                                <img src={Island} /> <img src={Swamp} /> <img src={Mountain} /> Grixis
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Black,Red,Green"')}>
                                <img src={Swamp} /> <img src={Mountain} /> <img src={Forest} /> Jund
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Red,Green,White"')}>
                                <img src={Mountain} /> <img src={Forest} /> <img src={Plains} /> Naya
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Green,White,Blue"')}>
                                <img src={Forest} /> <img src={Plains} /> <img src={Island} /> Bant
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"White,Black,Green"')}>
                                <img src={Plains} /> <img src={Swamp} /> <img src={Forest} /> Abzan
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Blue,Red,White"')}>
                                <img src={Island} /> <img src={Mountain} /> <img src={Plains} /> Jeskai
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Black,Green,Blue"')}>
                                <img src={Swamp} /> <img src={Forest} /> <img src={Island} /> Sultai
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Red,White,Black"')}>
                                <img src={Mountain} /> <img src={Plains} />  <img src={Swamp} />Mardu
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Green,Blue,Red"')}>
                                <img src={Forest} /> <img src={Island} /> <img src={Mountain} /> Temur
                            </a></li>
                        </ul>
                    </li>

                    <li>
                        <a className="dropdown-item" href="#">
                            Quad Colors &raquo;
                        </a>
                        <ul className="dropdown-menu dropdown-submenu">
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"White,Blue,Black,Red"')}>
                                <img src={Plains} /> <img src={Island} /> <img src={Swamp} /> <img src={Mountain} />
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Blue,Black,Red,Green"')}>
                                <img src={Island} /> <img src={Swamp} /> <img src={Mountain} /> <img src={Forest} />
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Black,Red,Green,White"')}>
                                <img src={Swamp} /> <img src={Mountain} /> <img src={Forest} /> <img src={Plains} />
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Red,Green,White,Blue"')}>
                                <img src={Mountain} /> <img src={Forest} /> <img src={Plains} /> <img src={Island} />
                            </a></li>
                            <li><a className="dropdown-item" onClick={(e) => handleOnSelectFilter(e, '"Green,White,Blue,Black"')}>
                                <img src={Forest} /> <img src={Plains} /> <img src={Island} /> <img src={Swamp} />
                            </a></li>
                        </ul>
                    </li>

                    <li><a className="dropdown-item penta-colors" onClick={(e) => handleOnSelectFilter(e, '"White,Blue,Black,Red,Green"')}>
                        <img src={Plains} /> <img src={Island} /> <img src={Swamp} /> <img src={Mountain} /> <img src={Forest} />
                    </a></li>

                </ul>
            </div>
        </section>
    )
}

export default DropDownColorFilter;