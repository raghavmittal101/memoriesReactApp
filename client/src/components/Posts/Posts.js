import react from 'react';
import Post from './Post/Post.js'
import useStyles from './styles';

const Posts = () => {
    const classes = useStyles;
    return(
        <>
        <h1 className='mainContainer'>Posts</h1>
        <Post />
        <Post />
        </>
    );
}

export default Posts;