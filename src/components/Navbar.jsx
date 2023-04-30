import l1 from '../spo.png'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <img src={l1} alt="logo" />
                <h3>Spotify</h3>
            </div>

            <div className="searchbar">
                <input type="text" placeholder="search song" />
                <button>search</button>
            </div>

            <div className="profile">
            <i className='bx bxs-universal-access'></i>
            </div>
        </nav>
     );
}
 
export default Navbar;