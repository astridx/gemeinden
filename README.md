# LeafletLayerGemeinden
## Anleitung / Manual
<details>
  <summary>Deutsch/German</summary>
 
Layer-Plugin für die JavaScript-Bibliothek Leaflet, welches es ermöglicht 
GeoJSON Grenzen von Gemeinden einzulesen und diese mit Namen auf der 
Karte anzuzeigen.

# Quickstart

## Voraussetzung sind zwei JavaScript-Datei. 

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
enthält.  

Die zweite Datei ist die Datei `LeafletLayerGemeinden.js` diese Repositories.

## Binden Sie die JavaScript-Dateien in Ihre HTML-Seite ein:

```
...
<script src="Gemeinden.js"></script>
<script src="LeafletLayerGemeinden.js"></script>
...
```

## Initialisieren Sie das Plugin
Sie können das Plugin auf die standardmäßige Art und Weise in Leaflet initialisieren, 
indem Sie es einer Karteninstanz hinzufügen.
Um die Standardeinstellungen zur Karteninstanz hinzuzufügen, 
verwenden Sie den folgenden Javascript-Code.

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

Wenn Sie das Plugin anpassen möchten, können Sie die folgenden Optionen verwenden
- `minZoomLabelVisible`
- `maxZoomLabelVisible`
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
        maxZoomLabelVisible: 15,
        weight: 2,
        limit_display: "1",
        property_name: "destatis.zip"
    }
    ).addTo(map);
</script>
...
```



# Options

Sie können eine Reihe von Optionen an das Plugin übergeben, um verschiedene Einstellungen zu steuern.

| Option        | Type         | Default      | Description   |
| ------------- |--------------|--------------|---------------|
| minZoomLabelVisible | number | 10 | Legt die niedrigste Zoomstufe fest, bei der die Titel angezeigt werden sollen. |
| maxZoomLabelVisible | number | 15 | Legt die höchste Zoomstufe fest, bei der die Titel angezeigt werden sollen. |
| weight | 2 | number | Position if the control | Strichbreite in Pixel. |
| limit_display | string | '0' | Beschränkt die Kartenansicht auf die angegebenen Grenzen, wenn "1" festgelegt ist. |
| property_name | string | 'GN' | Name der Eigenschaft (property) in der GeoJSON-Datei. |




</details>

<details>
  <summary>Englisch/English</summary>
Layer plug-in for the JavaScript library Leaflet, which makes it possible to read 
Borders of communities from a GeoJSON file and show these by name on the Map.

# Quickstart

## Voraussetzung sind zwei JavaScript-Datei. 
For one, this is a file that
contains the community data in the form
```
var gemeinden = {
"type": "FeatureCollection",
"name": "Gemeinden",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { ... },
...
``` 
The second file ist the file `LeafletLayerGemeinden.js` from this repository.

## Include the JavaScript files in your HTML page:

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
- `maxZoomLabelVisible`
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
| maxZoomLabelVisible | number | 15 | Determines the hightest zoom level at which the titles are to be displayed. |
| weight | 2 | number | Position if the control | Stroke width in pixels. |
| limit_display | string | '0' | Restricts the map view to the given bounds if set to '1'|
| property_name | string | 'GN' | Name of the property in the GeoJSON file. |


</details>