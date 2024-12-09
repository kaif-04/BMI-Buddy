import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session" id="navPrice">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Elevate your fitness game with our expert-guided workout sessions! Whether you're a beginner or a seasoned athlete, our gym provides tailored  to help you achieve your goals. 
        </p>
        <img src="/img8.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Push your limits and achieve your fitness goals with our specially curated bootcamps. 
    Designed for all fitness levels, each session offers a unique blend of intensity.
        </p>
        <div className="bootcamps">
          <div>
            <h4>🏋️ Strength & Conditioning Bootcamp</h4>
            <p>
            Build muscle and boost endurance with this high-intensity program. Perfect for athletes and fitness enthusiasts looking to push their limits.
            </p>
          </div>
          <div>
            <h4>🔥 Fat Burn Bootcamp</h4>
            <p>
            Shed those extra pounds with a combination of cardio drills and functional movements designed to torch calories and keep you energized.
            </p>
          </div>
          <div>
            <h4>⚡ HIIT Mastery Bootcamp</h4>
            <p>
            Experience the ultimate High-Intensity Interval Training to maximize your workout in minimal time. Achieve peak performance and enhanced stamina.
            </p>
          </div>
          <div>
            <h4>🤸 Flex & Mobility Bootcamp</h4>
            <p>
            Increase your range of motion and prevent injuries with this yoga-inspired bootcamp focusing on flexibility and recovery techniques.
            </p>
          </div>
          <div>
            <h4>🥊 Boxing Bootcamp</h4>
            <p>
            Learn the art of boxing while building strength and agility. Perfect for stress relief and full-body toning.
            </p>
          </div>
          <div>
            <h4>💃 Dance Fitness Bootcamp</h4>
            <p>
            Make fitness fun with choreographed moves that get your heart pumping while you groove to the music.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
