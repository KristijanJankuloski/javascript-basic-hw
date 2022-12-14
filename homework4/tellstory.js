function tellStory(elements){
    return `This is ${elements[0]}. ${elements[0]} is a nice person. Today they are ${elements[1]}. They are ${elements[2]} all day. The end`;
}

// --- TEST CASE ---
const storyItems = ["Kiko", "happy", "coding"];
console.log(tellStory(storyItems));