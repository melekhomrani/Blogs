import arrow from './svg/svgexport-3.svg';
const UpBtn = () => {
  function up() {
    window.scrollTo(0, 0);
  }

  return (
    <div className='up-btn' onClick={up}>
      <div className="img">
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default UpBtn;
