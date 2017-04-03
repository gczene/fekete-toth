export default {
  data: [{
    id: 'city-scenes',
    type: 'portfolio-group',
    attributes: {
      title: 'city scenes',
      image: '/images/city-scenes/city-2.jpg'
    },
    relationships: {
      pictures: {
        data: [{
          id: 'city-1',
          type: 'picture'
        }, {
          id: 'city-2',
          type: 'picture'
        }, {
          id: 'city-3',
          type: 'picture'
        }, {
          id: 'city-4',
          type: 'picture'
        }, {
          id: 'city-5',
          type: 'picture'
        }, {
          id: 'city-7',
          type: 'picture'
        }, {
          id: 'city-8',
          type: 'picture'
        }]
      }
    }
  }, {
    id: 2,
    type: 'portfolio-group',
    attributes: {
      title: 'collages',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLLl7EgEpIgIno8oDkeFctENR3bY95Eoq6wWz2ze9EQkL39AW'
    }
  }, {
    id: 'coffee-cups',
    type: 'portfolio-group',
    attributes: {
      title: 'coffee cups',
      image: '/images/coffee-cups/coffee-cups-4.jpg'
    },
    relationships: {
      pictures: {
        data: [{
          id: 'coffee-cups-1',
          type: 'picture'
        }, {
          id: 'coffee-cups-2',
          type: 'picture'
        }, {
          id: 'coffee-cups-3',
          type: 'picture'
        }, {
          id: 'coffee-cups-4',
          type: 'picture'
        }, {
          id: 'coffee-cups-5',
          type: 'picture'
        }, {
          id: 'coffee-cups-6',
          type: 'picture'
        }]
      }
    }
  }]
};
