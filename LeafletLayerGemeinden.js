L.LeafletLayerGemeinden = L.Layer.extend({

    initialize: function (options) {

        if (options) {
            if (options.minZoomLabelVisible)
            {
                this._minZoomLabelVisible = options.minZoomLabelVisible;
            } else {
                this._minZoomLabelVisible = 10;
            }
            if (options.weight)
            {
                this._weight = options.weight;
            } else {
                this._weight = 2;
            }
            if (options.limit_display)
            {
                this._limit_display = options.limit_display;
            } else {
                this._limit_display = "0";
            }
            if (options.property_name)
            {
                this._property_name = options.property_name;
            } else {
                this._property_name = "GN";
            }
        } else {
            this._minZoomLabelVisible = 10;
            this._weight = 2;
            this._limit_display = "0";
            this._property_name = "GN";
        }
    },

    onAdd: function (map) {
        this._map = map;
        this._fontSize = 20;

        // Grenzen
        if (typeof gemeinden !== 'undefined') {
            this._geoJsonLayer = L.geoJson(
                    gemeinden,
                    {fillColor: 'white',
                        weight: this._weight,
                        opacity: 1,
                        color: 'red',
                        fillOpacity: 0.0}
            ).addTo(this._map);
        } else {
            alert('Die Variable "gemeinden"  ist nicht definiert!');
        }

        if (typeof this._geoJsonLayer !== 'undefined') {
            this._map.fitBounds(this._geoJsonLayer.getBounds());

            if (this._limit_display === "1") {
                this._map.setMaxBounds(this._geoJsonLayer.getBounds());
            }
        }

        // Änderung der Zoomstufe
        map.on('zoomend', this._zoomend, this);
        this._zoomend();

    },

    _zoomend: function () {
        if (typeof this._geoJsonLayer !== 'undefined') {

            if (this._map.getZoom() < this._minZoomLabelVisible) {
                this._geoJsonLayer.eachLayer(function (layer) {
                    if (layer.getTooltip()) {
                        layer.unbindTooltip();
                    }
                })
            }

            if (this._map.getZoom() >= this._minZoomLabelVisible) {
                var title = this._property_name.split('.');
                this._geoJsonLayer.eachLayer(function (layer) {
                    if (!layer.getTooltip()) {
                        if (title.length === 1) {
                            layer.bindTooltip("<span class='gemeindenTooltip'>" + JSON.stringify(layer.feature.properties[title]) + "</span>", {
                                permanent: true,
                                direction: "center"
                            }).openTooltip();
                        }
                        if (title.length === 2) {
                            layer.bindTooltip("<span class='gemeindenTooltip'>" + JSON.stringify(layer.feature.properties[title[0]][title[1]]) + "</span>", {
                                permanent: true,
                                direction: "center"
                            }).openTooltip();
                        }
                        if (title.length === 3) {
                            layer.bindTooltip("<span class='gemeindenTooltip'>" + JSON.stringify(layer.feature.properties[title[0]][title[1]][title[2]]) + "</span>", {
                                permanent: true,
                                direction: "center"
                            }).openTooltip();
                        }
                    }
                });


                // Passe die Schriftgröße an
                this._fontSize = this._map.getZoom() * this._map.getZoom() / 10 * this._map.getZoom() / 10;
                var elements = document.getElementsByClassName('gemeindenTooltip');
                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];
                    element.style.fontSize = this._fontSize + "px";
                }
            }
        }


    },

    onRemove: function () {
    }


});

L.leafletLayerGemeinden = function (options) {
    return new L.LeafletLayerGemeinden(options);
};