import PropTypes from "prop-types";

const info = {
  name: 'Sebastian',
  lastname: 'Pabon Lopez'
};

const getName = (info) =>{
  return `Hello ${info.name} ${info.lastname} welcome!`;
}

export const FirstApp = ({title, subtitle, number}) => {

  return (
    <>
      <h1>{ getName(info) }</h1>
      <h2 data-testid='test-title'>{title}</h2>
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>FirstApp {number+1}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number,
  subtitle: PropTypes.string
};

FirstApp.defaultProps = {
  number: 2
}