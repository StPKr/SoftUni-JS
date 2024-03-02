function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPost);
    document.getElementById('btnViewPost').addEventListener('click', viewPost);
    const selectRef = document.getElementById('posts');
    const postTitleTref = document.getElementById('post-title');
    const postBodyRef = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    const endpoints = {
        allPost: 'http://localhost:3030/jsonstore/blog/posts',
        allComments: 'http://localhost:3030/jsonstore/blog/comments'
    }

    async function loadPost(e) {
        const response = await fetch(endpoints.allPost);
        const data = await response.json();
        selectRef.innerHTML = "";
        Object.values(data).forEach(post => {
            selectRef.innerHTML += createOptionElement(post)
        })
    }

    function createOptionElement(data) {
        return `<option value=${data.id}>${data.title}</option>`
    }

    async function viewPost(e) {
        const currentPostId = selectRef.selectedOptions[0].value;
        const responseSinglePost = await fetch(endpoints.allPost + "/" + currentPostId);
        const dataSinglePost = await responseSinglePost.json();
        const responseComments = await fetch(endpoints.allComments);
        const dataComments = await responseComments.json();
        const filteredComments = Object.values(dataComments).filter(x => x.postId == currentPostId);
        postTitleTref.textContent = dataSinglePost.title;
        postBodyRef.textContent = dataSinglePost.body;
        postComments.innerHTML = "";
        filteredComments.forEach(x => {
            const li = document.createElement('li');
            li.id = x.id;
            li.textContent = x.text;
            postComments.appendChild(li);
        })
    }


}

attachEvents();