const { render, screen } = require('@testing-library/react');
const App = require('./App'); // Assurez-vous que le chemin d'importation est correct

test('hello world!', () => {
	render(<App />);
	const linkElement = screen.getByText(/hello world/i);
	expect(linkElement).toBeInTheDocument();
});