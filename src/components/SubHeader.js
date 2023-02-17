import { useState } from "react";
import { Form } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router";

const SubHeader = (props) => {
    const location = useLocation()
    const [query, setQuery] = useState("")
    const params = useParams()
    const navigate = useNavigate()

    window.addEventListener("scroll", () => {
        var scroll = window.scrollY;
        if (scroll >= 120) {
            document.querySelector("header").classList.add("changedBG");
        } else {
            document.querySelector("header").classList.remove("changedBG");
        }
      })

      const handleChange = (e) => {
        setQuery(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (query) {
            setQuery("")
            navigate(`/search/${query}`)
        }
    }  

    return (
        <header className="navbar-fix fixed-top py-0">
            <div className="d-flex align-items-center" style={{height: 80}}>
                <div className="ml-2 btn-group" role="group">
                    <button type="button" id="prevButton" aria-label="Go back">
                        <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill="#fff" >
                            <path d="M11.03.47a.75.75 0 010 1.06L4.56 8l6.47 6.47a.75.75 0 11-1.06 1.06L2.44 8 9.97.47a.75.75 0 011.06 0z"></path>
                        </svg>
                    </button>
                    <button type="button" id="nextButton" className="ml-3 d-none d-md-inline-flex" aria-label="Go forward">
                        <svg role="img"  height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" fill="#fff" >
                            <path  d="M4.97.47a.75.75 0 000 1.06L11.44 8l-6.47 6.47a.75.75 0 101.06 1.06L13.56 8 6.03.47a.75.75 0 00-1.06 0z" ></path>
                        </svg>
                    </button>
                </div>
                {location.pathname.includes("/search") && <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Control required onChange={handleChange} type="text" placeholder={params.q?.length ? params.q : "What do you want to listen to?"} />
                            <svg role="img" height="24" width="24" aria-hidden="true" className="search-icon-header" viewBox="0 0 24 24" data-encore-id="icon"><path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path></svg>
                        </Form.Group>
                    </Form>}
                <div className="btn-group ml-auto mr-2">
                    <button type="button" className="dropdownButton btn btn-dark d-flex" data-toggle="dropdown" aria-expanded="false" style={{borderRadius: "1.5rem"}}>
                        <img alt="..." src="https://e-cdns-images.dzcdn.net/images/artist/0b17b99897d17ceb7027ed57cdbb7044/120x120-000000-80-0-0.jpg" style={{borderRadius: "50%", width: 28, height: 28}} />
                        <span className="d-flex align-items-center">
                            <span className="d-none d-lg-inline mx-2" style={{minWidth: "60px"}}>Floschi</span>
                            <svg className="d-none d-lg-inline" fill="#fff" role="img" width="16" height="16" viewBox="0 0 16 16" style={{marginRight: "6px"}} >
                                <path d="M14 6l-6 6-6-6h12z"></path>
                            </svg>
                        </span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right mt-1">
                        <span className="dropdown-item d-flex" type="button">Account <i className="bi bi-box-arrow-up-right ml-auto"></i></span>
                        <span className="dropdown-item mt-1" type="button">Profile</span>
                        <span className="dropdown-item mt-1 pb-1" type="button" style={{borderBottom: "solid 0.5px rgb(59, 55, 55)"}}>
                            Settings
                        </span>
                        <span className="dropdown-item my-1" type="button"> Log out </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default SubHeader