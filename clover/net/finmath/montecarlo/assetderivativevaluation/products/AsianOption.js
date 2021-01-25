var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":136,"id":15334,"methods":[{"el":51,"sc":2,"sl":45},{"el":63,"sc":2,"sl":61},{"el":99,"sc":2,"sl":75},{"el":108,"sc":2,"sl":106},{"el":117,"sc":2,"sl":115},{"el":126,"sc":2,"sl":124},{"el":135,"sc":2,"sl":133}],"name":"AsianOption","sl":29}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_126":{"methods":[{"sl":45},{"sl":61},{"sl":75}],"name":"testEuropeanAsianBermudanOption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":62},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":86},{"sl":89},{"sl":90},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":98}]},"test_156":{"methods":[{"sl":45},{"sl":61},{"sl":75}],"name":"testEuropeanAsianBermudanOption[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":62},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":86},{"sl":89},{"sl":90},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":98}]},"test_274":{"methods":[{"sl":45},{"sl":61},{"sl":75}],"name":"test[RandomVariableDifferentiableAADFactory TestFunctionMonteCarloAsianOption(1,3,1,1)]","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":62},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":86},{"sl":89},{"sl":90},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":98}]},"test_279":{"methods":[{"sl":45},{"sl":61},{"sl":75}],"name":"test[RandomVariableFromArrayFactory TestFunctionMonteCarloAsianOption(1,3,1,1)]","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":62},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":86},{"sl":89},{"sl":90},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":98}]},"test_395":{"methods":[{"sl":45},{"sl":61},{"sl":75}],"name":"testEuropeanAsianBermudanOption[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":62},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":86},{"sl":89},{"sl":90},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":98}]},"test_613":{"methods":[{"sl":75}],"name":"testProductAADSensitivities[1]","pass":true,"statements":[{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":86},{"sl":89},{"sl":90},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":98}]},"test_614":{"methods":[{"sl":45},{"sl":61},{"sl":75}],"name":"testEuropeanAsianBermudanOption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":62},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":86},{"sl":89},{"sl":90},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":98}]},"test_616":{"methods":[{"sl":45},{"sl":61},{"sl":75}],"name":"testProductAADSensitivities","pass":true,"statements":[{"sl":46},{"sl":47},{"sl":48},{"sl":49},{"sl":50},{"sl":62},{"sl":78},{"sl":79},{"sl":80},{"sl":81},{"sl":83},{"sl":86},{"sl":89},{"sl":90},{"sl":91},{"sl":94},{"sl":95},{"sl":96},{"sl":98}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [616, 395, 126, 614, 279, 274, 156], [616, 395, 126, 614, 279, 274, 156], [616, 395, 126, 614, 279, 274, 156], [616, 395, 126, 614, 279, 274, 156], [616, 395, 126, 614, 279, 274, 156], [616, 395, 126, 614, 279, 274, 156], [], [], [], [], [], [], [], [], [], [], [616, 395, 126, 614, 279, 274, 156], [616, 395, 126, 614, 279, 274, 156], [], [], [], [], [], [], [], [], [], [], [], [], [613, 616, 395, 126, 614, 279, 274, 156], [], [], [613, 616, 395, 126, 614, 279, 274, 156], [613, 616, 395, 126, 614, 279, 274, 156], [613, 616, 395, 126, 614, 279, 274, 156], [613, 616, 395, 126, 614, 279, 274, 156], [], [613, 616, 395, 126, 614, 279, 274, 156], [], [], [613, 616, 395, 126, 614, 279, 274, 156], [], [], [613, 616, 395, 126, 614, 279, 274, 156], [613, 616, 395, 126, 614, 279, 274, 156], [613, 616, 395, 126, 614, 279, 274, 156], [], [], [613, 616, 395, 126, 614, 279, 274, 156], [613, 616, 395, 126, 614, 279, 274, 156], [613, 616, 395, 126, 614, 279, 274, 156], [], [613, 616, 395, 126, 614, 279, 274, 156], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]