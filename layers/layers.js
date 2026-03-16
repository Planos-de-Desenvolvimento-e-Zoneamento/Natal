ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31985").setExtent([255354.166150, 9361101.943656, 256807.170724, 9362045.102318]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_reasPrioritriasParaConservao_1 = new ol.format.GeoJSON();
var features_reasPrioritriasParaConservao_1 = format_reasPrioritriasParaConservao_1.readFeatures(json_reasPrioritriasParaConservao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_reasPrioritriasParaConservao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasPrioritriasParaConservao_1.addFeatures(features_reasPrioritriasParaConservao_1);
var lyr_reasPrioritriasParaConservao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasPrioritriasParaConservao_1, 
                style: style_reasPrioritriasParaConservao_1,
                popuplayertitle: 'Áreas Prioritárias Para Conservação',
                interactive: true,
                title: '<img src="styles/legend/reasPrioritriasParaConservao_1.png" /> Áreas Prioritárias Para Conservação'
            });
var format_Equipamentos_2 = new ol.format.GeoJSON();
var features_Equipamentos_2 = format_Equipamentos_2.readFeatures(json_Equipamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_Equipamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Equipamentos_2.addFeatures(features_Equipamentos_2);
var lyr_Equipamentos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Equipamentos_2, 
                style: style_Equipamentos_2,
                popuplayertitle: 'Equipamentos',
                interactive: true,
                title: '<img src="styles/legend/Equipamentos_2.png" /> Equipamentos'
            });
var format_ServiosdeApoio_3 = new ol.format.GeoJSON();
var features_ServiosdeApoio_3 = format_ServiosdeApoio_3.readFeatures(json_ServiosdeApoio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_ServiosdeApoio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ServiosdeApoio_3.addFeatures(features_ServiosdeApoio_3);
cluster_ServiosdeApoio_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_ServiosdeApoio_3
});
var lyr_ServiosdeApoio_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_ServiosdeApoio_3, 
                style: style_ServiosdeApoio_3,
                popuplayertitle: 'Serviços de Apoio',
                interactive: true,
                title: '<img src="styles/legend/ServiosdeApoio_3.png" /> Serviços de Apoio'
            });
var format_Fundeadouros_4 = new ol.format.GeoJSON();
var features_Fundeadouros_4 = format_Fundeadouros_4.readFeatures(json_Fundeadouros_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_Fundeadouros_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fundeadouros_4.addFeatures(features_Fundeadouros_4);
var lyr_Fundeadouros_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fundeadouros_4, 
                style: style_Fundeadouros_4,
                popuplayertitle: 'Fundeadouros',
                interactive: true,
                title: '<img src="styles/legend/Fundeadouros_4.png" /> Fundeadouros'
            });
var format_BaciadeEvoluao_5 = new ol.format.GeoJSON();
var features_BaciadeEvoluao_5 = format_BaciadeEvoluao_5.readFeatures(json_BaciadeEvoluao_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_BaciadeEvoluao_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciadeEvoluao_5.addFeatures(features_BaciadeEvoluao_5);
var lyr_BaciadeEvoluao_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciadeEvoluao_5, 
                style: style_BaciadeEvoluao_5,
                popuplayertitle: 'Bacia de Evoluçao',
                interactive: true,
                title: '<img src="styles/legend/BaciadeEvoluao_5.png" /> Bacia de Evoluçao'
            });
var format_CanaldeAcesso_6 = new ol.format.GeoJSON();
var features_CanaldeAcesso_6 = format_CanaldeAcesso_6.readFeatures(json_CanaldeAcesso_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_CanaldeAcesso_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaldeAcesso_6.addFeatures(features_CanaldeAcesso_6);
var lyr_CanaldeAcesso_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaldeAcesso_6, 
                style: style_CanaldeAcesso_6,
                popuplayertitle: 'Canal de Acesso',
                interactive: true,
                title: '<img src="styles/legend/CanaldeAcesso_6.png" /> Canal de Acesso'
            });
