// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/3.38/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/vi/FindArgumentStatistics",{toolDefine:"T\u00ecm Th\u00f4ng tin Th\u1ed1ng k\u00ea \u0110\u1ed1i s\u1ed1",outputLayerName:"${layername}_argumentStatistics",dimensionLabel:"Ch\u1ecdn chi\u1ec1u m\u00e0 th\u00f4ng tin th\u1ed1ng k\u00ea s\u1ebd \u0111\u01b0\u1ee3c xu\u1ea5t t\u1eeb \u0111\u00f3",variablesLabel:"Ch\u1ecdn (c\u00e1c) bi\u1ebfn \u0111\u1ec3 ph\u00e2n t\u00edch",variablesListLabel:"C\u00e1c bi\u1ebfn [Dimension Info] (Th\u00f4ng tin m\u00f4 t\u1ea3)",statisticsTypeLabel:"Ch\u1ecdn lo\u1ea1i th\u00f4ng tin th\u1ed1ng k\u00ea",
multipleOccurrenceValueLabel:"Ch\u1ec9 \u0111\u1ecbnh gi\u00e1 tr\u1ecb xu\u1ea5t hi\u1ec7n nhi\u1ec1u l\u1ea7n (t\u00f9y ch\u1ecdn)",minValueLabel:"Ch\u1ec9 \u0111\u1ecbnh gi\u00e1 tr\u1ecb t\u1ed1i thi\u1ec3u",maxValueLabel:"Ch\u1ec9 \u0111\u1ecbnh gi\u00e1 tr\u1ecb t\u1ed1i \u0111a",argumentMinLabel:"\u0110\u1ed1i s\u1ed1 c\u1ee7a gi\u00e1 tr\u1ecb t\u1ed1i thi\u1ec3u",argumentMaxLabel:"\u0110\u1ed1i s\u1ed1 c\u1ee7a gi\u00e1 tr\u1ecb t\u1ed1i \u0111a",argumentMedianLabel:"\u0110\u1ed1i s\u1ed1 c\u1ee7a gi\u00e1 tr\u1ecb b\u00ecnh qu\u00e2n",
durationLabel:"Th\u1eddi gian",dimensionDefinitionLabel:"Ch\u1ecdn th\u00f4ng tin x\u00e1c \u0111\u1ecbnh chi\u1ec1u",intervalKeywordLabel:"Ch\u1ecdn t\u1eeb kh\u00f3a kho\u1ea3ng",all:"T\u1ea5t c\u1ea3",intervalKeyword:"T\u1eeb kh\u00f3a kho\u1ea3ng",hourly:"H\u00e0ng gi\u1edd",daily:"H\u00e0ng ng\u00e0y",weekly:"H\u00e0ng tu\u1ea7n",monthly:"H\u00e0ng th\u00e1ng",quarterly:"Ba th\u00e1ng m\u1ed9t l\u1ea7n",yearly:"H\u00e0ng n\u0103m",recurringDaily:"\u0110\u1ecbnh k\u1ef3 h\u00e0ng ng\u00e0y",recurringWeekly:"\u0110\u1ecbnh k\u1ef3 h\u00e0ng tu\u1ea7n",
recurringMonthly:"\u0110\u1ecbnh k\u1ef3 h\u00e0ng th\u00e1ng",recurringQuarterly:"\u0110\u1ecbnh k\u1ef3 h\u00e0ng qu\u00fd",ignoreNodataLabel:"B\u1ecf qua c\u00e1c gi\u00e1 tr\u1ecb thi\u1ebfu trong t\u00ednh to\u00e1n",ignore:"B\u1ecf qua",analysisLayerLabel:"Ch\u1ecdn l\u1edbp h\u00ecnh \u1ea3nh \u0111a chi\u1ec1u ho\u1eb7c \u0111a d\u1ea3i \u0111\u1ec3 ph\u00e2n t\u00edch",itemDescription:"D\u1ecbch v\u1ee5 H\u00ecnh \u1ea3nh Ph\u00e2n t\u00edch \u0111\u01b0\u1ee3c t\u1ea1o ra t\u1eeb ho\u1ea1t \u0111\u1ed9ng T\u00ecm Th\u00f4ng tin Th\u1ed1ng k\u00ea \u0110\u1ed1i s\u1ed1",
itemTags:"K\u1ebft qu\u1ea3 Ph\u00e2n t\u00edch Raster, T\u00ecm Th\u00f4ng tin Th\u1ed1ng k\u00ea \u0110\u1ed1i s\u1ed1, ${layername}",itemSnippet:"D\u1ecbch v\u1ee5 H\u00ecnh \u1ea3nh Ph\u00e2n t\u00edch \u0111\u01b0\u1ee3c t\u1ea1o ra t\u1eeb ho\u1ea1t \u0111\u1ed9ng T\u00ecm Th\u00f4ng tin Th\u1ed1ng k\u00ea \u0110\u1ed1i s\u1ed1"});