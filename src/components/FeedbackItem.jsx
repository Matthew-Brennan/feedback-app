import Card from "./shared/card"
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa' //import Font Awesome: FaTimes icon
  
function FeedbackItem({item, handleDelete}){

    return(
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => handleDelete(item.id)} className="close">
                <FaTimes />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem