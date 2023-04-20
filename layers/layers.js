ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32749").setExtent([388776.117215, 9129782.279430, 389613.040485, 9130438.137570]);
var wms_layers = [];


        var lyr_GoogleStreets_0 = new ol.layer.Tile({
            'title': 'Google Streets',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMaps_2 = new ol.layer.Tile({
            'title': 'OpenStreetMaps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Admin_Purwodadi_3 = new ol.format.GeoJSON();
var features_Admin_Purwodadi_3 = format_Admin_Purwodadi_3.readFeatures(json_Admin_Purwodadi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Admin_Purwodadi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Admin_Purwodadi_3.addFeatures(features_Admin_Purwodadi_3);
var lyr_Admin_Purwodadi_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Admin_Purwodadi_3, 
                style: style_Admin_Purwodadi_3,
                interactive: true,
                title: '<img src="styles/legend/Admin_Purwodadi_3.png" /> Admin_Purwodadi'
            });
var format_Penggunaan_Lahan_4 = new ol.format.GeoJSON();
var features_Penggunaan_Lahan_4 = format_Penggunaan_Lahan_4.readFeatures(json_Penggunaan_Lahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Penggunaan_Lahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Penggunaan_Lahan_4.addFeatures(features_Penggunaan_Lahan_4);
var lyr_Penggunaan_Lahan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Penggunaan_Lahan_4, 
                style: style_Penggunaan_Lahan_4,
                interactive: true,
    title: 'Penggunaan_Lahan<br />\
    <img src="styles/legend/Penggunaan_Lahan_4_0.png" /> Hamparan Pasir Pantai<br />\
    <img src="styles/legend/Penggunaan_Lahan_4_1.png" /> Hutan Lahan Basah<br />\
    <img src="styles/legend/Penggunaan_Lahan_4_2.png" /> Hutan Lahan Kering<br />\
    <img src="styles/legend/Penggunaan_Lahan_4_3.png" /> Ladang<br />\
    <img src="styles/legend/Penggunaan_Lahan_4_4.png" /> Lahan Terbangun<br />\
    <img src="styles/legend/Penggunaan_Lahan_4_5.png" /> Lahan Tidak Terbangun<br />\
    <img src="styles/legend/Penggunaan_Lahan_4_6.png" /> Perkebunan Campuran<br />\
    <img src="styles/legend/Penggunaan_Lahan_4_7.png" /> Saluran Irigasi<br />\
    <img src="styles/legend/Penggunaan_Lahan_4_8.png" /> Sawah Irigasi<br />\
    <img src="styles/legend/Penggunaan_Lahan_4_9.png" /> Semak<br />\
    <img src="styles/legend/Penggunaan_Lahan_4_10.png" /> Sungai<br />\
    <img src="styles/legend/Penggunaan_Lahan_4_11.png" /> Tambak Ikan<br />\
    <img src="styles/legend/Penggunaan_Lahan_4_12.png" /> Tanaman Campuran<br />'
        });
var format_Bangunan_PWD_5 = new ol.format.GeoJSON();
var features_Bangunan_PWD_5 = format_Bangunan_PWD_5.readFeatures(json_Bangunan_PWD_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Bangunan_PWD_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_PWD_5.addFeatures(features_Bangunan_PWD_5);
var lyr_Bangunan_PWD_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan_PWD_5, 
                style: style_Bangunan_PWD_5,
                interactive: true,
                title: '<img src="styles/legend/Bangunan_PWD_5.png" /> Bangunan_PWD'
            });
var format_Area_Terdampak_Pembangunan_6 = new ol.format.GeoJSON();
var features_Area_Terdampak_Pembangunan_6 = format_Area_Terdampak_Pembangunan_6.readFeatures(json_Area_Terdampak_Pembangunan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Area_Terdampak_Pembangunan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Area_Terdampak_Pembangunan_6.addFeatures(features_Area_Terdampak_Pembangunan_6);
var lyr_Area_Terdampak_Pembangunan_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Area_Terdampak_Pembangunan_6, 
                style: style_Area_Terdampak_Pembangunan_6,
                interactive: true,
                title: '<img src="styles/legend/Area_Terdampak_Pembangunan_6.png" /> Area_Terdampak_Pembangunan'
            });
