var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":254,"id":10766,"methods":[{"el":86,"sc":2,"sl":70},{"el":104,"sc":2,"sl":97},{"el":109,"sc":2,"sl":106},{"el":115,"sc":2,"sl":111},{"el":131,"sc":2,"sl":117},{"el":183,"sc":2,"sl":136},{"el":188,"sc":2,"sl":185},{"el":193,"sc":2,"sl":190},{"el":198,"sc":2,"sl":195},{"el":203,"sc":2,"sl":200},{"el":210,"sc":2,"sl":208},{"el":220,"sc":2,"sl":212},{"el":243,"sc":2,"sl":222},{"el":253,"sc":2,"sl":245}],"name":"GammaProcess","sl":40}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_127":{"methods":[{"sl":70},{"sl":117},{"sl":136}],"name":"testMartingalePropertyMonteCarlo","pass":true,"statements":[{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":85},{"sl":120},{"sl":121},{"sl":122},{"sl":130},{"sl":137},{"sl":142},{"sl":145},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":161},{"sl":162},{"sl":163},{"sl":165},{"sl":166},{"sl":167},{"sl":173},{"sl":176},{"sl":177},{"sl":178},{"sl":179}]},"test_144":{"methods":[{"sl":70},{"sl":117},{"sl":136}],"name":"testScaling","pass":true,"statements":[{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":85},{"sl":120},{"sl":121},{"sl":122},{"sl":130},{"sl":137},{"sl":142},{"sl":145},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":161},{"sl":162},{"sl":163},{"sl":165},{"sl":166},{"sl":167},{"sl":173},{"sl":176},{"sl":177},{"sl":178},{"sl":179}]},"test_198":{"methods":[{"sl":70},{"sl":117},{"sl":136}],"name":"testCharacteristicFunction","pass":true,"statements":[{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":85},{"sl":120},{"sl":121},{"sl":122},{"sl":130},{"sl":137},{"sl":142},{"sl":145},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":161},{"sl":162},{"sl":163},{"sl":165},{"sl":166},{"sl":167},{"sl":173},{"sl":176},{"sl":177},{"sl":178},{"sl":179}]},"test_259":{"methods":[{"sl":70},{"sl":117},{"sl":136}],"name":"test","pass":true,"statements":[{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":85},{"sl":120},{"sl":121},{"sl":122},{"sl":130},{"sl":137},{"sl":142},{"sl":145},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":161},{"sl":162},{"sl":163},{"sl":165},{"sl":166},{"sl":167},{"sl":173},{"sl":176},{"sl":177},{"sl":178},{"sl":179}]},"test_50":{"methods":[{"sl":70},{"sl":117},{"sl":136}],"name":"test","pass":true,"statements":[{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":85},{"sl":120},{"sl":121},{"sl":122},{"sl":130},{"sl":137},{"sl":142},{"sl":145},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":161},{"sl":162},{"sl":163},{"sl":165},{"sl":166},{"sl":167},{"sl":173},{"sl":176},{"sl":177},{"sl":178},{"sl":179}]},"test_94":{"methods":[{"sl":70},{"sl":117},{"sl":136}],"name":"test","pass":true,"statements":[{"sl":77},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":82},{"sl":83},{"sl":85},{"sl":120},{"sl":121},{"sl":122},{"sl":130},{"sl":137},{"sl":142},{"sl":145},{"sl":148},{"sl":149},{"sl":150},{"sl":151},{"sl":161},{"sl":162},{"sl":163},{"sl":165},{"sl":166},{"sl":167},{"sl":173},{"sl":176},{"sl":177},{"sl":178},{"sl":179}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [144, 259, 94, 198, 50, 127], [], [], [], [], [], [], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [], [144, 259, 94, 198, 50, 127], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [144, 259, 94, 198, 50, 127], [], [], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [], [], [], [], [], [], [], [144, 259, 94, 198, 50, 127], [], [], [], [], [], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [], [], [], [], [144, 259, 94, 198, 50, 127], [], [], [144, 259, 94, 198, 50, 127], [], [], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [], [], [], [], [], [], [], [], [], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [], [], [], [], [], [144, 259, 94, 198, 50, 127], [], [], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [144, 259, 94, 198, 50, 127], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]