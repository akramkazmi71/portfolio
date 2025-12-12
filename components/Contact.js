import styles from './Contact.module.css'

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>
                    Get In <span className={styles.gradientText}>Touch</span>
                </h2>

                <p className={styles.subtitle}>
                    I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                </p>

                <div className={styles.contactGrid}>
                    <div className={styles.contactCard}>
                        <div className={styles.iconWrapper}>
                            <i className="fas fa-envelope"></i>
                        </div>
                        <h3>Email</h3>
                        <a href="mailto:akramkazmi71@gmail.com">
                            akramkazmi71@gmail.com
                        </a>
                    </div>

                    <div className={styles.contactCard}>
                        <div className={styles.iconWrapper}>
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <h3>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/akramkazmi71/" target="_blank" rel="noopener noreferrer">
                            /in/akramkazmi71
                        </a>
                    </div>

                    <div className={styles.contactCard}>
                        <div className={styles.iconWrapper}>
                            <i className="fab fa-github"></i>
                        </div>
                        <h3>GitHub</h3>
                        <a href="https://github.com/akramkazmi71" target="_blank" rel="noopener noreferrer">
                            @akramkazmi71
                        </a>
                    </div>
                </div>

                <div className={styles.resumeSection}>
                    <p>Want to know more about my experience?</p>
                    <a
                        href="https://docs.google.com/document/d/1E5rjIU6EZllDs0fsjHNmgbvHUWdfP41fI1pjSwViaGc/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        <i className="fas fa-file-download"></i>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    )
}
