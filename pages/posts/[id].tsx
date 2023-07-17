import Layout from "../../components/layout";
import { getAllPostsID } from "../../lib/posts";

export function getStaticPaths() {
    const paths = getAllPostsID();
    return {
        paths,
        fallback: false
    }
}

const Post = () => {
    return (
        <Layout></Layout>
    )
}

export default Post