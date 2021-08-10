const DropDown = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <div id="filter">
                            <span className="float-left filter-text">Filter by languages:</span>
                            <select className="form-select col-sm-12" aria-label="Default select example" data-testid="language">
                                <option className="col-md" value="0">All</option>
                                <option className="col-md" value="1">JavaScript</option>
                            </select>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DropDown;