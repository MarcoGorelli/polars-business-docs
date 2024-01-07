Search.setIndex({"docnames": ["API", "api/polars_xdt.ExprXDTNamespace.ceil", "api/polars_xdt.ExprXDTNamespace.format_localized", "api/polars_xdt.ExprXDTNamespace.from_local_datetime", "api/polars_xdt.ExprXDTNamespace.is_workday", "api/polars_xdt.ExprXDTNamespace.offset_by", "api/polars_xdt.ExprXDTNamespace.to_julian_date", "api/polars_xdt.ExprXDTNamespace.to_local_datetime", "api/polars_xdt.date_range", "api/polars_xdt.workday_count", "index", "installation", "tutorial"], "filenames": ["API.rst", "api/polars_xdt.ExprXDTNamespace.ceil.rst", "api/polars_xdt.ExprXDTNamespace.format_localized.rst", "api/polars_xdt.ExprXDTNamespace.from_local_datetime.rst", "api/polars_xdt.ExprXDTNamespace.is_workday.rst", "api/polars_xdt.ExprXDTNamespace.offset_by.rst", "api/polars_xdt.ExprXDTNamespace.to_julian_date.rst", "api/polars_xdt.ExprXDTNamespace.to_local_datetime.rst", "api/polars_xdt.date_range.rst", "api/polars_xdt.workday_count.rst", "index.rst", "installation.rst", "tutorial.rst"], "titles": ["API", "polars_xdt.ExprXDTNamespace.ceil", "polars_xdt.ExprXDTNamespace.format_localized", "polars_xdt.ExprXDTNamespace.from_local_datetime", "polars_xdt.ExprXDTNamespace.is_workday", "polars_xdt.ExprXDTNamespace.offset_by", "polars_xdt.ExprXDTNamespace.to_julian_date", "polars_xdt.ExprXDTNamespace.to_local_datetime", "polars_xdt.date_range", "polars_xdt.workday_count", "polars-xdt", "Installation", "Tutorial"], "terms": {"everi": 1, "str": [1, 2, 3, 4, 5, 7, 8, 9], "expr": [1, 2, 3, 4, 5, 7, 8, 9], "xdtexpr": [1, 2, 3, 5, 6, 7, 9], "find": 1, "datetim": [1, 2, 3, 4, 6, 7, 8, 9, 12], "paramet": [1, 2, 3, 4, 5, 7, 8, 9], "durat": [1, 8], "string": [1, 2, 5, 8, 9], "creat": [1, 8], "follow": 1, "languag": [1, 8], "1n": 1, "1": [1, 2, 3, 4, 5, 6, 8, 9, 12], "nanosecond": 1, "1u": 1, "microsecond": 1, "1m": 1, "millisecond": 1, "second": 1, "minut": 1, "1h": 1, "hour": 1, "1d": [1, 8], "calendar": 1, "dai": [1, 4, 5, 8, 9, 12], "1w": 1, "week": [1, 4, 5, 8, 9], "1mo": 1, "month": [1, 8], "1q": 1, "quarter": 1, "1y": 1, "year": [1, 5, 12], "These": 1, "can": [1, 3, 5, 7, 9, 11], "combin": [1, 8], "3d12h4m25": 1, "3": [1, 3, 4, 5, 7, 9, 12], "12": [1, 9, 12], "4": [1, 4, 5, 9, 12], "25": [1, 9, 12], "By": 1, "we": [1, 12], "mean": [1, 11], "correspond": [1, 6], "time": [1, 2, 3, 5, 7, 8], "next": [1, 5], "which": [1, 8, 10], "mai": 1, "24": [1, 2], "due": 1, "daylight": 1, "save": 1, "similarli": 1, "return": [1, 2, 3, 4, 5, 6, 7, 8, 9], "express": [1, 2, 3, 5, 7, 8], "data": [1, 2, 3, 7, 8], "type": [1, 2, 3, 7, 8], "utf8": [1, 2], "exampl": [1, 2, 3, 4, 5, 6, 7, 8, 9, 12], "from": [1, 2, 3, 4, 5, 6, 7, 8, 9, 12], "import": [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12], "noqa": [1, 2, 3, 4, 5, 6, 7, 9, 11, 12], "f401": [1, 2, 3, 4, 5, 6, 7, 9, 11, 12], "df": [1, 2, 3, 4, 5, 6, 7, 9, 12], "pl": [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12], "datafram": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12], "date_col": [1, 2, 6, 7], "2024": [1, 2, 5, 6, 12], "8": [1, 2, 9, 12], "10": [1, 2, 3, 6, 7, 8, 12], "with_column": [1, 2, 3, 4, 5, 6, 7, 9, 12], "result": [1, 2, 8, 12], "col": [1, 2, 3, 4, 5, 6, 7, 11, 12], "xdt": [1, 2, 3, 4, 5, 6, 7, 11, 12], "shape": [1, 2, 3, 4, 5, 6, 7, 8, 9, 12], "2": [1, 2, 3, 4, 5, 6, 9, 12], "\u03bc": [1, 2, 3, 6, 7], "08": [1, 2, 9, 12], "00": [1, 2, 3, 6, 7], "09": [1, 3, 4, 5, 7, 8, 9, 12], "01": [1, 2, 3, 4, 5, 6, 7, 8, 9, 12], "format": 2, "local": [2, 3, 7], "uk_ua": 2, "convert": [2, 3, 7], "given": [2, 3, 6, 7, 8], "zone": [2, 3, 7, 8], "see": [2, 8, 11], "http": 2, "doc": 2, "r": 2, "chrono": 2, "latest": [2, 3], "strftime": 2, "index": 2, "html": 2, "what": 2, "": [2, 4, 8, 9, 12], "avail": 2, "us": [2, 3, 7, 8], "default": [2, 3, 4, 5, 8, 9], "becaus": 2, "op": 2, "request": 2, "pola": 2, "polar": [2, 4, 5, 8, 9, 11, 12], "12341": 2, "A": 2, "d": 2, "b": 2, "y": 2, "\u0441\u0443\u0431\u043e\u0442\u0430": 2, "\u0441\u0435\u0440\u043f\u043d\u044f": 2, "\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a": 2, "\u0436\u043e\u0432\u0442\u043d\u044f": 2, "from_tz": 3, "to_tz": 3, "ambigu": 3, "rais": [3, 5], "new": 3, "timezon": [3, 7], "current": 3, "each": 3, "determin": [3, 4], "how": [3, 5, 7], "deal": 3, "earliest": 3, "you": [3, 5, 7, 11, 12], "go": 3, "back": 3, "singl": [3, 9], "local_dt": [3, 7], "2020": [3, 7], "9": [3, 4, 5, 9, 12], "20": [3, 7], "europ": [3, 7], "london": [3, 7], "africa": [3, 7], "kigali": [3, 7], "america": [3, 7], "new_york": [3, 7], "utc": [3, 7], "alia": [3, 7], "date": [3, 4, 5, 6, 8, 9, 12], "02": [3, 7, 8, 9, 12], "weekend": [4, 5, 8, 9, 12], "sequenc": [4, 5, 8, 9], "sat": [4, 5, 8, 9, 12], "sun": [4, 5, 8, 9, 12], "holidai": [4, 5, 8, 9, 12], "none": [4, 5, 8, 9], "whether": 4, "i": [4, 5, 8, 10], "workdai": [4, 5, 9], "The": [4, 5, 8, 9], "ar": [4, 5, 8, 9], "consid": [4, 5, 8, 9], "exclud": [4, 5, 8, 9, 12], "calcul": [4, 5, 8, 9], "thi": [4, 5, 8, 9, 12], "should": [4, 8, 9], "list": [4, 8, 9], "2023": [4, 5, 8, 9, 12], "5": [4, 9, 12], "bool": [4, 8], "04": [4, 5, 8, 9, 12], "true": [4, 8], "05": [4, 5, 8, 9, 12], "fals": [4, 8], "roll": 5, "liter": [5, 8], "forward": [5, 12], "backward": 5, "offset": 5, "rel": 5, "appli": 5, "form": 5, "nbd": 5, "where": 5, "n": [5, 8], "an": [5, 8], "integ": 5, "evalu": [5, 8], "addit": 5, "unit": [5, 8], "pass": 5, "dt": [5, 7, 8], "handl": 5, "fall": 5, "non": 5, "error": 5, "busi": [5, 12], "previou": 5, "date_shift": [5, 12], "1bd": [5, 8], "03": [5, 8, 12], "also": 5, "specifi": [5, 8], "custom": 5, "holidays_england": 5, "country_holidai": [5, 12], "uk": [5, 12], "subdiv": [5, 12], "eng": [5, 12], "5bd": [5, 12], "fri": 5, "11": [5, 12], "07": [5, 6], "2bd": 5, "3bd": 5, "julian": 6, "2013": 6, "0": 6, "30": [6, 9, 12], "7": [6, 8], "13": 6, "18": 6, "51": 6, "config": 6, "float_precis": 6, "cfg": 6, "julian_d": 6, "f64": 6, "2456293": 6, "5208333335": 6, "2460317": 6, "0547569445": 6, "time_zon": [7, 8], "figur": 7, "out": [7, 8], "tz": 7, "awar": 7, "replace_time_zon": 7, "start": [8, 9, 12], "intoexprcolumn": 8, "end": [8, 9, 12], "interv": 8, "timedelta": 8, "close": 8, "closedinterv": 8, "both": 8, "time_unit": 8, "timeunit": 8, "eager": 8, "seri": 8, "rang": 8, "filter": 8, "lower": 8, "bound": 8, "upper": 8, "period": 8, "python": [8, 10], "object": 8, "note": [8, 12], "section": 8, "below": 8, "To": 8, "month_end": 8, "left": 8, "right": 8, "defin": 8, "side": 8, "inclus": 8, "u": 8, "m": 8, "onli": 8, "take": 8, "effect": 8, "output": 8, "column": [8, 9, 12], "immedi": 8, "If": 8, "set": 8, "instead": 8, "06": 8, "count": [9, 12], "number": [9, 12], "between": [9, 12], "two": [9, 12], "n_business_dai": [9, 12], "i32": [9, 12], "80": [9, 12], "librari": 10, "plugin": 10, "blazingli": 10, "fast": 10, "instal": [10, 12], "tutori": 10, "api": 10, "polars_xdt": [10, 11, 12], "date_rang": 10, "workday_count": [10, 12], "exprxdtnamespac": [10, 11], "ceil": 10, "format_loc": 10, "from_local_datetim": 10, "is_workdai": 10, "offset_bi": [10, 12], "to_local_datetim": 10, "to_julian_d": 10, "first": 11, "need": [11, 12], "Then": 11, "ll": [11, 12], "pip": 11, "run": 11, "print": [11, 12], "someth": 11, "like": 11, "0x7f5bc943fc10": 11, "all": 11, "work": [11, 12], "correctli": 11, "sai": 12, "let": 12, "shift": 12, "saturdai": 12, "sundai": 12, "fridai": 12, "england": 12, "packag": 12, "england_holidai": 12}, "objects": {"polars_xdt.ExprXDTNamespace": [[1, 0, 1, "", "ceil"], [2, 0, 1, "", "format_localized"], [3, 0, 1, "", "from_local_datetime"], [4, 0, 1, "", "is_workday"], [5, 0, 1, "", "offset_by"], [6, 0, 1, "", "to_julian_date"], [7, 0, 1, "", "to_local_datetime"]], "polars_xdt": [[8, 1, 1, "", "date_range"], [9, 1, 1, "", "workday_count"]]}, "objtypes": {"0": "py:method", "1": "py:function"}, "objnames": {"0": ["py", "method", "Python method"], "1": ["py", "function", "Python function"]}, "titleterms": {"api": 0, "polars_xdt": [1, 2, 3, 4, 5, 6, 7, 8, 9], "exprxdtnamespac": [1, 2, 3, 4, 5, 6, 7], "ceil": 1, "format_loc": 2, "from_local_datetim": 3, "is_workdai": 4, "offset_bi": 5, "to_julian_d": 6, "to_local_datetim": 7, "date_rang": 8, "workday_count": 9, "polar": 10, "xdt": 10, "content": 10, "instal": 11, "tutori": 12}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"API": [[0, "api"]], "polars_xdt.ExprXDTNamespace.ceil": [[1, "polars-xdt-exprxdtnamespace-ceil"]], "polars_xdt.ExprXDTNamespace.format_localized": [[2, "polars-xdt-exprxdtnamespace-format-localized"]], "polars_xdt.ExprXDTNamespace.from_local_datetime": [[3, "polars-xdt-exprxdtnamespace-from-local-datetime"]], "polars_xdt.ExprXDTNamespace.is_workday": [[4, "polars-xdt-exprxdtnamespace-is-workday"]], "polars_xdt.ExprXDTNamespace.offset_by": [[5, "polars-xdt-exprxdtnamespace-offset-by"]], "polars_xdt.ExprXDTNamespace.to_julian_date": [[6, "polars-xdt-exprxdtnamespace-to-julian-date"]], "polars_xdt.ExprXDTNamespace.to_local_datetime": [[7, "polars-xdt-exprxdtnamespace-to-local-datetime"]], "polars_xdt.date_range": [[8, "polars-xdt-date-range"]], "polars_xdt.workday_count": [[9, "polars-xdt-workday-count"]], "polars-xdt": [[10, "polars-xdt"]], "Contents:": [[10, null]], "Installation": [[11, "installation"]], "Tutorial": [[12, "tutorial"]]}, "indexentries": {"ceil() (polars_xdt.exprxdtnamespace method)": [[1, "polars_xdt.ExprXDTNamespace.ceil"]], "format_localized() (polars_xdt.exprxdtnamespace method)": [[2, "polars_xdt.ExprXDTNamespace.format_localized"]], "from_local_datetime() (polars_xdt.exprxdtnamespace method)": [[3, "polars_xdt.ExprXDTNamespace.from_local_datetime"]], "is_workday() (polars_xdt.exprxdtnamespace method)": [[4, "polars_xdt.ExprXDTNamespace.is_workday"]], "offset_by() (polars_xdt.exprxdtnamespace method)": [[5, "polars_xdt.ExprXDTNamespace.offset_by"]], "to_julian_date() (polars_xdt.exprxdtnamespace method)": [[6, "polars_xdt.ExprXDTNamespace.to_julian_date"]], "to_local_datetime() (polars_xdt.exprxdtnamespace method)": [[7, "polars_xdt.ExprXDTNamespace.to_local_datetime"]], "date_range() (in module polars_xdt)": [[8, "polars_xdt.date_range"]], "workday_count() (in module polars_xdt)": [[9, "polars_xdt.workday_count"]]}})