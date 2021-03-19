export const getPosts = async () => {
    // console.log(await (await fetch('http://localhost:5000/posts')).json())
    return (await fetch('http://localhost:5000/posts')).json()
}
