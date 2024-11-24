const lodash = require('lodash');

const dummy = (blogs) => {
    const array = blogs; // Recibe el array
    return 1; // Siempre retorna el valor 1
}

const totalLikes = (blogs) => {
    const total = blogs.reduce(
        (accumulator, blog) => {
            return accumulator + blog.likes
        }, 0
    )
    return total;
}

const favoriteBlog = (blogs) => {
    if (blogs.length === 1) {
        return blogs[0];
    } else if (blogs.length > 1) {

        let favorite = blogs[0];
        for (let i = 1; i < blogs.length; i++) {
            favorite.likes < blogs[i].likes
                ? favorite = blogs[i]
                : null;
        }
        return favorite;
    } else {
        return {};
    }
}

const mostBlogs = (blogs) => {

    if (blogs.length === 1) {

        return {
            author: blogs[0].author,
            blogs: 1
        }

    } else if (blogs.length > 1) {
        const authors = Object.entries(
            lodash.countBy(blogs, 'author')
        );
        const wanted = authors[authors.length - 1];
        return {
            author: wanted[0],
            blogs: wanted[1]
        }
    } else {
        return {}
    }
}

// const blogs = [
//     {
//         _id: "5a422a851b54a676234d17f7",
//         title: "React patterns",
//         author: "Michael Chan",
//         url: "https://reactpatterns.com/",
//         likes: 7,
//         __v: 0
//     },
//     {
//         _id: "5a422aa71b54a676234d17f8",
//         title: "Go To Statement Considered Harmful",
//         author: "Edsger W. Dijkstra",
//         url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
//         likes: 5,
//         __v: 0
//     },
//     {
//         _id: "5a422b3a1b54a676234d17f9",
//         title: "Canonical string reduction",
//         author: "Edsger W. Dijkstra",
//         url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
//         likes: 12,
//         __v: 0
//     },
//     {
//         _id: "5a422b891b54a676234d17fa",
//         title: "First class tests",
//         author: "Robert C. Martin",
//         url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
//         likes: 10,
//         __v: 0
//     },
//     {
//         _id: "5a422ba71b54a676234d17fb",
//         title: "TDD harms architecture",
//         author: "Robert C. Martin",
//         url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
//         likes: 0,
//         __v: 0
//     },
//     {
//         _id: "5a422bc61b54a676234d17fc",
//         title: "Type wars",
//         author: "Robert C. Martin",
//         url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
//         likes: 2,
//         __v: 0
//     }
// ];
// console.log(mostBlogs(blogs))

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}
