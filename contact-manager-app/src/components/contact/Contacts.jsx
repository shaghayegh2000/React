import { Fragment } from "react";
import { Pink } from "../../helpers/colors";
import Contact from "./Contact";
const Contacts = () => {
    return (
        <Fragment>
            <section className="container text-center my-3">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3">
                                <button style={{ backgroundColor: Pink }} className="btn mx-4">
                                    <i className="fa fa-plus-circle mx-2"></i>
                                    Create a new contact</button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    <Contact/>
                </div>
            </section>
        </Fragment>
    )
}

export default Contacts;


