'use client'

import { useState } from 'react'
import styles from './Skills.module.css'

export default function Skills() {
    const skillCategories = [
        {
            title: 'Programming Languages',
            skills: [
                { name: 'Python', level: 60 },
                { name: 'Java', level: 60 },
                { name: 'C++', level: 80 },
                { name: 'C', level: 80 },
                { name: 'JavaScript', level: 75 }
            ]
        },
        {
            title: 'Web Technologies',
            skills: [
                { name: 'HTML', level: 60 },
                { name: 'CSS', level: 60 },
                { name: 'React', level: 70 },
                { name: 'Next.js', level: 65 },
                { name: 'Node.js', level: 60 }
            ]
        },
        {
            title: 'Tools & Databases',
            skills: [
                { name: 'SQL', level: 70 },
                { name: 'Git', level: 75 },
                { name: 'REST APIs', level: 70 },
                { name: 'Testing', level: 65 }
            ]
        }
    ]

    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>
                    Technical <span className={styles.gradientText}>Skills</span>
                </h2>

                <div className={styles.skillsGrid}>
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className={styles.categoryCard}>
                            <h3 className={styles.categoryTitle}>
                                <i className="fas fa-code"></i>
                                {category.title}
                            </h3>
                            <div className={styles.skillsList}>
                                {category.skills.map((skill, skillIdx) => (
                                    <div key={skillIdx} className={styles.skillItem}>
                                        <div className={styles.skillHeader}>
                                            <span className={styles.skillName}>{skill.name}</span>
                                            <span className={styles.skillPercent}>{skill.level}%</span>
                                        </div>
                                        <div className={styles.skillBar}>
                                            <div
                                                className={styles.skillProgress}
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
