var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":823,"id":1663,"methods":[{"el":46,"sc":2,"sl":44},{"el":90,"sc":2,"sl":67},{"el":130,"sc":2,"sl":110},{"el":179,"sc":2,"sl":150},{"el":221,"sc":2,"sl":199},{"el":267,"sc":2,"sl":245},{"el":306,"sc":2,"sl":287},{"el":349,"sc":2,"sl":326},{"el":388,"sc":2,"sl":369},{"el":417,"sc":2,"sl":409},{"el":446,"sc":2,"sl":438},{"el":475,"sc":2,"sl":467},{"el":505,"sc":2,"sl":497},{"el":535,"sc":2,"sl":527},{"el":564,"sc":2,"sl":556},{"el":593,"sc":2,"sl":585},{"el":624,"sc":2,"sl":613},{"el":655,"sc":2,"sl":644},{"el":689,"sc":2,"sl":676},{"el":720,"sc":2,"sl":709},{"el":756,"sc":2,"sl":745},{"el":789,"sc":2,"sl":776},{"el":822,"sc":2,"sl":809}],"name":"BachelierModel","sl":41}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_106":{"methods":[{"sl":67},{"sl":150}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: ANALYTIC]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_109":{"methods":[{"sl":67},{"sl":409}],"name":"testEuropeanCall[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":416}]},"test_119":{"methods":[{"sl":67}],"name":"testBermudanSwaption","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78}]},"test_13":{"methods":[{"sl":67},{"sl":150}],"name":"testCapletSmile","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_135":{"methods":[{"sl":67},{"sl":110},{"sl":199},{"sl":287},{"sl":326},{"sl":369},{"sl":409},{"sl":438},{"sl":497},{"sl":527},{"sl":556},{"sl":585}],"name":"testHomogeneousRandomVariableImplementations","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":117},{"sl":122},{"sl":123},{"sl":125},{"sl":128},{"sl":206},{"sl":209},{"sl":215},{"sl":217},{"sl":219},{"sl":294},{"sl":299},{"sl":300},{"sl":302},{"sl":304},{"sl":333},{"sl":336},{"sl":343},{"sl":345},{"sl":347},{"sl":376},{"sl":381},{"sl":382},{"sl":384},{"sl":386},{"sl":416},{"sl":445},{"sl":504},{"sl":534},{"sl":563},{"sl":592}]},"test_137":{"methods":[{"sl":67},{"sl":150},{"sl":409},{"sl":467},{"sl":613},{"sl":676}],"name":"testInhomogeneousImpliedVolatility","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178},{"sl":416},{"sl":474},{"sl":620},{"sl":621},{"sl":623},{"sl":683},{"sl":685},{"sl":686},{"sl":688}]},"test_143":{"methods":[{"sl":67},{"sl":150}],"name":"testCalibration","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_158":{"methods":[{"sl":67}],"name":"testExpectation","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88}]},"test_175":{"methods":[{"sl":67},{"sl":150},{"sl":409},{"sl":467}],"name":"testImpliedVolatility","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178},{"sl":416},{"sl":474}]},"test_189":{"methods":[{"sl":67},{"sl":150}],"name":"testCalibration","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_19":{"methods":[{"sl":67},{"sl":150}],"name":"testATMSwaptionCalibration[Model: DISPLACED, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_201":{"methods":[{"sl":67},{"sl":199}],"name":"testBachelierOptionDelta","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":206},{"sl":209},{"sl":210},{"sl":215},{"sl":217},{"sl":219}]},"test_207":{"methods":[{"sl":199}],"name":"testGenericDelta[Caplet maturity 5.0]","pass":true,"statements":[{"sl":206},{"sl":209},{"sl":210}]},"test_209":{"methods":[{"sl":67},{"sl":150}],"name":"testBasicPiterbarg","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_212":{"methods":[{"sl":67},{"sl":409}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":416}]},"test_216":{"methods":[{"sl":67}],"name":"testSwaption","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88}]},"test_223":{"methods":[{"sl":67},{"sl":199},{"sl":409},{"sl":497}],"name":"testDelta","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":206},{"sl":209},{"sl":215},{"sl":217},{"sl":219},{"sl":416},{"sl":504}]},"test_226":{"methods":[{"sl":67},{"sl":150}],"name":"a_testSimplifiedLinear","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_23":{"methods":[{"sl":67},{"sl":150}],"name":"testCapletSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_234":{"methods":[{"sl":67},{"sl":150}],"name":"testSingleSmile","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_238":{"methods":[{"sl":67},{"sl":150}],"name":"testConversions","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_25":{"methods":[{"sl":67},{"sl":199},{"sl":409},{"sl":497}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":206},{"sl":209},{"sl":215},{"sl":217},{"sl":219},{"sl":416},{"sl":504}]},"test_251":{"methods":[{"sl":67},{"sl":150}],"name":"testMultiPiterbarg","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_256":{"methods":[{"sl":67},{"sl":326},{"sl":409},{"sl":556}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":333},{"sl":336},{"sl":343},{"sl":345},{"sl":347},{"sl":416},{"sl":563}]},"test_285":{"methods":[{"sl":67},{"sl":150}],"name":"testSimplified","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_287":{"methods":[{"sl":110}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-FINITE_DIFFERENCES]","pass":true,"statements":[{"sl":117},{"sl":122},{"sl":123},{"sl":125},{"sl":128}]},"test_296":{"methods":[{"sl":67},{"sl":150}],"name":"testCapletSmile[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_3":{"methods":[{"sl":67},{"sl":150}],"name":"testBachelierOptionImpliedVolatility","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_322":{"methods":[{"sl":199}],"name":"testGenericDelta[Caplet maturity 10.0]","pass":true,"statements":[{"sl":206},{"sl":209},{"sl":210}]},"test_342":{"methods":[{"sl":67},{"sl":150}],"name":"testATMSwaptionCalibration","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_345":{"methods":[{"sl":67},{"sl":326},{"sl":409},{"sl":556},{"sl":613},{"sl":776}],"name":"testInhomogenousVega","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":333},{"sl":336},{"sl":343},{"sl":345},{"sl":347},{"sl":416},{"sl":563},{"sl":620},{"sl":621},{"sl":623},{"sl":783},{"sl":784},{"sl":786},{"sl":788}]},"test_356":{"methods":[{"sl":67},{"sl":199},{"sl":409},{"sl":497},{"sl":613},{"sl":709}],"name":"testEuropeanCallDelta","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":206},{"sl":209},{"sl":215},{"sl":217},{"sl":219},{"sl":416},{"sl":504},{"sl":620},{"sl":621},{"sl":623},{"sl":716},{"sl":717},{"sl":719}]},"test_374":{"methods":[{"sl":67},{"sl":409}],"name":"testEuropeanCall[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":416}]},"test_406":{"methods":[{"sl":67},{"sl":326},{"sl":409},{"sl":556}],"name":"testVega","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":333},{"sl":336},{"sl":343},{"sl":345},{"sl":347},{"sl":416},{"sl":563}]},"test_441":{"methods":[{"sl":67},{"sl":199},{"sl":409},{"sl":497}],"name":"testEuropeanCallDelta[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":206},{"sl":209},{"sl":215},{"sl":217},{"sl":219},{"sl":416},{"sl":504}]},"test_447":{"methods":[{"sl":67},{"sl":409}],"name":"testEuropeanCall[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":416}]},"test_479":{"methods":[{"sl":67},{"sl":409},{"sl":613}],"name":"testEuropeanCall","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":416},{"sl":620},{"sl":621},{"sl":623}]},"test_482":{"methods":[{"sl":67},{"sl":150}],"name":"testCaplet","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_492":{"methods":[{"sl":67},{"sl":110},{"sl":199},{"sl":287},{"sl":326},{"sl":369},{"sl":409},{"sl":438},{"sl":497},{"sl":527},{"sl":556},{"sl":585},{"sl":613},{"sl":644},{"sl":709},{"sl":745},{"sl":776},{"sl":809}],"name":"testInhomogeneousRandomVariableImplementations","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":117},{"sl":122},{"sl":123},{"sl":125},{"sl":128},{"sl":206},{"sl":209},{"sl":215},{"sl":217},{"sl":219},{"sl":294},{"sl":299},{"sl":300},{"sl":302},{"sl":304},{"sl":333},{"sl":336},{"sl":343},{"sl":345},{"sl":347},{"sl":376},{"sl":381},{"sl":382},{"sl":384},{"sl":386},{"sl":416},{"sl":445},{"sl":504},{"sl":534},{"sl":563},{"sl":592},{"sl":620},{"sl":621},{"sl":623},{"sl":652},{"sl":654},{"sl":716},{"sl":717},{"sl":719},{"sl":753},{"sl":755},{"sl":783},{"sl":784},{"sl":786},{"sl":788},{"sl":817},{"sl":819},{"sl":821}]},"test_502":{"methods":[{"sl":67},{"sl":326},{"sl":409},{"sl":556}],"name":"testEuropeanCallVega[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":333},{"sl":336},{"sl":343},{"sl":345},{"sl":347},{"sl":416},{"sl":563}]},"test_52":{"methods":[{"sl":67},{"sl":326},{"sl":409},{"sl":556},{"sl":613},{"sl":776}],"name":"testEuropeanCallVega","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":333},{"sl":336},{"sl":343},{"sl":345},{"sl":347},{"sl":416},{"sl":563},{"sl":620},{"sl":621},{"sl":623},{"sl":783},{"sl":784},{"sl":786},{"sl":788}]},"test_522":{"methods":[{"sl":67},{"sl":199},{"sl":409},{"sl":497}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":206},{"sl":209},{"sl":215},{"sl":217},{"sl":219},{"sl":416},{"sl":504}]},"test_535":{"methods":[{"sl":67},{"sl":199},{"sl":409},{"sl":497}],"name":"testEuropeanCallDelta[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":206},{"sl":209},{"sl":215},{"sl":217},{"sl":219},{"sl":416},{"sl":504}]},"test_548":{"methods":[{"sl":67},{"sl":150}],"name":"testBasic","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_558":{"methods":[{"sl":67},{"sl":150}],"name":"testCapletSmile[RandomVariableDifferentiableADFactory [toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_559":{"methods":[{"sl":67},{"sl":150}],"name":"c_testMultiPiterbarg","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_565":{"methods":[{"sl":67},{"sl":326},{"sl":409},{"sl":556}],"name":"testEuropeanCallVega[RandomVariableDifferentiableAADFactory [diracDeltaApproximationMethod=DISCRETE_DELTA, diracDeltaApproximationWidthPerStdDev=0.05, diracDeltaApproximationDensityRegressionWidthPerStdDev=0.5, isGradientRetainsLeafNodesOnly=true, toString()=AbstractRandomVariableDifferentiableFactory [randomVariableFactoryForNonDifferentiable=RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]]]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":333},{"sl":336},{"sl":343},{"sl":345},{"sl":347},{"sl":416},{"sl":563}]},"test_567":{"methods":[{"sl":67}],"name":"testBachelierRiskNeutralProbabilities","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88}]},"test_575":{"methods":[{"sl":67},{"sl":150}],"name":"testCapletSmile[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=true]]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_577":{"methods":[{"sl":67}],"name":"testSwaption","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78}]},"test_584":{"methods":[{"sl":67},{"sl":150}],"name":"testMulti","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_585":{"methods":[{"sl":67},{"sl":150}],"name":"testATMSwaptionCalibration[Model: NORMAL, Calibration: MONTECARLO]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_603":{"methods":[{"sl":67},{"sl":150}],"name":"testVolatilityConversionLognormalToNormal","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_620":{"methods":[{"sl":67}],"name":"testStaticCubeCalibration","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88}]},"test_625":{"methods":[{"sl":67},{"sl":326},{"sl":409},{"sl":556}],"name":"testEuropeanCallVega[RandomVariableFromArrayFactory [isUseDoublePrecisionFloatingPointImplementation=false]]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":333},{"sl":336},{"sl":343},{"sl":345},{"sl":347},{"sl":416},{"sl":563}]},"test_633":{"methods":[{"sl":67},{"sl":150}],"name":"testVolatilityCalibration[VOLATILITYNORMAL]","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_65":{"methods":[{"sl":67},{"sl":199},{"sl":409},{"sl":497},{"sl":613},{"sl":709}],"name":"testInhomogenousDelta","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":83},{"sl":85},{"sl":88},{"sl":206},{"sl":209},{"sl":215},{"sl":217},{"sl":219},{"sl":416},{"sl":504},{"sl":620},{"sl":621},{"sl":623},{"sl":716},{"sl":717},{"sl":719}]},"test_75":{"methods":[{"sl":110}],"name":"testATMSwaptionCalibration[VOLATILITYNORMAL-STOCHASTIC_LEVENBERG_MARQUARDT-ADJOINT_AUTOMATIC_DIFFERENTIATION]","pass":true,"statements":[{"sl":117},{"sl":122},{"sl":123},{"sl":125},{"sl":128}]},"test_8":{"methods":[{"sl":67},{"sl":150}],"name":"testSimplifiedLinear","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_83":{"methods":[{"sl":67},{"sl":150}],"name":"b_testBasicPiterbarg","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]},"test_96":{"methods":[{"sl":67},{"sl":150}],"name":"testSABRCubeCalibration","pass":true,"statements":[{"sl":74},{"sl":77},{"sl":78},{"sl":83},{"sl":85},{"sl":88},{"sl":159},{"sl":160},{"sl":163},{"sl":164},{"sl":167},{"sl":168},{"sl":169},{"sl":171},{"sl":173},{"sl":175},{"sl":178}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [585, 548, 577, 212, 406, 256, 502, 535, 109, 158, 479, 625, 135, 96, 342, 175, 285, 19, 189, 482, 567, 8, 201, 65, 356, 565, 575, 238, 3, 52, 296, 226, 223, 25, 251, 633, 209, 216, 119, 492, 447, 620, 83, 234, 143, 374, 559, 137, 584, 603, 345, 522, 23, 558, 441, 106, 13], [], [], [], [], [], [], [585, 548, 577, 212, 406, 256, 502, 535, 109, 158, 479, 625, 135, 96, 342, 175, 285, 19, 189, 482, 567, 8, 201, 65, 356, 565, 575, 238, 3, 52, 296, 226, 223, 25, 251, 633, 209, 216, 119, 492, 447, 620, 83, 234, 143, 374, 559, 137, 584, 603, 345, 522, 23, 558, 441, 106, 13], [], [], [585, 548, 577, 212, 406, 256, 502, 535, 109, 158, 479, 625, 135, 96, 342, 175, 285, 19, 189, 482, 567, 8, 201, 65, 356, 565, 575, 238, 3, 52, 296, 226, 223, 25, 251, 633, 209, 216, 119, 492, 447, 620, 83, 234, 143, 374, 559, 137, 584, 603, 345, 522, 23, 558, 441, 106, 13], [585, 548, 577, 212, 109, 158, 479, 96, 342, 175, 285, 19, 189, 8, 238, 3, 226, 251, 209, 216, 119, 447, 620, 83, 234, 143, 374, 559, 137, 584, 603, 106], [], [], [], [], [548, 212, 406, 256, 502, 535, 109, 158, 479, 625, 135, 96, 175, 285, 189, 482, 567, 8, 201, 65, 356, 565, 575, 238, 3, 52, 296, 226, 223, 25, 251, 633, 209, 216, 492, 447, 620, 83, 234, 143, 374, 559, 137, 584, 345, 522, 23, 558, 441, 13], [], [548, 212, 406, 256, 502, 535, 109, 158, 479, 625, 135, 96, 175, 285, 189, 482, 567, 8, 201, 65, 356, 565, 575, 238, 3, 52, 296, 226, 223, 25, 251, 633, 209, 216, 492, 447, 620, 83, 234, 143, 374, 559, 137, 584, 345, 522, 23, 558, 441, 13], [], [], [548, 212, 406, 256, 502, 535, 109, 158, 479, 625, 135, 96, 175, 285, 189, 482, 567, 8, 201, 65, 356, 565, 575, 238, 3, 52, 296, 226, 223, 25, 251, 633, 209, 216, 492, 447, 620, 83, 234, 143, 374, 559, 137, 584, 345, 522, 23, 558, 441, 13], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [135, 492, 287, 75], [], [], [], [], [], [], [135, 492, 287, 75], [], [], [], [], [135, 492, 287, 75], [135, 492, 287, 75], [], [135, 492, 287, 75], [], [], [135, 492, 287, 75], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [585, 548, 96, 342, 175, 285, 19, 189, 482, 8, 575, 238, 3, 296, 226, 251, 633, 209, 83, 234, 143, 559, 137, 584, 603, 23, 558, 106, 13], [], [], [], [], [], [], [], [], [585, 548, 96, 342, 175, 285, 19, 189, 482, 8, 575, 238, 3, 296, 226, 251, 633, 209, 83, 234, 143, 559, 137, 584, 603, 23, 558, 106, 13], [585, 548, 96, 342, 175, 285, 19, 189, 482, 8, 575, 238, 3, 296, 226, 251, 633, 209, 83, 234, 143, 559, 137, 584, 603, 23, 558, 106, 13], [], [], [585, 548, 96, 342, 175, 285, 19, 189, 482, 8, 575, 238, 3, 296, 226, 251, 633, 209, 83, 234, 143, 559, 137, 584, 603, 23, 558, 106, 13], [585, 548, 96, 342, 175, 285, 19, 189, 482, 8, 575, 238, 3, 296, 226, 251, 633, 209, 83, 234, 143, 559, 137, 584, 603, 23, 558, 106, 13], [], [], [585, 548, 96, 342, 175, 285, 19, 189, 482, 8, 575, 238, 3, 296, 226, 251, 633, 209, 83, 234, 143, 559, 137, 584, 603, 23, 558, 106, 13], [585, 548, 96, 342, 175, 285, 19, 189, 482, 8, 575, 238, 3, 296, 226, 251, 633, 209, 83, 234, 143, 559, 137, 584, 603, 23, 558, 106, 13], [585, 548, 96, 342, 175, 285, 19, 189, 482, 8, 575, 238, 3, 296, 226, 251, 633, 209, 83, 234, 143, 559, 137, 584, 603, 23, 558, 106, 13], [], [585, 548, 96, 342, 175, 285, 19, 189, 482, 8, 575, 238, 3, 296, 226, 251, 633, 209, 83, 234, 143, 559, 137, 584, 603, 23, 558, 106, 13], [], [585, 548, 96, 342, 175, 285, 19, 189, 482, 8, 575, 238, 3, 296, 226, 251, 633, 209, 83, 234, 143, 559, 137, 584, 603, 23, 558, 106, 13], [], [585, 548, 96, 342, 175, 285, 19, 189, 482, 8, 575, 238, 3, 296, 226, 251, 633, 209, 83, 234, 143, 559, 137, 584, 603, 23, 558, 106, 13], [], [], [585, 548, 96, 342, 175, 285, 19, 189, 482, 8, 575, 238, 3, 296, 226, 251, 633, 209, 83, 234, 143, 559, 137, 584, 603, 23, 558, 106, 13], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [322, 535, 207, 135, 201, 65, 356, 223, 25, 492, 522, 441], [], [], [], [], [], [], [322, 535, 207, 135, 201, 65, 356, 223, 25, 492, 522, 441], [], [], [322, 535, 207, 135, 201, 65, 356, 223, 25, 492, 522, 441], [322, 207, 201], [], [], [], [], [535, 135, 201, 65, 356, 223, 25, 492, 522, 441], [], [535, 135, 201, 65, 356, 223, 25, 492, 522, 441], [], [535, 135, 201, 65, 356, 223, 25, 492, 522, 441], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [135, 492], [], [], [], [], [], [], [135, 492], [], [], [], [], [135, 492], [135, 492], [], [135, 492], [], [135, 492], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [406, 256, 502, 625, 135, 565, 52, 492, 345], [], [], [], [], [], [], [406, 256, 502, 625, 135, 565, 52, 492, 345], [], [], [406, 256, 502, 625, 135, 565, 52, 492, 345], [], [], [], [], [], [], [406, 256, 502, 625, 135, 565, 52, 492, 345], [], [406, 256, 502, 625, 135, 565, 52, 492, 345], [], [406, 256, 502, 625, 135, 565, 52, 492, 345], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [135, 492], [], [], [], [], [], [], [135, 492], [], [], [], [], [135, 492], [135, 492], [], [135, 492], [], [135, 492], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [212, 406, 256, 502, 535, 109, 479, 625, 135, 175, 65, 356, 565, 52, 223, 25, 492, 447, 374, 137, 345, 522, 441], [], [], [], [], [], [], [212, 406, 256, 502, 535, 109, 479, 625, 135, 175, 65, 356, 565, 52, 223, 25, 492, 447, 374, 137, 345, 522, 441], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [135, 492], [], [], [], [], [], [], [135, 492], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [175, 137], [], [], [], [], [], [], [175, 137], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [535, 135, 65, 356, 223, 25, 492, 522, 441], [], [], [], [], [], [], [535, 135, 65, 356, 223, 25, 492, 522, 441], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [135, 492], [], [], [], [], [], [], [135, 492], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [406, 256, 502, 625, 135, 565, 52, 492, 345], [], [], [], [], [], [], [406, 256, 502, 625, 135, 565, 52, 492, 345], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [135, 492], [], [], [], [], [], [], [135, 492], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [479, 65, 356, 52, 492, 137, 345], [], [], [], [], [], [], [479, 65, 356, 52, 492, 137, 345], [479, 65, 356, 52, 492, 137, 345], [], [479, 65, 356, 52, 492, 137, 345], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [492], [], [], [], [], [], [], [], [492], [], [492], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [137], [], [], [], [], [], [], [137], [], [137], [137], [], [137], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [65, 356, 492], [], [], [], [], [], [], [65, 356, 492], [65, 356, 492], [], [65, 356, 492], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [492], [], [], [], [], [], [], [], [492], [], [492], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [52, 492, 345], [], [], [], [], [], [], [52, 492, 345], [52, 492, 345], [], [52, 492, 345], [], [52, 492, 345], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [492], [], [], [], [], [], [], [], [492], [], [492], [], [492], [], []]