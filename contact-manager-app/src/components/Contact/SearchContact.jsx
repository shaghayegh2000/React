import {Purple} from '../../helpers/colors'

const SearchContact = () => {
    return (
        <div className="input-group w-75 mx-5">
            <span className="input-group-text border-1" id="basic-addon1" style={{ backgroundColor: Purple, borderColor: Purple }}>
                <i className="fa fa-search"></i>
            </span>
            <input type="text" name="" id="" className="form-control " placeholder="Search contact" aria-label="Search" aria-describedby="basic-addon1"/>
        </div>
    );
};

export default SearchContact;