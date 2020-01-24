import Service from '@ember/service';

export default class MetaService extends Service {

  getMetaData(routeName) {
    switch (routeName) {
      case 'contact-me':
        return {
          title: 'Contact',
          description: 'Contact to Eszter Fekete-Toth to book your ART, painting class in Staines, Hobby Craft'
        }
      case 'about':
        return {
          title: 'About me',
          description: 'Eszter Fekete-Toth\'s biography, lives and teaches art in Staines Hobby Craft'
        }

      case 'portfolio':
        return {
          title: 'Portfolio',
          description: 'Eszter Fekete-Toth\'s Portfolio: City Scenes, Collages, Prints, Coffee cups'

        }
      case 'art-teaching':
        return {
          title: 'WATERCOLOUR PAINTING LESSONS',
          description: 'STEP by STEP watercolor painting course in Hobby Craft, Staines'
        };
      default:
        return {
          title: 'Home - Eszter Fekete-Toth - ART',
          description: 'Paintings, gallery, art teaching in Staines'
        };
    }
  }

  run(routeName) {
    const { title, description } = this.getMetaData(routeName);
    document.title = title;
    document.querySelector('meta[name=description]').content = description;
  }
}
