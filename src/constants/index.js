export const setLists = [
    "Party",
    "Bar",
    "My Songs",
    "All"
]

let id = 0

const getId = () => {
    return id += 1
}

export const songs = [{
    id: getId(),
    title: "Tennessee Whiskey",
    artist: "Chris Stapleton"
}, {
    id: getId(),
    title: "Ol' Red",
    artist: "Blake Shelton"
}, {
    id: getId(),
    title: "Sympathy for the Devil",
    artist: "The Rolling Stones"
}]