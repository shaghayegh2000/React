import { CurrentLine, Cyan, Orange, Red } from "../../helpers/colors";
const Contact = () => {
    return (
        <>
            <div className="col-md-6">
                <div style={{ backgroundColor: CurrentLine }} className="card">
                    <div className="card-body">
                        <div className="row d-flex justify-content-around">
                            <div className="col-md-4 col-sm-4">
                                {/* <img className="img-fluid rounded" src="../../assets/download.png" alt="fnfdnfn"/> */}
                                <div style={{ height: 150, width: 150 }} className="d-flex justify-content-center align-items-center img-fluid bg-secondary rounded">
                                    150*150 PX
                                </div>
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
                                <button className="btn" style={{ backgroundColor: Orange }}>
                                    <i className="fa fa-eye"></i>
                                </button>
                                <button className="btn" style={{ backgroundColor: Cyan }}>
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <button className="btn" style={{ backgroundColor: Red }}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;