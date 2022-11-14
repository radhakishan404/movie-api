import { JsonDB, Config } from 'node-json-db';

var db = new JsonDB(new Config("movie_database", false, false, '/'));

await db.push("/movies", [
    {
        "id": 1,
        "name": "Black Panther",
        "image": "https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480",
        "description": "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.",
        "ratings": "7.4/10",
        "release_date": "Nov 11, 2022"
    },
    {
        "id": 2,
        "name": "The Avengers",
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg",
        "description": "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
        "ratings": "8/10",
        "release_date": "27 April 2012"
    },
    {
        "id": 3,
        "name": "Thor",
        "image": "https://image.tmdb.org/t/p/w500/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
        "description": "Thor is exiled by his father, Odin, the King of Asgard, to the Earth to live among mortals. When he lands on Earth, his trusted weapon Mjolnir is discovered and captured by S.H.I.E.L.D.",
        "ratings": "7/10",
        "release_date": "Sep 13, 2011"
    },
    {
        "id": 4,
        "name": "Avengers: Endgame",
        "image": "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
        "description": "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
        "ratings": "8.4/10",
        "release_date": "26 April 2019"
    },
    {
        "id": 5,
        "name": "Thor: Love and Thunder",
        "image": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/bigsalad_genavailposter_pay1_presunrise_v3_lg.jpg",
        "description": "Thor embarks on a journey unlike anything he's ever faced -- a quest for inner peace. However, his retirement gets interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods. To combat the threat",
        "ratings": "6.3",
        "release_date": "6 July 2022"
    }
], true);

const getMovie = async (req, res, next) => {
    try {
        let result = { status: true };
        let data = await db.getData("movies");

        result.data = data;

        res.status(200).send(result);
    } catch (error) {
        res.send(error.message);
    }
}

const addMovie = async (req, res, next) => {
    try {
        let result = { status: true };

        let data = await db.getData("movies");

        let payload = {
            id: data.movies.length + 1,
            ...req.body
        }

        let newData = [...data.movies, payload];

        await db.push("/movies", newData, true);

        result.data = data;
        res.status(200).send(result);
    } catch (error) {
        res.send(error.message);
    }
}

export {
    getMovie,
    addMovie
}