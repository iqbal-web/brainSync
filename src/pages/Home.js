import { useEffect, useState } from 'react';
import '../assets/scss/home.scss';
import SearchFilters from '../components/SearchFilters';

export default function Home() {
  const [articles, setArticles] = useState([]);

  // Load articles from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('articles');
    if (saved) {
      setArticles(JSON.parse(saved));
    }
  }, []);

  return (
    <div className="home-wrapper">
      <SearchFilters />

      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        articles.map((item) => (
          <div className="card" key={item.id}>
            <div className="card-header">
              <span className="university">{item.university}</span>
              <span className="author">by <strong>{item.author}</strong></span>
              <span className="tag">{item.tag}</span>
            </div>
            <h2 className="title">{item.title}</h2>
            <div
              className="summary"
              dangerouslySetInnerHTML={{ __html: item.summary }}
            />
            <div className="card-footer">
              <a href="#" className="read-more">Read More</a>
              <div className="icons">
                <span>👍 {String(item.likes).padStart(2, '0')}</span>
                <span>💬 {String(item.comments).padStart(2, '0')}</span>
                <span>🔁 {String(item.shares).padStart(2, '0')}</span>
              </div>
            </div>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
