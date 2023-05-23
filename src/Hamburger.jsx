

const Hamburger = () => {


    return (
                <div className='menu active'>
                    
                    <div className="menu__block">

                        <div className="menu__close"> </div>
                        
                            <nav>
                                <ul className="menu__list">
                                    <li className="menu__link"><a href="#about">ABOUT ME</a></li>
                                    <li className="menu__link"><a href="#way">EXPERIENCE</a></li>
                                    <li className="menu__link"><a href="#skills">SKILLS</a></li>
                                    <li className="menu__link"><a href="#portfolio">PET projects</a></li>
                                    <li className="menu__link"><a href="BORSHCH.pdf" download>Download my CV</a></li>
                                    <li className="menu__link"><a href="deutschCV.pdf" download>Lebenslauf 2022 </a></li>
                                    <li className="menu__link"><a href="#contacts">CONTACTS</a></li>
                                </ul>
                            </nav>

                                <div className="menu__social">
                                    <a href="https://www.linkedin.com/in/serhiiborshch" className="sidepanel__link">
                                    </a>
                                    <a href="https://www.github.com/serg1557733" className="sidepanel__link">
                                    </a>
                                </div>
                    </div>
                  
                </div>
    )
}

export default Hamburger 