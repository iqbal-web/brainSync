import { useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import '../assets/scss/home.scss';

export default function Share() {
	const [articles, setArticles] = useState(() => {
		// Load once on init (safe & optimized)
		const saved = localStorage.getItem('articles');
		return saved ? JSON.parse(saved) : [];
	});

	const [title, setTitle] = useState('');
	const [summary, setSummary] = useState('');
	const [university, setUniversity] = useState('');
	const [author, setAuthor] = useState('');
	const [tag, setTag] = useState('');

	// Save to localStorage on articles update
	useEffect(() => {
		localStorage.setItem('articles', JSON.stringify(articles));
	}, [articles]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newArticle = {
			id: Date.now(),
			university,
			author,
			tag,
			title,
			summary,
			likes: 0,
			comments: 0,
			shares: 0,
		};

		setArticles([newArticle, ...articles]);

		// Clear form
		setTitle('');
		setSummary('');
		setUniversity('');
		setAuthor('');
		setTag('');
	};

	return (
		<div className="home-wrapper">
			<h1>Create & Share an Article</h1>

			<form onSubmit={handleSubmit} className="share-form">
				<div className="form-group">
					<label>Title</label>
					<input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter article title" />
				</div>

				<div className="form-group">
					<label>University</label>
					<input value={university} onChange={(e) => setUniversity(e.target.value)} placeholder="Enter university name" />
				</div>

				<div className="form-group">
					<label>Author</label>
					<input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter author name" />
				</div>

				<div className="form-group">
					<label>Tag</label>
					<input value={tag} onChange={(e) => setTag(e.target.value)} placeholder="Enter tag (e.g. CSE)" />
				</div>

				<div className="form-group">
					<label>Summary</label>
					<Editor
						apiKey="4e9wapt4tksicxes6ea966n564r9weiangmd4ps23604mzw3"
						value={summary}
						init={{
							height: 200,
							menubar: false,
							plugins: ['link', 'lists', 'preview'],
							toolbar: 'undo redo | formatselect | bold italic underline | bullist numlist | link preview',
						}}
						onEditorChange={(content) => setSummary(content)}
					/>
				</div>

				<button type="submit" className="submit-btn">Share Article</button>
			</form>

			<hr />

			{articles.map((item) => (
				<div className="card" key={item.id}>
					<div className="card-header">
						<span className="university">{item.university}</span>
						<span className="author">by <strong>{item.author}</strong></span>
						<span className="tag">{item.tag}</span>
					</div>
					<h2 className="title">{item.title}</h2>
					<div className="summary" dangerouslySetInnerHTML={{ __html: item.summary }} />
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
			))}
		</div>
	);
}
