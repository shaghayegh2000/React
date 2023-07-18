import {Purple , Comment} from '../../helpers/colors'

const SearchContact = () => {
    return (
        <div className='input-group mx-3 w-75' dir='ltr'>
            <span className='input-group-text' id='basic-addon1' style={{backgroundColor: Purple}}>
                <i className='fa fa-search'></i>
            </span>
            <input placeholder='Search Contact' aria-label='Search' aria-describedby='basic-addon' className='form-control' type="text" dir='rtl' style={{backgroundColor:Comment , borderColor:Purple}}/>
        </div>
    )
}

export default SearchContact;