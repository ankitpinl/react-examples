const Header = ({submitSearchFrom, setSearchTxt, searchTxt}) => {
    return (
        <header>
            <form id="form" onSubmit={submitSearchFrom}>
                <input type="text" id="search" className="search" placeholder="Search" onChange={(e) => setSearchTxt(e.currentTarget.value)} value={searchTxt} />
                <input type="submit" value="Submit" className="searchSubmit" />
            </form>
        </header>
    )
}

export default Header;