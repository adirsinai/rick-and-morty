const BarChart = ({ name, poplurity }) => {
  return (
    <div>
      <p>{name}</p>
      <div className="chart-container">
        <div className="skills" style={{ width: `${poplurity}` }}>
          {`${poplurity}`}
        </div>
      </div>
    </div>
  );
};

export default BarChart;
