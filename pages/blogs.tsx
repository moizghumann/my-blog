import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section'
import BlogsSections from '../components/BlogsSection'

const Blogs = () => {
    return (
        <Layout>
            <Section >
                <BlogsSections />
            </Section>
        </Layout>
    )
}

export default Blogs