var format_AcessosInternosRodovirios_7 = new ol.format.GeoJSON();
var features_AcessosInternosRodovirios_7 = format_AcessosInternosRodovirios_7.readFeatures(json_AcessosInternosRodovirios_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_AcessosInternosRodovirios_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosInternosRodovirios_7.addFeatures(features_AcessosInternosRodovirios_7);
var lyr_AcessosInternosRodovirios_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosInternosRodovirios_7, 
                style: style_AcessosInternosRodovirios_7,
                popuplayertitle: 'Acessos Internos Rodoviários',
                interactive: true,
                title: '<img src="styles/legend/AcessosInternosRodovirios_7.png" /> Acessos Internos Rodoviários'
            });
var format_AcessoRodovirio_8 = new ol.format.GeoJSON();
var features_AcessoRodovirio_8 = format_AcessoRodovirio_8.readFeatures(json_AcessoRodovirio_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_AcessoRodovirio_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessoRodovirio_8.addFeatures(features_AcessoRodovirio_8);
var lyr_AcessoRodovirio_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessoRodovirio_8, 
                style: style_AcessoRodovirio_8,
                popuplayertitle: 'Acesso Rodoviário',
                interactive: true,
                title: '<img src="styles/legend/AcessoRodovirio_8.png" /> Acesso Rodoviário'
            });
var format_InstalaeNoOperacionais_9 = new ol.format.GeoJSON();
var features_InstalaeNoOperacionais_9 = format_InstalaeNoOperacionais_9.readFeatures(json_InstalaeNoOperacionais_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_InstalaeNoOperacionais_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaeNoOperacionais_9.addFeatures(features_InstalaeNoOperacionais_9);
var lyr_InstalaeNoOperacionais_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaeNoOperacionais_9, 
                style: style_InstalaeNoOperacionais_9,
                popuplayertitle: 'Instalaçõe Não Operacionais',
                interactive: true,
                title: '<img src="styles/legend/InstalaeNoOperacionais_9.png" /> Instalaçõe Não Operacionais'
            });
var format_Acostagem_10 = new ol.format.GeoJSON();
var features_Acostagem_10 = format_Acostagem_10.readFeatures(json_Acostagem_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_Acostagem_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acostagem_10.addFeatures(features_Acostagem_10);
var lyr_Acostagem_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acostagem_10, 
                style: style_Acostagem_10,
                popuplayertitle: 'Acostagem ',
                interactive: true,
                title: '<img src="styles/legend/Acostagem_10.png" /> Acostagem '
            });
var format_Armazenagem_11 = new ol.format.GeoJSON();
var features_Armazenagem_11 = format_Armazenagem_11.readFeatures(json_Armazenagem_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_Armazenagem_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Armazenagem_11.addFeatures(features_Armazenagem_11);
var lyr_Armazenagem_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Armazenagem_11, 
                style: style_Armazenagem_11,
                popuplayertitle: 'Armazenagem ',
                interactive: true,
                title: '<img src="styles/legend/Armazenagem_11.png" /> Armazenagem '
            });
var format_TerminaisdePassageiros_12 = new ol.format.GeoJSON();
var features_TerminaisdePassageiros_12 = format_TerminaisdePassageiros_12.readFeatures(json_TerminaisdePassageiros_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_TerminaisdePassageiros_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaisdePassageiros_12.addFeatures(features_TerminaisdePassageiros_12);
var lyr_TerminaisdePassageiros_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaisdePassageiros_12, 
                style: style_TerminaisdePassageiros_12,
                popuplayertitle: 'Terminais de Passageiros ',
                interactive: true,
                title: '<img src="styles/legend/TerminaisdePassageiros_12.png" /> Terminais de Passageiros '
            });
var format_reaseInstalaesAlfandegadasdoPorto_13 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadasdoPorto_13 = format_reaseInstalaesAlfandegadasdoPorto_13.readFeatures(json_reaseInstalaesAlfandegadasdoPorto_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_reaseInstalaesAlfandegadasdoPorto_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadasdoPorto_13.addFeatures(features_reaseInstalaesAlfandegadasdoPorto_13);
var lyr_reaseInstalaesAlfandegadasdoPorto_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadasdoPorto_13, 
                style: style_reaseInstalaesAlfandegadasdoPorto_13,
                popuplayertitle: 'Áreas e Instalações Alfandegadas do Porto ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadasdoPorto_13.png" /> Áreas e Instalações Alfandegadas do Porto '
            });
var format_reasArrendveis_14 = new ol.format.GeoJSON();
var features_reasArrendveis_14 = format_reasArrendveis_14.readFeatures(json_reasArrendveis_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_reasArrendveis_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendveis_14.addFeatures(features_reasArrendveis_14);
var lyr_reasArrendveis_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendveis_14, 
                style: style_reasArrendveis_14,
                popuplayertitle: 'Áreas Arrendáveis ',
                interactive: true,
                title: '<img src="styles/legend/reasArrendveis_14.png" /> Áreas Arrendáveis '
            });
var format_reasArrendadas_15 = new ol.format.GeoJSON();
var features_reasArrendadas_15 = format_reasArrendadas_15.readFeatures(json_reasArrendadas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_reasArrendadas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasArrendadas_15.addFeatures(features_reasArrendadas_15);
var lyr_reasArrendadas_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasArrendadas_15, 
                style: style_reasArrendadas_15,
                popuplayertitle: 'Áreas Arrendadas',
                interactive: true,
                title: '<img src="styles/legend/reasArrendadas_15.png" /> Áreas Arrendadas'
            });
var format_ZoneamentoLongoPrazo_16 = new ol.format.GeoJSON();
var features_ZoneamentoLongoPrazo_16 = format_ZoneamentoLongoPrazo_16.readFeatures(json_ZoneamentoLongoPrazo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_ZoneamentoLongoPrazo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoLongoPrazo_16.addFeatures(features_ZoneamentoLongoPrazo_16);
var lyr_ZoneamentoLongoPrazo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoLongoPrazo_16, 
                style: style_ZoneamentoLongoPrazo_16,
                popuplayertitle: 'Zoneamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ZoneamentoLongoPrazo_16.png" /> Zoneamento - Longo Prazo '
            });
var format_ZoneamentoMdioPrazo_17 = new ol.format.GeoJSON();
var features_ZoneamentoMdioPrazo_17 = format_ZoneamentoMdioPrazo_17.readFeatures(json_ZoneamentoMdioPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_ZoneamentoMdioPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoMdioPrazo_17.addFeatures(features_ZoneamentoMdioPrazo_17);
var lyr_ZoneamentoMdioPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoMdioPrazo_17, 
                style: style_ZoneamentoMdioPrazo_17,
                popuplayertitle: 'Zoneamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ZoneamentoMdioPrazo_17.png" /> Zoneamento - Médio Prazo '
            });
var format_ZoneamentoCurtoPrazo_18 = new ol.format.GeoJSON();
var features_ZoneamentoCurtoPrazo_18 = format_ZoneamentoCurtoPrazo_18.readFeatures(json_ZoneamentoCurtoPrazo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_ZoneamentoCurtoPrazo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoCurtoPrazo_18.addFeatures(features_ZoneamentoCurtoPrazo_18);
var lyr_ZoneamentoCurtoPrazo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoCurtoPrazo_18, 
                style: style_ZoneamentoCurtoPrazo_18,
                popuplayertitle: 'Zoneamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ZoneamentoCurtoPrazo_18.png" /> Zoneamento - Curto Prazo '
            });
var format_ZoneamentoSituaoAtual_19 = new ol.format.GeoJSON();
var features_ZoneamentoSituaoAtual_19 = format_ZoneamentoSituaoAtual_19.readFeatures(json_ZoneamentoSituaoAtual_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_ZoneamentoSituaoAtual_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZoneamentoSituaoAtual_19.addFeatures(features_ZoneamentoSituaoAtual_19);
var lyr_ZoneamentoSituaoAtual_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZoneamentoSituaoAtual_19, 
                style: style_ZoneamentoSituaoAtual_19,
                popuplayertitle: 'Zoneamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ZoneamentoSituaoAtual_19.png" /> Zoneamento - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeNatal_20 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeNatal_20 = format_PoligonaldareadoPortoOrganizadodeNatal_20.readFeatures(json_PoligonaldareadoPortoOrganizadodeNatal_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31985'});
var jsonSource_PoligonaldareadoPortoOrganizadodeNatal_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeNatal_20.addFeatures(features_PoligonaldareadoPortoOrganizadodeNatal_20);
var lyr_PoligonaldareadoPortoOrganizadodeNatal_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeNatal_20, 
                style: style_PoligonaldareadoPortoOrganizadodeNatal_20,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Natal',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeNatal_20.png" /> Poligonal da Área do Porto Organizado de Natal'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeNatal_20,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_Zoneamento = new ol.layer.Group({
                                layers: [lyr_ZoneamentoLongoPrazo_16,lyr_ZoneamentoMdioPrazo_17,lyr_ZoneamentoCurtoPrazo_18,lyr_ZoneamentoSituaoAtual_19,],
                                fold: 'open',
                                title: 'Zoneamento'});
var group_reasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasArrendadas_15,],
                                fold: 'open',
                                title: 'Áreas Arrendadas '});
var group_reasArrendveis = new ol.layer.Group({
                                layers: [lyr_reasArrendveis_14,],
                                fold: 'open',
                                title: 'Áreas Arrendáveis '});
var group_reaseInstalaesAlfandegadasdoPorto = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadasdoPorto_13,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas do Porto '});
var group_TerminaisdePassageiros = new ol.layer.Group({
                                layers: [lyr_TerminaisdePassageiros_12,],
                                fold: 'open',
                                title: 'Terminais de Passageiros '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_Armazenagem_11,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_Acostagem_10,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_InstalaesNoOperacionais = new ol.layer.Group({
                                layers: [lyr_InstalaeNoOperacionais_9,],
                                fold: 'open',
                                title: 'Instalações Não Operacionais '});
var group_AcessosRodovirios = new ol.layer.Group({
                                layers: [lyr_AcessoRodovirio_8,],
                                fold: 'open',
                                title: 'Acessos Rodoviários '});
var group_AcessosInternosRodovirios = new ol.layer.Group({
                                layers: [lyr_AcessosInternosRodovirios_7,],
                                fold: 'open',
                                title: 'Acessos Internos Rodoviários '});
var group_CanaldeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaldeAcesso_6,],
                                fold: 'open',
                                title: 'Canal de Acesso '});
var group_BaciadeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciadeEvoluao_5,],
                                fold: 'open',
                                title: 'Bacia de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_Fundeadouros_4,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_ServiosdeApoio = new ol.layer.Group({
                                layers: [lyr_ServiosdeApoio_3,],
                                fold: 'open',
                                title: 'Serviços de Apoio '});
var group_Equipamentos = new ol.layer.Group({
                                layers: [lyr_Equipamentos_2,],
                                fold: 'open',
                                title: 'Equipamentos '});
var group_reasPrioritriasparaConservao = new ol.layer.Group({
                                layers: [lyr_reasPrioritriasParaConservao_1,],
                                fold: 'open',
                                title: 'Áreas Prioritárias para Conservação '});

