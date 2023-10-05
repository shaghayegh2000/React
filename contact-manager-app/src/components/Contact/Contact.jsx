import {CurrentLine , Purple , Orange , Cyan , Red} from '../../helpers/colors'

const Contact = () => {
    return (
        <div className="col-md-6">
            <div className="rounded" style={{ backgroundColor: CurrentLine }}>
                <div className="card-body">
                    <div className="row align-items-center d-flex justify-content-between">
                        <div className="col-md-4 col-sm-4">
                            <img className="img-fluid rounded" src="https://via.placeholder.com/200" alt="" style={{ border: `1px solid ${Purple}` }} />
                        </div>
                        <div className="col-md-7 col-sm-7">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-dark text-start">Name   : {" "}
                                    <span className="fw-bold">Shaghayegh Mohamadi</span>
                                </li>

                                <li className="list-group-item list-group-item-dark text-start">Phone Number : {" "}
                                    <span className="fw-bold">12345678910</span>
                                </li>

                                <li className="list-group-item list-group-item-dark text-start">Email : {" "}
                                    <span className="fw-bold">shqayqm145@gmail.com</span>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-1 col-sm-1 d-flex flex-column align-items-center">
                            <button className="btn">
                                <i className="fa fa-eye p-2 rounded-3" style={{ backgroundColor: Orange }}></i>
                            </button>

                            <button className="btn">
                                <i className="fa fa-pencil p-2 rounded-3" style={{ backgroundColor: Cyan }}></i>
                            </button>

                            <button className="btn">
                                <i className="fa fa-trash p-2 rounded-3" style={{ backgroundColor: Red }}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
