export default {
  data: [{
    id: 'brights',
    type: 'portfolio-group',
    attributes: {
      title: 'brights',
      image: './images/brights/brights-1.jpg'
    },
    relationships: {
      pictures: {
        data: [{
          id: 'brights-1',
          type: 'picture',
        }, {
          id: 'brights-2',
          type: 'picture',
        }, {
          id: 'brights-3',
          type: 'picture',
        }, {
          id: 'brights-4',
          type: 'picture',
        }]
      }
    }
  }, {
    id: 'city-scenes',
    type: 'portfolio-group',
    attributes: {
      title: 'city scenes',
      image: './images/city-scenes/city-1.jpg'
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
          id: 'city-6',
          type: 'picture'
        }, {
          id: 'city-7',
          type: 'picture'
        }, {
          id: 'city-8',
          type: 'picture'
        }, {
          id: 'city-9',
          type: 'picture'
        }, {
          id: 'city-10',
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
      image: '/images/prints/print-8.jpg'
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
        }, {
          id: 'print-8',
          type: 'picture'
        }]
      }
    }
  }, {
    id: 'still',
    type: 'portfolio-group',
    attributes: {
      title: 'still',
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
        }, {
          id: 'coffee-cups-7',
          type: 'picture'
        }, {
          id: 'coffee-cups-8',
          type: 'picture'
        }, {
          id: 'coffee-cups-9',
          type: 'picture'
        }, {
          id: 'coffee-cups-10',
          type: 'picture'
        }, {
          id: 'coffee-cups-11',
          type: 'picture'
        }, {
          id: 'coffee-cups-12',
          type: 'picture'
        }]
      }
    }
  }]
};
