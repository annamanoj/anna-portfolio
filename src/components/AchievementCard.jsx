function AchievementCard({ achievement, onSelect }) {
  return (
    <div className="achievement-card">

      <div className="achievement-top-line"></div>

      <img
        src={achievement.image}
        alt={achievement.title}
        className="achievement-logo"
      />

      <h3>{achievement.title}</h3>

      <p className="achievement-subtitle">
        {achievement.subtitle}
      </p>

      <p className="achievement-description">
        {achievement.shortDescription}
      </p>

      <span className="achievement-year">
        {achievement.year}
      </span>

      <button
        className="achievement-btn"
        onClick={() => onSelect(achievement)}
      >
        {achievement.button} →
      </button>

    </div>
  );
}

export default AchievementCard;