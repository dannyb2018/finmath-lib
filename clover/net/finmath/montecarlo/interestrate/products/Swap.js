var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":100,"id":27030,"methods":[{"el":44,"sc":2,"sl":40},{"el":66,"sc":2,"sl":57},{"el":84,"sc":2,"sl":76},{"el":94,"sc":2,"sl":86},{"el":99,"sc":2,"sl":96}],"name":"Swap","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_174":{"methods":[{"sl":40},{"sl":86}],"name":"testSwap","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":88},{"sl":89},{"sl":90},{"sl":93}]},"test_280":{"methods":[{"sl":76},{"sl":86}],"name":"testSwap","pass":true,"statements":[{"sl":81},{"sl":82},{"sl":83},{"sl":88},{"sl":89},{"sl":93}]},"test_412":{"methods":[{"sl":40},{"sl":86}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":88},{"sl":89},{"sl":90},{"sl":93}]},"test_512":{"methods":[{"sl":40},{"sl":86}],"name":"testAgainstSwaption","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":88},{"sl":89},{"sl":90},{"sl":93}]},"test_89":{"methods":[{"sl":40},{"sl":86}],"name":"testExpectedPositiveExposure","pass":true,"statements":[{"sl":41},{"sl":42},{"sl":43},{"sl":88},{"sl":89},{"sl":90},{"sl":93}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [412, 89, 174, 512], [412, 89, 174, 512], [412, 89, 174, 512], [412, 89, 174, 512], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [280], [], [], [], [], [280], [280], [280], [], [], [412, 89, 280, 174, 512], [], [412, 89, 280, 174, 512], [412, 89, 280, 174, 512], [412, 89, 174, 512], [], [], [412, 89, 280, 174, 512], [], [], [], [], [], [], []]