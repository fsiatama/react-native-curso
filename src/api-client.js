const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=9d7161ad723d955ea855e3d28335a3b5&format=json'

function getArtists() {
	
	return fetch(URL)
		.then( response => response.json() )
		.then( data => data.topartists.artist )
		.then( artists => artists.map( artist => ({
			id: artist.mbid,
			name: artist.name,
			image: artist.image[3]['#text'],
			likes: 200,
      		comments: 140
		})))

}

export { getArtists }