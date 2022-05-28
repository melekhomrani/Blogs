const Loading = () => {
  const waves = [];
  for (let i = 0; i < 9; i++) {
    waves.push(<div className='wave' key={i}></div>);
  }

  return (
    <div className=''>
      <div className='waves'>Loading...</div>
    </div>
  );
};

export default Loading;
