import './Card.css';
import PropTypes from 'prop-types';

function Card({ title, value, icon }) {
  return (
    <div className='card'>
      <div className='icon'>{icon}</div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}
Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.node.isRequired,
};
export default Card;
