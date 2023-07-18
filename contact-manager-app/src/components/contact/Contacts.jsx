import { Fragment } from "react";
import { CurrentLine, Cyan, Orange, Pink, Purple, Red } from "../../helpers/colors";
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
                    <div className="col-md-6">
                        <div style={{ backgroundColor: CurrentLine }} className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4 col-sm-4">
                                        <img className="img-fluid rounded" src="https
                                        ://via.placeholder.com/200" alt="" style={{ borderColor: Purple }} />
                                    </div>
                                    <div className="col-md-7 col-sm-7">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-dark">Name : {" "} <span>
                                                Shaghayegh Mohamadi
                                            </span></li>
                                            <li className="list-group-item list-group-item-dark">Phone Number : {" "} <span>
                                                123456789
                                            </span></li>
                                            <li className="list-group-item list-group-item-dark">Email Address : {" "} <span>
                                                udialcascjl@gmail.com
                                            </span></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center justify-content-around">
                                        <button className="btn" style={{backgroundColor: Orange}}>
                                            <i className="fa fa-eye"></i>
                                        </button>
                                        <button className="btn" style={{backgroundColor: Cyan}}>
                                            <i className="fa fa-pencil"></i>
                                        </button>
                                        <button className="btn" style={{backgroundColor: Red}}>
                                            <i className="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Contacts;


