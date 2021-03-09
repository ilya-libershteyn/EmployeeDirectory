function Filters({handleInputChange}) {
    return(
        <div className="card">
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label hutmlFor="nameFilter">Filter by Name</label>
                        <input type="text" className="form-control" name="search" id="nameFilter" onChange={handleInputChange}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Filters;