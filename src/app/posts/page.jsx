
// const getPost = async ()=>{
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         return res.json();
//     }
//     catch(err){
//         throw new Error('Faild to fetch');
//     };
    
// }

const getPost = async ()=>{
   
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');

        if(!res.ok){
            throw new Error('Faild to fetch');
        }
        return res.json();
   
    
    
}
const PostPage = async () => {
    const posts= await getPost();
    return (
        <div>
            <h1>thear are {posts.length} posts </h1>
        </div>
    );
};

export default PostPage;