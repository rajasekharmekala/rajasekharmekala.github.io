
(function ($) {
    $.getJSON("assets/data/blogs.json", function (json) {
        $.each(json.blogs, function (index, blog) {
            let blogContainer = document.querySelector("#blog .features")
            let article = document.createElement("article")
            let iconEl = document.createElement("span")
            let contentEl = document.createElement("div")
            let h3El = document.createElement("h3")
            let pEl = document.createElement("p")
            let ul = document.createElement('ul')
            ul.classList.add("actions")
            let li = document.createElement('li')
            let a = document.createElement('a')
            a.classList.add("button")
            a.setAttribute("href", blog.link)
            a.innerHTML = "More"
            h3El.innerHTML = blog.title
            pEl.innerHTML = blog.description
            contentEl.appendChild(h3El)
            contentEl.appendChild(pEl)
            contentEl.appendChild(ul)
            li.appendChild(a)
            ul.appendChild(li)
            iconEl.classList.add("icon")
            iconEl.classList.add(blog.icon)
            contentEl.classList.add("content")
            article.appendChild(iconEl)
            article.appendChild(contentEl)
            blogContainer.appendChild(article)

        })
    })



    $.getJSON("assets/data/works.json", function (json) {
        $.each(json.works, function (index, work) {
            let workContainer = document.querySelector("#myworks .posts")
            let article = document.createElement("article")
            // <a href="#" class="image"><img src="images/pic01.jpg" alt="" /></a>
            let imgAnc =  document.createElement("a")
            imgAnc.classList.add("image")
            imgAnc.setAttribute("href", work.link)
            let img = document.createElement("img")
            img.setAttribute("src", work.image)
            img.classList.add("myworks-art-image")
            imgAnc.appendChild(img)
            let h3El = document.createElement("h3")
            let pEl = document.createElement("p")
            let ul = document.createElement('ul')
            ul.classList.add("actions")
            let li = document.createElement('li')
            let a = document.createElement('a')
            a.classList.add("button")
            a.setAttribute("href", work.link)
            a.innerHTML = "More"
            h3El.innerHTML = work.title
            pEl.innerHTML = work.description
            article.appendChild(imgAnc)
            article.appendChild(h3El)
            article.appendChild(pEl)
            article.appendChild(ul)
            li.appendChild(a)
            ul.appendChild(li)
            article.classList.add(work.type)
            workContainer.appendChild(article)
        })
    })

})(jQuery)
