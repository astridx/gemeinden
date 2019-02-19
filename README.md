# LeafletLayerGemeinden
## Anleitung / Manual
<details>
  <summary>Deutsch/German</summary>
 
Layer-Plugin für die JavaScript-Bibliothek Leaflet, welches es ermöglicht 
GeoJSON Grenzen von Gemeinden einzulesen und diese mit Namen auf der 
Karte anzuzeigen.

# Quickstart

1. Voraussetzung sind zwei JavaScript-Datei. 
Zum einen ist dies eine Datei, die 
die Gemeindedaten in der Form 
```
var gemeinden = {
"type": "FeatureCollection",
"name": "Gemeinden",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { ... },
...
```
enthält 
Die zweite Datei ist die Datei `LeafletLayerGemeinden.js` diese Repositories.
2. Binden Sie die JavaScript-Dateien in Ihre HTML-Seite ein:

```
...
<script src="Gemeinden.js"></script>
<script src="LeafletLayerGemeinden.js"></script>
...
```

3. Initialize the plugin
You can initialize the plugin in the standard Leaflet way adding it to a map instance. 
To add the basic to your map instance, use this Javascript code. 
Sie können das Plugin auf die standardmäßige Art und Weise in Leaflet initialisieren, 
indem Sie es einer Karteninstanz hinzufügen.
Um die Standardeinstellungen zur Karteninstanz hinzuzufügen, 
verwenden Sie diesen Javascript-Code.

```
...
<script>
    var map = L.map('mapid', {doubleClickZoom: false}).setView([52.3, 0.191838], 18);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')
    .addTo(map);

    L.leafletLayerGemeinden().addTo(map);
</script>
...
```

If you want to customize the plugin, you can use the options 
- `minZoomLabelVisible`
- `weight`
- `limit_display`
- `property_name`

```
...
<script>
    var map = L.map('mapid', {doubleClickZoom: false}).setView([52.3, 0.191838], 18);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')
    .addTo(map);

    L.leafletLayerGemeinden({
        minZoomLabelVisible: 10,
        weight: 2,
        limit_display: "1",
        property_name: "destatis.zip"
    }
    ).addTo(map);
</script>
...
```



# Options

### Options
You can pass a number of options to the plugin to control various settings.

| Option        | Type         | Default      | Description   |
| ------------- |--------------|--------------|---------------|
| minZoomLabelVisible | number | 10 | Determines the lowest zoom level at which the titles are to be displayed. |
| weight | 2 | number | Position if the control | Stroke width in pixels. |
| limit_display | string | '0' | Restricts the map view to the given bounds if set to '1'|
| property_name | string | 'GN' | Name of the property in the GeoJSN file. |




</details>

<details>
  <summary>Englisch/English</summary>
Layer-Plugin für die JavaScript-Bibliothek Leaflet, welches es ermöglicht 
GeoJSON Grenzen von Gemeinden einzulesen und diese mit Namen auf der 
Karte anzuzeigen.

# Quickstart

1. Voraussetzung sind zwei JavaScript-Datei. 
Zum einen ist dies eine Datei, die 
die Gemeindedaten in der Form 
```
var gemeinden = {
"type": "FeatureCollection",
"name": "Gemeinden",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { ... },
...
```
enthält 
Die zweite Datei ist die Datei `LeafletLayerGemeinden.js` diese Repositories.
2. Binden Sie die JavaScript-Dateien in Ihre HTML-Seite ein:

```
...
<script src="Gemeinden.js"></script>
<script src="LeafletLayerGemeinden.js"></script>
...
```

3. Initialize the plugin
You can initialize the plugin in the standard Leaflet way adding it to a map instance. 
To add the basic to your map instance, use this Javascript code. 
Sie können das Plugin auf die standardmäßige Art und Weise in Leaflet initialisieren, 
indem Sie es einer Karteninstanz hinzufügen.
Um die Standardeinstellungen zur Karteninstanz hinzuzufügen, 
verwenden Sie diesen Javascript-Code.

```
...
<script>
    var map = L.map('mapid', {doubleClickZoom: false}).setView([52.3, 0.191838], 18);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')
    .addTo(map);

    L.leafletLayerGemeinden().addTo(map);
</script>
...
```

If you want to customize the plugin, you can use the options 
- `minZoomLabelVisible`
- `weight`
- `limit_display`
- `property_name`

```
...
<script>
    var map = L.map('mapid', {doubleClickZoom: false}).setView([52.3, 0.191838], 18);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png')
    .addTo(map);

    L.leafletLayerGemeinden({
        minZoomLabelVisible: 10,
        weight: 2,
        limit_display: "1",
        property_name: "destatis.zip"
    }
    ).addTo(map);
</script>
...
```



# Options

### Options
You can pass a number of options to the plugin to control various settings.

| Option        | Type         | Default      | Description   |
| ------------- |--------------|--------------|---------------|
| minZoomLabelVisible | number | 10 | Determines the lowest zoom level at which the titles are to be displayed. |
| weight | 2 | number | Position if the control | Stroke width in pixels. |
| limit_display | string | '0' | Restricts the map view to the given bounds if set to '1'|
| property_name | string | 'GN' | Name of the property in the GeoJSN file. |


</details>