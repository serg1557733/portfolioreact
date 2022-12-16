

const Header = () => {

    const getContacts = () => {
        console.log(`contakts page..`)
    }

    return (
        <section className="promo">
            <div className="hamburger">
                <span></span> 
                <span className="long"></span> 
                <span></span>
            </div>
            <div className="container">
                <h2 className="title title_fz20 promo__subtitle">My name is Sergey Borsch</h2>
                <h1 className="title title_fz48">I am Frontend/Fullstack developer</h1>
                <div className="promo_btns" >
                    <button className="promo_link btn">Old projects</button> 
                    <button onClick={getContacts} className="promo_link btn">CONTACTS</button>
                    <a href="https://chat.serg1557733.repl.co" className="promo_link btn">Deployed PET</a>
                </div> 
         
            </div>
        </section>
    )
}
export default Header