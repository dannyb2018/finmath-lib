var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":180,"id":19686,"methods":[{"el":72,"sc":2,"sl":69},{"el":83,"sc":2,"sl":79},{"el":95,"sc":2,"sl":91},{"el":110,"sc":2,"sl":97},{"el":150,"sc":2,"sl":118},{"el":154,"sc":2,"sl":152},{"el":158,"sc":2,"sl":156},{"el":179,"sc":2,"sl":160}],"name":"MonteCarloConditionalExpectationRegression","sl":33},{"el":42,"id":19686,"methods":[],"name":"MonteCarloConditionalExpectationRegression.RegressionBasisFunctions","sl":40},{"el":60,"id":19686,"methods":[{"el":54,"sc":3,"sl":51},{"el":59,"sc":3,"sl":56}],"name":"MonteCarloConditionalExpectationRegression.RegressionBasisFunctionsGiven","sl":48}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_119":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":79},{"sl":97},{"sl":118},{"sl":160}],"name":"testBermudanSwaption","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":80},{"sl":81},{"sl":82},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_126":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":79},{"sl":97},{"sl":118},{"sl":160}],"name":"testEuropeanAsianBermudanOption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":80},{"sl":81},{"sl":82},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_129":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":79},{"sl":97},{"sl":118},{"sl":160}],"name":"testHedgePerformance[MonteCarloAssetModel [model=BlackScholesModel [initialValue=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@2de23121,\n ID=0], riskFreeRate=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@63475ace,\n ID=1], volatility=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@4988d8b8,\n ID=2], abstractRandomVariableFactory=RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.0, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=false, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]], initialState=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@c0c2f8d,\n ID=3]], drift=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@305b7c14,\n ID=6]], factorLoadings=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@4988d8b8,\n ID=2]]]]-AbstractMonteCarloProduct [currency=null]]","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":80},{"sl":81},{"sl":82},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_156":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":79},{"sl":97},{"sl":118},{"sl":160}],"name":"testEuropeanAsianBermudanOption[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":80},{"sl":81},{"sl":82},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_171":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":91},{"sl":97},{"sl":118},{"sl":160}],"name":"testSwaption","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":92},{"sl":93},{"sl":94},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_203":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":79},{"sl":97},{"sl":118},{"sl":160}],"name":"test[RandomVariableFromArrayFactory TestFunctionMonteCarloBermudanOption(1,3,1,1)]","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":80},{"sl":81},{"sl":82},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_248":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":79},{"sl":97},{"sl":118},{"sl":160}],"name":"test[RandomVariableDifferentiableAADFactory TestFunctionMonteCarloBermudanOption(1,3,1,1)]","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":80},{"sl":81},{"sl":82},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_26":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":79},{"sl":97},{"sl":118},{"sl":160}],"name":"testHedgePerformance[MonteCarloAssetModel [model=BlackScholesModel [initialValue=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@2de23121,\n ID=0], riskFreeRate=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@63475ace,\n ID=1], volatility=RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@4988d8b8,\n ID=2], abstractRandomVariableFactory=RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.0, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=false, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]], initialState=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@c0c2f8d,\n ID=3]], drift=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@305b7c14,\n ID=6]], factorLoadings=[RandomVariableDifferentiableAAD [values=net.finmath.stochastic.Scalar@4988d8b8,\n ID=2]]]]-EuropeanOption [maturity=5.0, strike=1.2840254166877414, underlyingIndex=0, nameOfUnderliyng=null]]","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":80},{"sl":81},{"sl":82},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_27":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":79},{"sl":97},{"sl":118},{"sl":160}],"name":"testProductAADSensitivities[2]","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":80},{"sl":81},{"sl":82},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_363":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":79},{"sl":97},{"sl":118},{"sl":160}],"name":"testGenericDelta[Bermudan Swaption 30.0 in 40.0]","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":80},{"sl":81},{"sl":82},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_395":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":79},{"sl":97},{"sl":118},{"sl":160}],"name":"testEuropeanAsianBermudanOption[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":80},{"sl":81},{"sl":82},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_412":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":79},{"sl":97},{"sl":118},{"sl":160}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":80},{"sl":81},{"sl":82},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_454":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":79},{"sl":97},{"sl":118},{"sl":160}],"name":"testProductAADSensitivities","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":80},{"sl":81},{"sl":82},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_512":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":91},{"sl":97},{"sl":118},{"sl":160}],"name":"testAgainstSwaption","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":92},{"sl":93},{"sl":94},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_566":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":79},{"sl":97},{"sl":118},{"sl":160}],"name":"testVega[Bermudan Swaption 30.0 in 40.0]","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":80},{"sl":81},{"sl":82},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_614":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":79},{"sl":97},{"sl":118},{"sl":160}],"name":"testEuropeanAsianBermudanOption[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":80},{"sl":81},{"sl":82},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_648":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":79},{"sl":97},{"sl":118},{"sl":160}],"name":"testDelta[Bermudan Swaption 30.0 in 40.0]","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":80},{"sl":81},{"sl":82},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]},"test_89":{"methods":[{"sl":51},{"sl":56},{"sl":69},{"sl":91},{"sl":97},{"sl":118},{"sl":160}],"name":"testExpectedPositiveExposure","pass":true,"statements":[{"sl":52},{"sl":53},{"sl":58},{"sl":70},{"sl":71},{"sl":92},{"sl":93},{"sl":94},{"sl":100},{"sl":103},{"sl":104},{"sl":105},{"sl":106},{"sl":109},{"sl":120},{"sl":125},{"sl":126},{"sl":128},{"sl":129},{"sl":130},{"sl":131},{"sl":132},{"sl":136},{"sl":141},{"sl":142},{"sl":143},{"sl":147},{"sl":149},{"sl":161},{"sl":162},{"sl":163},{"sl":164},{"sl":168},{"sl":170},{"sl":171},{"sl":172},{"sl":173},{"sl":174},{"sl":178}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [], [], [], [], [], [], [], [], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [], [], [], [], [], [], [27, 412, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 156, 203], [27, 412, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 156, 203], [27, 412, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 156, 203], [27, 412, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 156, 203], [], [], [], [], [], [], [], [], [89, 512, 171], [89, 512, 171], [89, 512, 171], [89, 512, 171], [], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [], [], [], [], [], [], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [], [], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [], [], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [], [], [], [], [], [], [], [], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], [], [], [27, 412, 89, 119, 363, 614, 454, 248, 566, 648, 129, 395, 126, 26, 512, 171, 156, 203], [], []]