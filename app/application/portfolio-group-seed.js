export default {
  data: [{
    id: 'city-scenes',
    type: 'portfolio-group',
    attributes: {
      title: 'city scenes',
      image: './images/city-scenes/city-2.jpg'
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
    id: 'collages',
    type: 'portfolio-group',
    attributes: {
      title: 'collages',
      image: '/images/collages/collage-2.jpg'
    },
    relationships: {
      pictures: {
        data: [{
          id: 'collage-1',
          type: 'picture'
        }, {
          id: 'collage-2',
          type: 'picture'
        }, {
          id: 'collage-3',
          type: 'picture'
        }]
      }
    }
  }, {
    id: 'prints',
    type: 'portfolio-group',
    attributes: {
      title: 'prints',
      image: '/images/collages/collage-2.jpg'
    },
    relationships: {
      pictures: {
        data: [{
          id: 'print-1',
          type: 'picture'
        }, {
          id: 'print-2',
          type: 'picture'
        }, {
          id: 'print-3',
          type: 'picture'
        }, {
          id: 'print-4',
          type: 'picture'
        }, {
          id: 'print-5',
          type: 'picture'
        }, {
          id: 'print-6',
          type: 'picture'
        }, {
          id: 'print-7',
          type: 'picture'
        }]
      }
    }
  }, {
    id: 'coffee-cups',
    type: 'portfolio-group',
    attributes: {
      title: 'coffee cups',
      image: './images/coffee-cups/coffee-cups-4.jpg'
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
