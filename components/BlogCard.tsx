import React, { ReactNode } from 'react'
import styles from './Layout.module.css'

interface Props {
    title: ReactNode;
    blogText: ReactNode;
}

const BlogCard = ({ title, blogText }: Props) => {
    return (
        <div className={styles.blogCard}>
            <div className={styles.headingSm}>{title}</div>
            <div className={styles.lightText}>{blogText}</div>
        </div>
    )
}

export default BlogCard