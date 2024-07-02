function Author({author}){
    return(
        <div className="Author">
            <p>Author: {author.name}</p>
            <p>Bio: {author.bio}</p>
        </div>
    );

}
export default Author;