lyr_GoogleSatellite_0.setVisible(true);lyr_reasPrioritriasParaConservao_1.setVisible(false);lyr_Equipamentos_2.setVisible(false);lyr_ServiosdeApoio_3.setVisible(false);lyr_Fundeadouros_4.setVisible(false);lyr_BaciadeEvoluao_5.setVisible(false);lyr_CanaldeAcesso_6.setVisible(false);lyr_AcessosInternosRodovirios_7.setVisible(false);lyr_AcessoRodovirio_8.setVisible(false);lyr_InstalaeNoOperacionais_9.setVisible(false);lyr_Acostagem_10.setVisible(false);lyr_Armazenagem_11.setVisible(false);lyr_TerminaisdePassageiros_12.setVisible(false);lyr_reaseInstalaesAlfandegadasdoPorto_13.setVisible(false);lyr_reasArrendveis_14.setVisible(false);lyr_reasArrendadas_15.setVisible(false);lyr_ZoneamentoLongoPrazo_16.setVisible(false);lyr_ZoneamentoMdioPrazo_17.setVisible(false);lyr_ZoneamentoCurtoPrazo_18.setVisible(false);lyr_ZoneamentoSituaoAtual_19.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeNatal_20.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_reasPrioritriasparaConservao,group_Equipamentos,group_ServiosdeApoio,group_Fundeadouros,group_BaciadeEvoluo,group_CanaldeAcesso,group_AcessosInternosRodovirios,group_AcessosRodovirios,group_InstalaesNoOperacionais,group_Acostagem,group_Armazenagem,group_TerminaisdePassageiros,group_reaseInstalaesAlfandegadasdoPorto,group_reasArrendveis,group_reasArrendadas,group_Zoneamento,group_PoligonaldareadoPortoOrganizado];
lyr_reasPrioritriasParaConservao_1.set('fieldAliases', {'Acaop_pos': 'Ação Prioritária ', 'Nome': 'Nome', 'Tipo': 'Tipo', 'Ameaças': 'Ameaças', 'Caracterí': 'Características ', 'Importanci': 'Importância ', 'Fonte': 'Fonte', 'Ano_Dispon': 'Ano de Disponibilização ', });
lyr_Equipamentos_2.set('fieldAliases', {'Tipo': 'Tipo de Equipamento ', 'Finalidade': 'Finalidade do Equipamento ', 'Operador': 'Operador do Equipamento ', 'Capacid(t)': 'Capacidade do Equipamento (t) ', 'Fabricacao': 'Data de Fabricação ', 'Tempo(ano)': 'Tempo de Uso (anos) ', });
lyr_ServiosdeApoio_3.set('fieldAliases', {'Empresa': 'Empresa Fornecedora ', 'Capacidade': 'Capacidade', 'Serviços': 'Serviço Oferecido ', });
lyr_Fundeadouros_4.set('fieldAliases', {'Quantidade': 'Quantidade', 'Localiz': 'Localização ', 'Comprim(m)': 'Comprimento (m) ', 'Largura(m)': 'Largura (m) ', 'Dirmet(m)': 'Diâmetro (m) ', 'Profud': 'Profundidade (m) ', });
lyr_BaciadeEvoluao_5.set('fieldAliases', {'Quantidade': 'Quantidade', 'Localiz': 'Localização ', 'Profund(m)': 'Profundidade (m) ', 'Comprim(m)': 'Comprimento (m) ', 'Largura(m)': 'Largura (m) ', 'Dirmet(m)': 'Diâmetro (m) ', });
lyr_CanaldeAcesso_6.set('fieldAliases', {'Trecho': 'Trecho', 'Comprim(m)': 'Comprimento (m) ', 'Largura(m)': 'Largura (m) ', 'Dirmet(m)': 'Diâmetro (m) ', 'Profund(m)': 'Profundidade (m) ', });
lyr_AcessosInternosRodovirios_7.set('fieldAliases', {'Nome': 'Nome', 'Extens(Km)': 'Extensão (Km) ', });
lyr_AcessoRodovirio_8.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'PNV': 'PNV (plano nacional da viação) ', 'JurisdiKmo': 'Jurisdição ', 'Classific': 'Classificação ', 'Concessio': 'Concessão ', 'Municspio': 'Município ', 'UF': 'Unidade de Federação ', 'Extensão': 'Extensão', 'VMD_Diario': 'VMD Diário ', });
lyr_InstalaeNoOperacionais_9.set('fieldAliases', {'Tipo': 'Tipo de Instalação ', 'Uso': 'Uso da Instalação ', 'Area (m2)': 'Área (m²) ', 'Regime': 'Regime de Exploração ', 'Justificat': 'Justificativa ', });
lyr_Acostagem_10.set('fieldAliases', {'Berco': 'Identificador do Berço ', 'Conserva': 'Estado de Conservação ', 'Car_Constr': 'Características Construtivas ', 'Comprim(m)': 'Comprimento (m) ', 'Profund(m)': 'Profundidade (m) ', 'Princ_Prod': 'Principais Produtos ', });
lyr_Armazenagem_11.set('fieldAliases', {'Topo': 'Tipo da Instalação ', 'Capacidade': 'Capacidade (t) ', 'Regime_Exp': 'Regime de Exploração ', 'Area__m²_': 'Área (m²) ', 'Volume__m': 'Volume (m³) ', });
lyr_TerminaisdePassageiros_12.set('fieldAliases', {'Area (m2)': 'Área (m²) ', 'Capacidade': 'Capacidade de atendimento (passageiros por ano) ', });
lyr_reaseInstalaesAlfandegadasdoPorto_13.set('fieldAliases', {'Nome': 'Nome', 'Companhia': 'Companhia', 'Produto': 'Tipo de Produto ', 'Inst_Legal': 'Instrumento Legal ', 'Area__m²_': 'Área (m²) ', });
lyr_reasArrendveis_14.set('fieldAliases', {'Area': 'Área (m²) ', 'Nome': 'Nome da Área ', 'Uso': 'Uso', });
lyr_reasArrendadas_15.set('fieldAliases', {'Grupo': 'Grupo', 'Aut_Port': 'Autoridade Portuária ', 'N_Contrato': 'Número do Contrato ', 'Arrend_Atu': 'Arrendatário Atual ', 'Tipo_Espec': 'Tipo Especificado no Instrumento ', 'Finalidade': 'Finalidade ', 'Inlcio': 'Data de Início do Arrendamento ', 'Tnrmino': 'Data de Término do Arrendamento ', 'Observat': 'Observações ', 'Area_m²': 'Área (m²) ', });
lyr_ZoneamentoLongoPrazo_16.set('fieldAliases', {'Categoria': 'Categoria', 'Operador': 'Operador', 'Area__m²_': 'Área (m²) ', });
lyr_ZoneamentoMdioPrazo_17.set('fieldAliases', {'Categoria': 'Categoria', 'Operador': 'Operador', 'Area__m²_': 'Área (m²) ', });
lyr_ZoneamentoCurtoPrazo_18.set('fieldAliases', {'Categoria': 'Categoria', 'Operador': 'Operador', 'Area__m²_': 'Área (m²) ', });
lyr_ZoneamentoSituaoAtual_19.set('fieldAliases', {'Categoria': 'Categoria ', 'Operador': 'Operador', 'Area__m²_': 'Área (m²) ', });
lyr_PoligonaldareadoPortoOrganizadodeNatal_20.set('fieldAliases', {'Name': 'Nome', 'ins': 'Instrumento Legal', 'Tipo': 'Tipo', 'Área m²': 'Área (m²) ', });
lyr_reasPrioritriasParaConservao_1.set('fieldImages', {'Acaop_pos': 'TextEdit', 'Nome': 'TextEdit', 'Tipo': 'TextEdit', 'Ameaças': 'TextEdit', 'Caracterí': 'TextEdit', 'Importanci': 'TextEdit', 'Fonte': 'TextEdit', 'Ano_Dispon': 'TextEdit', });
lyr_Equipamentos_2.set('fieldImages', {'Tipo': 'TextEdit', 'Finalidade': 'TextEdit', 'Operador': 'TextEdit', 'Capacid(t)': 'TextEdit', 'Fabricacao': 'DateTime', 'Tempo(ano)': 'TextEdit', });
lyr_ServiosdeApoio_3.set('fieldImages', {'Empresa': 'TextEdit', 'Capacidade': 'Range', 'Serviços': 'TextEdit', });
lyr_Fundeadouros_4.set('fieldImages', {'Quantidade': 'TextEdit', 'Localiz': 'TextEdit', 'Comprim(m)': 'TextEdit', 'Largura(m)': 'TextEdit', 'Dirmet(m)': 'TextEdit', 'Profud': 'TextEdit', });
lyr_BaciadeEvoluao_5.set('fieldImages', {'Quantidade': 'TextEdit', 'Localiz': 'TextEdit', 'Profund(m)': 'TextEdit', 'Comprim(m)': 'TextEdit', 'Largura(m)': 'TextEdit', 'Dirmet(m)': 'TextEdit', });
lyr_CanaldeAcesso_6.set('fieldImages', {'Trecho': 'TextEdit', 'Comprim(m)': 'TextEdit', 'Largura(m)': 'TextEdit', 'Dirmet(m)': 'TextEdit', 'Profund(m)': 'TextEdit', });
lyr_AcessosInternosRodovirios_7.set('fieldImages', {'Nome': 'TextEdit', 'Extens(Km)': 'TextEdit', });
lyr_AcessoRodovirio_8.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'PNV': 'TextEdit', 'JurisdiKmo': 'TextEdit', 'Classific': 'TextEdit', 'Concessio': 'TextEdit', 'Municspio': 'TextEdit', 'UF': 'TextEdit', 'Extensão': 'TextEdit', 'VMD_Diario': 'TextEdit', });
lyr_InstalaeNoOperacionais_9.set('fieldImages', {'Tipo': 'TextEdit', 'Uso': 'TextEdit', 'Area (m2)': 'TextEdit', 'Regime': 'TextEdit', 'Justificat': 'TextEdit', });
lyr_Acostagem_10.set('fieldImages', {'Berco': 'TextEdit', 'Conserva': 'TextEdit', 'Car_Constr': 'TextEdit', 'Comprim(m)': 'TextEdit', 'Profund(m)': 'TextEdit', 'Princ_Prod': 'TextEdit', });
lyr_Armazenagem_11.set('fieldImages', {'Topo': 'TextEdit', 'Capacidade': 'TextEdit', 'Regime_Exp': 'TextEdit', 'Area__m²_': 'TextEdit', 'Volume__m': 'Range', });
lyr_TerminaisdePassageiros_12.set('fieldImages', {'Area (m2)': 'TextEdit', 'Capacidade': 'TextEdit', });
lyr_reaseInstalaesAlfandegadasdoPorto_13.set('fieldImages', {'Nome': 'TextEdit', 'Companhia': 'TextEdit', 'Produto': 'TextEdit', 'Inst_Legal': 'TextEdit', 'Area__m²_': 'Range', });
lyr_reasArrendveis_14.set('fieldImages', {'Area': 'TextEdit', 'Nome': 'TextEdit', 'Uso': 'TextEdit', });
lyr_reasArrendadas_15.set('fieldImages', {'Grupo': 'TextEdit', 'Aut_Port': 'TextEdit', 'N_Contrato': 'TextEdit', 'Arrend_Atu': 'TextEdit', 'Tipo_Espec': 'TextEdit', 'Finalidade': 'TextEdit', 'Inlcio': 'DateTime', 'Tnrmino': 'DateTime', 'Observat': 'TextEdit', 'Area_m²': 'TextEdit', });
lyr_ZoneamentoLongoPrazo_16.set('fieldImages', {'Categoria': 'TextEdit', 'Operador': 'TextEdit', 'Area__m²_': 'TextEdit', });
lyr_ZoneamentoMdioPrazo_17.set('fieldImages', {'Categoria': 'TextEdit', 'Operador': 'TextEdit', 'Area__m²_': 'TextEdit', });
lyr_ZoneamentoCurtoPrazo_18.set('fieldImages', {'Categoria': 'TextEdit', 'Operador': 'TextEdit', 'Area__m²_': 'TextEdit', });
lyr_ZoneamentoSituaoAtual_19.set('fieldImages', {'Categoria': 'TextEdit', 'Operador': 'TextEdit', 'Area__m²_': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeNatal_20.set('fieldImages', {'Name': 'TextEdit', 'ins': 'TextEdit', 'Tipo': 'TextEdit', 'Área m²': 'TextEdit', });
lyr_reasPrioritriasParaConservao_1.set('fieldLabels', {'Acaop_pos': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Ameaças': 'inline label - visible with data', 'Caracterí': 'inline label - visible with data', 'Importanci': 'inline label - visible with data', 'Fonte': 'inline label - visible with data', 'Ano_Dispon': 'inline label - visible with data', });
lyr_Equipamentos_2.set('fieldLabels', {'Tipo': 'inline label - visible with data', 'Finalidade': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Capacid(t)': 'inline label - visible with data', 'Fabricacao': 'inline label - visible with data', 'Tempo(ano)': 'inline label - visible with data', });
lyr_ServiosdeApoio_3.set('fieldLabels', {'Empresa': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Serviços': 'inline label - visible with data', });
lyr_Fundeadouros_4.set('fieldLabels', {'Quantidade': 'inline label - visible with data', 'Localiz': 'inline label - visible with data', 'Comprim(m)': 'inline label - visible with data', 'Largura(m)': 'inline label - visible with data', 'Dirmet(m)': 'inline label - visible with data', 'Profud': 'inline label - visible with data', });
lyr_BaciadeEvoluao_5.set('fieldLabels', {'Quantidade': 'inline label - visible with data', 'Localiz': 'inline label - visible with data', 'Profund(m)': 'inline label - visible with data', 'Comprim(m)': 'inline label - visible with data', 'Largura(m)': 'inline label - visible with data', 'Dirmet(m)': 'inline label - visible with data', });
lyr_CanaldeAcesso_6.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Comprim(m)': 'inline label - visible with data', 'Largura(m)': 'inline label - visible with data', 'Dirmet(m)': 'inline label - visible with data', 'Profund(m)': 'inline label - visible with data', });
lyr_AcessosInternosRodovirios_7.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Extens(Km)': 'inline label - visible with data', });
lyr_AcessoRodovirio_8.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'PNV': 'inline label - visible with data', 'JurisdiKmo': 'inline label - visible with data', 'Classific': 'inline label - visible with data', 'Concessio': 'inline label - visible with data', 'Municspio': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'Extensão': 'inline label - visible with data', 'VMD_Diario': 'inline label - visible with data', });
lyr_InstalaeNoOperacionais_9.set('fieldLabels', {'Tipo': 'inline label - visible with data', 'Uso': 'inline label - visible with data', 'Area (m2)': 'inline label - visible with data', 'Regime': 'inline label - visible with data', 'Justificat': 'inline label - visible with data', });
lyr_Acostagem_10.set('fieldLabels', {'Berco': 'inline label - visible with data', 'Conserva': 'inline label - visible with data', 'Car_Constr': 'inline label - visible with data', 'Comprim(m)': 'inline label - visible with data', 'Profund(m)': 'inline label - visible with data', 'Princ_Prod': 'inline label - visible with data', });
lyr_Armazenagem_11.set('fieldLabels', {'Topo': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Regime_Exp': 'inline label - visible with data', 'Area__m²_': 'inline label - visible with data', 'Volume__m': 'inline label - visible with data', });
lyr_TerminaisdePassageiros_12.set('fieldLabels', {'Area (m2)': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadasdoPorto_13.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Companhia': 'inline label - visible with data', 'Produto': 'inline label - visible with data', 'Inst_Legal': 'inline label - visible with data', 'Area__m²_': 'inline label - visible with data', });
lyr_reasArrendveis_14.set('fieldLabels', {'Area': 'inline label - visible with data', 'Nome': 'inline label - visible with data', 'Uso': 'inline label - visible with data', });
lyr_reasArrendadas_15.set('fieldLabels', {'Grupo': 'inline label - visible with data', 'Aut_Port': 'inline label - visible with data', 'N_Contrato': 'inline label - visible with data', 'Arrend_Atu': 'inline label - visible with data', 'Tipo_Espec': 'inline label - visible with data', 'Finalidade': 'inline label - visible with data', 'Inlcio': 'inline label - visible with data', 'Tnrmino': 'inline label - visible with data', 'Observat': 'inline label - visible with data', 'Area_m²': 'inline label - visible with data', });
lyr_ZoneamentoLongoPrazo_16.set('fieldLabels', {'Categoria': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Area__m²_': 'inline label - visible with data', });
lyr_ZoneamentoMdioPrazo_17.set('fieldLabels', {'Categoria': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Area__m²_': 'inline label - visible with data', });
lyr_ZoneamentoCurtoPrazo_18.set('fieldLabels', {'Categoria': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Area__m²_': 'inline label - visible with data', });
lyr_ZoneamentoSituaoAtual_19.set('fieldLabels', {'Categoria': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Area__m²_': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeNatal_20.set('fieldLabels', {'Name': 'inline label - visible with data', 'ins': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Área m²': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeNatal_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});