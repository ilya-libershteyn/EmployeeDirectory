import React from "react";

function Filters({value, handleInputChange, handleFormSubmit, handleClear, handleStartSort, handleAlphaSort}) {
    //console.log(props);
    return(
        <form>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="nameFilter">Filter by Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="search" 
                                id="nameFilter" 
                                onChange={handleInputChange}
                                value={value}
                            />
                            <button onClick={handleFormSubmit} className="btn btn-primary">
                                Search
                            </button>
                            <button onClick={handleClear} className="btn btn-primary">
                                Clear
                            </button>
                        </div>
                        <div className="form-group">
                            <button onClick={handleStartSort} className="btn btn-primary">
                                Sort By Start Date
                            </button>
                            <button onClick={handleAlphaSort} className="btn btn-primary">
                                Sort Alphabetically
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </form>
    );
}

export default Filters;