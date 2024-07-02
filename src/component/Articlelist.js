import Author from "./author";
import './Article.css';

function Articlelist({article}) {
  return (
    <div className="Articlelist">
      {article.map((article, i) => (
        <div className="article">
          <h2>{article.title}</h2>
          <p>{article.content}</p>
          <Author author={article.author} />
        </div>
      ))};
    </div>
  );
}
export default Articlelist;
