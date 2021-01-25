var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":140,"id":7901,"methods":[{"el":42,"sc":2,"sl":40},{"el":52,"sc":2,"sl":50},{"el":62,"sc":2,"sl":60},{"el":71,"sc":2,"sl":69},{"el":80,"sc":2,"sl":78},{"el":105,"sc":2,"sl":82},{"el":119,"sc":2,"sl":107},{"el":134,"sc":2,"sl":121},{"el":139,"sc":2,"sl":136}],"name":"ParameterAggregation","sl":33}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_102":{"methods":[{"sl":50},{"sl":82},{"sl":121}],"name":"testCurvesAndCalibration[LINEAR]","pass":true,"statements":[{"sl":51},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":92},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":104},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":133}]},"test_381":{"methods":[{"sl":50},{"sl":82},{"sl":121}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE]","pass":true,"statements":[{"sl":51},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":92},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":104},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":133}]},"test_85":{"methods":[{"sl":50},{"sl":82},{"sl":121}],"name":"testCurvesAndCalibration[HARMONIC_SPLINE_WITH_MONOTONIC_FILTERING]","pass":true,"statements":[{"sl":51},{"sl":85},{"sl":86},{"sl":87},{"sl":88},{"sl":92},{"sl":95},{"sl":96},{"sl":97},{"sl":98},{"sl":99},{"sl":100},{"sl":104},{"sl":122},{"sl":123},{"sl":124},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":133}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [85, 102, 381], [85, 102, 381], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [85, 102, 381], [], [], [85, 102, 381], [85, 102, 381], [85, 102, 381], [85, 102, 381], [], [], [], [85, 102, 381], [], [], [85, 102, 381], [85, 102, 381], [85, 102, 381], [85, 102, 381], [85, 102, 381], [85, 102, 381], [], [], [], [85, 102, 381], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [85, 102, 381], [85, 102, 381], [85, 102, 381], [85, 102, 381], [85, 102, 381], [85, 102, 381], [], [85, 102, 381], [85, 102, 381], [85, 102, 381], [], [], [85, 102, 381], [], [], [], [], [], [], []]