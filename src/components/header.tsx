
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-primary">
                <div className="container-fluid">
                    <div className="mx-auto text-center">
                        <span className="h2 text-white"
                            data-testid='header'>
                                <b>InnerSource Project Portal</b>
                            <br />
                            <span className="h6 d-none d-md-block d-lg-block my-1" data-testid="sub-header">Leverage, Reuse or Contribute to
                                <span id="count"> <b>42</b>
                                    <span> InnerSource projects</span>
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;