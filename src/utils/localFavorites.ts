

export const toogleFavorite = (id: number) => {
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')
    if (favorites.includes(id)) {
        favorites = favorites.filter((pokeId) => pokeId !== id)
    } else {
        favorites.push(id)
    }
    localStorage.setItem('favorites', JSON.stringify(favorites))
}


export const isPokemonFavorite = (id: number) => {
    if (typeof window !== 'undefined') {

        const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

        return favorites.includes(id);
    }
    return false;
}

export const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]')
}

