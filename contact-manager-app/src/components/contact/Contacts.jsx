import { Fragment } from "react";
import { CurrentLine, Pink } from "../../helpers/colors";
import Contact from "./Contact";
import Sppiner from "../Spinner";
const Contacts = ({ contacts, loading }) => {
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
            {
                loading ? <Sppiner /> : (
                    <section className="container">
                        <div className="row">
                            {
                                contacts.length > 0 ? contacts.map((c) => (
                                    <Contact key={c.id} contact={c} />
                                )) :
                                    (
                                        <div className="rounded-pill text-center py-5 w-75 m-auto my-4" style={{ backgroundColor: CurrentLine }}>
                                            <p className="h4 text-warning">Contact does not found</p>
                                            <img className="w-25 mt-4" src={require("../../assets/no-found.gif")} alt="Not Found" />
                                        </div>
                                    )
                            }

                        </div>
                    </section>
                )
            }
        </Fragment>
    )
}

export default Contacts;


