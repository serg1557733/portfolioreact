
const Aside = () => {


    return(
        <aside className="sidepanel">

            <a href="https://www.linkedin.com/in/serhiiborshch" target="_blank" className="sidepanel__link">
                <img src="./icons/social/linkedin.svg" alt="linkedIn"/>

            </a>
                <a href="https://www.github.com/serg1557733" target="_blank" className="sidepanel__link">
                    <img className="sidepanel__img_git" src="icons/social/github.svg" alt="Github"/>
                </a>
            
            <div className="sidepanel_divider"></div>

            <div className="sidepanel_text">
                <span>Social networks</span>
            </div>
        </aside>
    )
}

export default Aside