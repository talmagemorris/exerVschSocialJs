var movies = {
    name: 'Toy Story',
    date: 1995,
    genres: ['perfect'],

    next: [
      {
        name: 'Toy Story 3',
        date: 1999,
        generes: ['perfect', 'sequel']  ,
        next: [
            {
                name: 'Toy Story 3',
                born: 2010,
                genres: ['perfect', 'trilogy']
            },
            {
                name: 'Toy Story 4',
                date: 2019,
                genres: ['perfect', 'series',],
            }
        ]
      },
      {
        name: 'A Bugs Life',
        date: 1998,
        genres: ['perfect', 'amazing', 'beautiful',]
      },
      {
        name: 'Monsters, Inc',
        date: 2001,
        genres: ['perfect', 'beautiful']
      }
    ]
        
}
console.log(movies)