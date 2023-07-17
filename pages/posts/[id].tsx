import Link from "next/link";
import Button from "../../components/Button";
import Layout from "../../components/layout";
import { PostData, getAllPostsIDs, getPostData } from "../../lib/posts";
import button from '../../components/styles/Button.module.css'
import { GetStaticPaths, GetStaticProps } from "next";

// When you export a function called getStaticPaths (Static Site Generation) from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths.

interface PostsDataProps {
    postsData: PostData
}

// 1st step - get all the paths for dynamic routing
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostsIDs();
    return {
        paths,
        fallback: false
    }
}

// 2nd step - fetch data for the posts id in the dynamic route
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postsData = await getPostData(params?.id as string);
    return {
        props: {
            postsData
        }
    }
}

// 3rd step - react component to display the fetched posts data for our unique id in our dynamic route
const Post = ({ postsData }: PostsDataProps) => {
    return (
        <>
            <Layout>
                {postsData.title}
                <br />
                {postsData.id}
                <br />
                {postsData.date}
                <br />
                <div dangerouslySetInnerHTML={{ __html: postsData.contentHtml }} />
                <Link href={'/'} className={button.link}>
                    <Button>
                        Back to Home
                    </Button>
                </Link>

            </Layout>
        </>
    )
}
export default Post