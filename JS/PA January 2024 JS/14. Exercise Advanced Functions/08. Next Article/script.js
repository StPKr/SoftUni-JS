function getArticleGenerator(articles) {
    let articlesContent = Array.from(articles);
    const contentRef = document.getElementById('content');

    return () => {
        if (!articlesContent.length) { //0
            return;
        }

        let currentArticleValue = articlesContent.shift();
        let newArticle = document.createElement("article");
        newArticle.textContent = currentArticleValue;
        contentRef.appendChild(newArticle);
    }
}
