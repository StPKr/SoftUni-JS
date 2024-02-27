const list = document.getElementById('repos');

async function loadRepos() {
	const username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`;

	try {

		const response = await fetch(url);
		if (!response.ok) {
			const message = await response.json();
			throw message;
		}
		const data = await response.json();
		list.replaceChildren(...data.map(createListItem));
	} catch (error) {
		list.textContent = error.message;
	}
}

function createListItem({ html_url, full_name }) {
	const item = document.createElement('li');
	const anchor = document.createElement('a');
	anchor.href = html_url;
	anchor.textContent = full_name;
	item.appendChild(anchor);

	return item;
}