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

module.exports = {
    dummy,
    totalLikes
}