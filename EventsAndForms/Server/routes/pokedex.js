const express = require('express')

const router = new express.Router()
const pokemons = require('./../data/pokemons')

router.post('/create', (req, res, next) => {
    pokemons.addPokem((req.body))

    return res.status(201).json({
        message: 'Pokemon added successfully.',
        pokemonCollection: pokemons.retrivePokemons()
    })
})

router.get('/pokedex', (req, res, next) => {
    console.log('getting...')

    return res.status(200).json(pokemons.retrivePokemons())
})

module.exports = router