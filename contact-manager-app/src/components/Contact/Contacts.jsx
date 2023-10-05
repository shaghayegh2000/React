import {CurrentLine, Pink } from "../../helpers/colors";
import Contact from "./Contact"; 

const Contacts = ({contacts}) => {
    return (
        <div className="">
            <section className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p className="h3 mt-3">
                                <button className="btn" style={{ backgroundColor: Pink }}>Create a new contact
                                    <i className="fa fa-plus-circle mx-2 mt-1"></i>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    {
                        contacts.length > 0 ? contacts.map(c => (
                            <Contact key={c.id} contact={c}/>
                        )) : 
                        (
                            <div className="text-center py-5 mt-4" style={{backgroundColor : CurrentLine }}>
                                <p  className="h3 text-warning">
                                    Not Found ... !
                                </p>
                                <img className="w-25 mt-3" src={require('../../assets/no-found.gif')} alt="" />
                            </div>
                        )
                    }
                    
                </div>
            </section>
        </div>
    );
};

export default Contacts;