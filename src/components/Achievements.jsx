import { useState } from "react";
import { achievements } from "../data/achievements";
import AchievementCard from "./AchievementCard";
import AchievementModal from "./AchievementModal";
import "../styles/achievements.css";

function Achievements() {

  const [selectedAchievement, setSelectedAchievement] = useState(null);

  const getAchievementId = (achievement) => {

    switch (achievement.title) {

      case "Industry Collaboration":
        return "telstra-rmit";

      case "Apple Foundation Program":
        return "apple-foundation";

      case "Customer Service Experience":
        return "viva-energy";

      case "Web Development Internship":
        return "nextgenpro";

      default:
        return null;
    }
  };

  return (

    <section
      className="achievements"
      id="achievements"
    >

      <h2>Achievements</h2>

      <p className="achievement-intro">
        Industry collaborations, academic milestones,
        internships, certifications and professional
        experiences that have shaped my journey.
      </p>

      <div className="achievement-grid">

        {achievements.map((achievement) => {

          const achievementId = getAchievementId(achievement);

          return (

            <div
              id={achievementId || undefined}
              key={achievement.id}
              className="achievement-anchor"
            >

              <AchievementCard
                achievement={achievement}
                onSelect={setSelectedAchievement}
              />

            </div>

          );

        })}

      </div>

      <AchievementModal
        achievement={selectedAchievement}
        onClose={() => setSelectedAchievement(null)}
      />

    </section>

  );
}

export default Achievements;