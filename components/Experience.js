import styles from './Experience.module.css'

export default function Experience() {
    const experiences = [
        {
            company: 'Niki.ai',
            companyUrl: 'https://www.niki.ai',
            role: 'Associate Software Engineer',
            period: 'Current',
            responsibilities: [
                'Developed and implemented a giftcard inventory system',
                'Developed and implemented an UpariKamai system',
                'Writing comprehensive unit tests',
                'Handling data in SQL tables',
                'Handled frontend changes for the website'
            ]
        },
        {
            company: 'Niki.ai',
            companyUrl: 'https://www.niki.ai',
            role: 'Tech Intern',
            period: 'Previous',
            responsibilities: [
                'Developed and implemented a giftcard inventory system',
                'Developed and implemented an UpariKamai system',
                'Handling data in SQL tables',
                'Handled frontend changes for the website'
            ]
        }
    ]

    return (
        <section id="experience" className={styles.experience}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>
                    Work <span className={styles.gradientText}>Experience</span>
                </h2>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div>
                                        <h3 className={styles.company}>
                                            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                                                {exp.company}
                                            </a>
                                        </h3>
                                        <h4 className={styles.role}>{exp.role}</h4>
                                    </div>
                                    <span className={styles.period}>{exp.period}</span>
                                </div>
                                <ul className={styles.responsibilities}>
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx}>
                                            <i className="fas fa-check-circle"></i>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
