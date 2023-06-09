// importer la config de mapbox
import config from '../../app.config.json';

// importer le fichier css
import '../assets/style.css';

// importer les librairies
import mapboxgl from 'mapbox-gl';

// importer les librairies bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// importer les scripts de bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// importer le style de mapbox
import 'mapbox-gl/dist/mapbox-gl.css';

// en dernier importer le fichier css
import '../assets/style.css';



class App {

    // propriétés
    // container de la map
    elDivMap;
    // instance de la map
    map;

    start() {
        console.log('App démarrée...');
        this.loadDom();
        this.initMap();
    }

    loadDom() {
        // ****** MAP ****** //
        this.elDivMap = document.createElement('div');
        this.elDivMap.id = 'map';

        document.body.append(this.elDivMap);

    }


    // initialiser une carte
    initMap() {
        // on récupère la clé d'api dans le fichier de config
        mapboxgl.accessToken = config.apis.mapbox_gl.api_key;

        // on instancie la map
        this.map = new mapboxgl.Map({
            container: 'map', // container ID
            style: config.apis.mapbox_gl.map_styles['satellite streets'], // style URL que l'on a configuré dans app.config.json
            center: [2.8333, 42.65], // starting position [lng, lat]
            zoom: 12 // starting zoom
        });
        const nav = new mapboxgl.NavigationControl();
        this.map.addControl(nav, 'top-left');

        // écouter le click sur la map
        this.map.on('click', this.handleClickMap.bind(this));
    }

    // méthode qui capte les clicks sur la map
    handleClickMap(evt) {
        console.log(evt);

    }


}

const app = new App();

export default app;