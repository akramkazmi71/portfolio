import styles from './About.module.css'

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>
                    About <span className={styles.gradientText}>Me</span>
                </h2>

                <div className={styles.content}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <i className="fas fa-user-graduate"></i>
                        </div>
                        <h3>Background</h3>
                        <p>
                            I'm <strong>Md Akram Kazmi</strong>, currently working at <strong>Niki.ai</strong> as an Associate Software Engineer.
                        </p>
                        <p>
                            I completed my Bachelor's degree from Sapthagiri College of Engineering, Bangalore,
                            specializing in Information Science.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <i className="fas fa-code"></i>
                        </div>
                        <h3>Philosophy</h3>
                        <p>
                            Information Science Graduate passionate about obtaining positions as a Software Developer.
                            I thrive working both as part of a team and individually.
                        </p>
                        <p>
                            I use a creative approach to problem-solving and love building elegant solutions to complex challenges.
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <i className="fas fa-trophy"></i>
                        </div>
                        <h3>Achievements</h3>
                        <ul className={styles.achievementsList}>
                            <li>
                                <i className="fas fa-basketball-ball"></i>
                                <span>1st position in Regional Level Basketball tournament</span>
                            </li>
                            <li>
                                <i className="fas fa-bug"></i>
                                <span>1st position in "Debug the C bug" intra-college event</span>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <i className="fas fa-heart"></i>
                        </div>
                        <h3>Beyond Code</h3>
                        <p>
                            When I'm not coding, you'll find me on the basketball court or playing other outdoor sports.
                            I believe in maintaining a healthy work-life balance and staying physically active.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
