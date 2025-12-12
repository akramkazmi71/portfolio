'use client'

import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
    const [displayedText, setDisplayedText] = useState('')
    const roles = ['Backend Developer', 'Software Engineer', 'Problem Solver']
    const [roleIndex, setRoleIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentRole = roles[roleIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentRole.length) {
                    setDisplayedText(currentRole.substring(0, charIndex + 1))
                    setCharIndex(charIndex + 1)
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (charIndex > 0) {
                    setDisplayedText(currentRole.substring(0, charIndex - 1))
                    setCharIndex(charIndex - 1)
                } else {
                    setIsDeleting(false)
                    setRoleIndex((roleIndex + 1) % roles.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, roleIndex])

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/my_pic.png"
                            alt="Md Akram Kazmi"
                            className={styles.profileImage}
                        />
                        <div className={styles.imageGlow}></div>
                    </div>

                    <div className={styles.textContent}>
                        <div className={styles.greeting}>
                            <span>Hi, I'm</span>
                            <span className={styles.wave}>👋</span>
                        </div>

                        <h1 className={styles.name}>
                            <span className={styles.gradientText}>Akram Kazmi</span>
                        </h1>

                        <div className={styles.roleWrapper}>
                            <span className={styles.role}>{displayedText}</span>
                            <span className={styles.cursor}>|</span>
                        </div>

                        <p className={styles.description}>
                            Passionate about building elegant solutions to complex problems.
                            Currently crafting exceptional digital experiences at Niki.ai.
                        </p>

                        <div className={styles.socialLinks}>
                            <a
                                href="https://www.linkedin.com/in/akramkazmi71/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="LinkedIn"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a
                                href="https://github.com/akramkazmi71"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="GitHub"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                        </div>

                        <div className={styles.cta}>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="btn btn-primary"
                            >
                                Get In Touch
                            </button>
                            <a
                                href="https://docs.google.com/document/d/1E5rjIU6EZllDs0fsjHNmgbvHUWdfP41fI1pjSwViaGc/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary"
                            >
                                View Resume
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.scrollIndicator}>
                    <div className={styles.mouse}>
                        <div className={styles.wheel}></div>
                    </div>
                    <p>Scroll to explore</p>
                </div>
            </div>
        </section>
    )
}
