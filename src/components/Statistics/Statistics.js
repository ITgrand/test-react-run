import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem";
import "./Statistics.css";

function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">
        {stats.map((item) => (
          <StatisticsItem key={item.id} {...item} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
};

export default Statistics;
