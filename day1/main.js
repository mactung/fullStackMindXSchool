let books = [
    { author: 'Bill Gates', title: 'The Road Ahead' },
    { author: 'Steve Jobs', title: 'Walter Isaacson' },
    {author: 'Suzanne Collins', title: 'Mockingjay: The FinalBook of The Hunger Games'}
]
let searchInput = document.getElementById('searchInput')
document.getElementById('btnSearch').onclick = ()=>{
    document.getElementById('result').innerHTML = ''
    books.map(book => {
        if (book.author.toLowerCase().includes(searchInput.value.toLowerCase())
            || book.title.toLowerCase().includes(searchInput.value.toLowerCase())) 
        {
             let {author, title} = book
            document.getElementById('result').innerHTML += `<div>Book: ${title}</div>
            <div>Author: ${author}</div>`
        }
    })
    
}
