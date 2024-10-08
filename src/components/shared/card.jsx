import PropTypes from 'prop-types'

function Card({children, reverse}) {
   // return (
        //<div className={`card ${reverse && 'reverse'}`}>{children}</div>
  //  )
        return(
            <div className="card" style={{
                backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,1)',
                Color: reverse ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
            }}
            >
                {children}
            </div>
        )
    
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}
export default Card