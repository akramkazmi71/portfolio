'use client'

import styles from './Footer.module.css'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.branding}>
                        <h3 className={styles.logo}>MAK</h3>
                        <p>Building the future, one line of code at a time.</p>
                    </div>

                    <div className={styles.links}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
                            <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
                            <li><button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>Experience</button></li>
                            <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
                        </ul>
                    </div>

                    <div className={styles.social}>
                        <h4>Connect</h4>
                        <div className={styles.socialLinks}>
                            <a href="https://www.linkedin.com/in/akramkazmi71/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/akramkazmi71" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="mailto:akramkazmi71@gmail.com">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} Md Akram Kazmi. All rights reserved.</p>
                    <p>Built with Next.js & ❤️</p>
                </div>
            </div>
        </footer>
    )
}
