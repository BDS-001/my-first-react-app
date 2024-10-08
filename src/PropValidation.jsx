import PropTypes from 'prop-types';

const RenderName = (props) => {
    return <div>{props.name}</div>;
};

RenderName.PropTypes = {
    name: PropTypes.string.isRequired,
}

RenderName.defaultProps = {
    name: 'bob'
}

export default RenderName