var format_Jaringan_Jalan_7 = new ol.format.GeoJSON();
var features_Jaringan_Jalan_7 = format_Jaringan_Jalan_7.readFeatures(json_Jaringan_Jalan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_Jaringan_Jalan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Jalan_7.addFeatures(features_Jaringan_Jalan_7);
var lyr_Jaringan_Jalan_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jaringan_Jalan_7, 
                style: style_Jaringan_Jalan_7,
                interactive: true,
                title: '<img src="styles/legend/Jaringan_Jalan_7.png" /> Jaringan_Jalan'
            });

lyr_GoogleStreets_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMaps_2.setVisible(true);lyr_Admin_Purwodadi_3.setVisible(false);lyr_Penggunaan_Lahan_4.setVisible(false);lyr_Bangunan_PWD_5.setVisible(true);lyr_Area_Terdampak_Pembangunan_6.setVisible(true);lyr_Jaringan_Jalan_7.setVisible(true);
var layersList = [lyr_GoogleStreets_0,lyr_GoogleSatellite_1,lyr_OpenStreetMaps_2,lyr_Admin_Purwodadi_3,lyr_Penggunaan_Lahan_4,lyr_Bangunan_PWD_5,lyr_Area_Terdampak_Pembangunan_6,lyr_Jaringan_Jalan_7];
lyr_Admin_Purwodadi_3.set('fieldAliases', {'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', });
lyr_Penggunaan_Lahan_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Jenis': 'Jenis', 'Metadata': 'Metadata', 'Ordo_1': 'Ordo_1', 'Ordo_2': 'Ordo_2', 'Ordo_3': 'Ordo_3', 'Ordo_4': 'Ordo_4', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Bangunan_PWD_5.set('fieldAliases', {'Jenis': 'Jenis', });
lyr_Area_Terdampak_Pembangunan_6.set('fieldAliases', {'Jenis': 'Jenis', 'Desa': 'Desa', 'Kecamatan': 'Kecamatan', 'Kabupaten': 'Kabupaten', 'ganti_rugi': 'ganti_rugi', });
lyr_Jaringan_Jalan_7.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Tema': 'Tema', 'Jenis': 'Jenis', 'Jenis_Bang': 'Jenis_Bang', 'Toponim': 'Toponim', 'Metadata': 'Metadata', });
lyr_Admin_Purwodadi_3.set('fieldImages', {'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', });
lyr_Penggunaan_Lahan_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Jenis': 'TextEdit', 'Metadata': 'TextEdit', 'Ordo_1': 'TextEdit', 'Ordo_2': 'TextEdit', 'Ordo_3': 'TextEdit', 'Ordo_4': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Bangunan_PWD_5.set('fieldImages', {'Jenis': '', });
lyr_Area_Terdampak_Pembangunan_6.set('fieldImages', {'Jenis': '', 'Desa': '', 'Kecamatan': '', 'Kabupaten': '', 'ganti_rugi': '', });
lyr_Jaringan_Jalan_7.set('fieldImages', {'Shape_Leng': '', 'Shape_Area': '', 'Tema': '', 'Jenis': '', 'Jenis_Bang': '', 'Toponim': '', 'Metadata': '', });
lyr_Admin_Purwodadi_3.set('fieldLabels', {'KDEBPS': 'no label', 'KDEPUM': 'no label', 'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'KECAMATAN': 'no label', 'DESA': 'no label', 'SUMBER': 'no label', });
lyr_Penggunaan_Lahan_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Jenis': 'no label', 'Metadata': 'no label', 'Ordo_1': 'no label', 'Ordo_2': 'no label', 'Ordo_3': 'no label', 'Ordo_4': 'header label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Bangunan_PWD_5.set('fieldLabels', {'Jenis': 'no label', });
lyr_Area_Terdampak_Pembangunan_6.set('fieldLabels', {'Jenis': 'header label', 'Desa': 'header label', 'Kecamatan': 'header label', 'Kabupaten': 'header label', 'ganti_rugi': 'header label', });
lyr_Jaringan_Jalan_7.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Tema': 'no label', 'Jenis': 'no label', 'Jenis_Bang': 'no label', 'Toponim': 'no label', 'Metadata': 'no label', });
lyr_Jaringan_Jalan_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});