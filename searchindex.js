Search.setIndex({"docnames": ["api", "contents", "index", "modules/sctk._pipeline.fit_gaussian", "modules/sctk.calculate_qc", "modules/sctk.cellwise_qc", "modules/sctk.clusterwise_qc", "modules/sctk.generate_qc_clusters"], "filenames": ["api.rst", "contents.rst", "index.rst", "modules/sctk._pipeline.fit_gaussian.rst", "modules/sctk.calculate_qc.rst", "modules/sctk.cellwise_qc.rst", "modules/sctk.clusterwise_qc.rst", "modules/sctk.generate_qc_clusters.rst"], "titles": ["API Reference", "&lt;no title&gt;", "Single Cell analysis Tool Kit", "sctk._pipeline.fit_gaussian", "sctk.calculate_qc", "sctk.cellwise_qc", "sctk.clusterwise_qc", "sctk.generate_qc_clusters"], "terms": {"singl": 1, "cell": [1, 5, 6], "analysi": 1, "tool": 1, "kit": 1, "api": 1, "refer": [1, 5], "qc": [1, 4, 5, 6, 7], "pipelin": 1, "sctk": 2, "i": [2, 4, 5, 7], "collect": 2, "x": 3, "n_compon": 3, "arrai": 3, "1": 3, "2": [3, 7], "3": 3, "4": 3, "5": [3, 6, 7], "6": 3, "7": 3, "8": 3, "9": 3, "10": [3, 7], "threshold": [3, 6], "0": [3, 6, 7], "05": 3, "xmin": 3, "none": [3, 4, 5, 6, 7], "xmax": 3, "plot": 3, "fals": [3, 4, 7], "nbin": 3, "500": [3, 7], "hist_bin": 3, "100": 3, "tupl": [3, 5], "fit": 3, "gaussian": 3, "mixtur": 3, "model": 3, "1d": 3, "numpi": 3, "thi": [3, 5, 6, 7], "function": [3, 5, 6, 7], "us": [3, 5, 6, 7], "specifi": [3, 5, 7], "number": [3, 7], "compon": [3, 7], "It": 3, "return": [3, 4, 5, 6, 7], "lower": 3, "upper": 3, "bound": 3, "distribut": 3, "well": 3, "paramet": [3, 4, 5, 6, 7], "The": [3, 4, 5, 7], "best": 3, "gmm": 3, "select": 3, "base": [3, 5], "bic": 3, "valu": 3, "determin": 3, "minimum": 3, "If": [3, 4, 5, 7], "provid": [3, 5, 7], "set": [3, 5, 7], "maximum": 3, "true": [3, 4, 7], "bin": 3, "histogram": 3, "contain": 3, "rais": [3, 4, 5, 6, 7], "exampl": [3, 4, 5, 6, 7], "import": [3, 4, 5, 6, 7], "np": 3, "from": [3, 5, 6], "random": 3, "normal": 3, "loc": 3, "scale": 3, "size": 3, "1000": 3, "x_left": 3, "x_right": 3, "adata": [4, 5, 6, 7], "flag": 4, "hb": 4, "mito": 4, "mt": 4, "ribo": 4, "rp": 4, "l": 4, "extra_flag": 4, "flag_onli": 4, "suffix": 4, "kwarg": [4, 5], "calcul": 4, "qualiti": [4, 5, 6, 7], "control": [4, 5, 6, 7], "metric": [4, 5, 6, 7], "an": [4, 5, 6, 7], "anndata": [4, 5, 6, 7], "object": [4, 5, 6, 7], "modifi": [4, 5, 7], "place": [4, 5, 7], "dictionari": [4, 5], "regular": 4, "express": 4, "pattern": 4, "match": 4, "gene": 4, "name": [4, 5], "against": 4, "addit": [4, 5], "add": 4, "onli": 4, "do": 4, "other": 4, "append": 4, "keyword": [4, 5], "argument": [4, 5], "pass": [4, 5, 6], "scanpi": [4, 5, 6, 7], "pp": 4, "calculate_qc_metr": 4, "sc": [4, 5, 6, 7], "dataset": [4, 5, 6, 7], "pbmc3k": [4, 5, 6, 7], "cell_qc_kei": [5, 6], "cell_passed_qc": [5, 6], "filter": [5, 6], "can": 5, "By": 5, "default": 5, "overridden": 5, "list": [5, 7], "correspond": 5, "option": [5, 7], "For": 5, "explan": 5, "pleas": 5, "workflow": 5, "demo": 5, "notebook": 5, "ob": [5, 6, 7], "column": [5, 7], "store": [5, 6], "per": [5, 6], "call": [5, 6, 7], "fit_gaussian": 5, "valueerror": 5, "calculate_qc": [5, 6, 7], "ad": [6, 7], "key_ad": 6, "cluster_passed_qc": 6, "find": 6, "good": 6, "cluster": [6, 7], "identifi": 6, "have": 6, "high": 6, "proport": 6, "need": 6, "qc_cluster": 6, "present": [6, 7], "featur": 6, "least": 6, "fraction": 6, "deem": 6, "kei": 6, "retriev": 6, "result": 6, "metrics_list": [6, 7], "n_count": [6, 7], "n_gene": [6, 7], "percent_mito": [6, 7], "percent_ribo": [6, 7], "percent_hb": [6, 7], "generate_qc_clust": 6, "cellwise_qc": 6, "clusterwise_wc": 6, "aux_ad": 7, "n_pc": 7, "n_neighbor": 7, "re": 7, "return_aux": 7, "gener": 7, "auxiliari": 7, "creat": 7, "one": 7, "perform": 7, "pca": 7, "nearest": 7, "neighbor": 7, "graph": 7, "construct": 7, "umap": 7, "embed": 7, "must": 7, "earlier": 7, "Its": 7, "neighbour": 7, "its": 7, "transfer": 7, "input": 7, "princip": 7, "max": 7, "len": 7, "min": 7, "int": 7, "n_ob": 7, "resolut": 7, "leiden": 7, "algorithm": 7, "otherwis": 7}, "objects": {"": [[0, 0, 0, "-", "sctk"]], "sctk": [[0, 0, 0, "-", "_pipeline"], [4, 1, 1, "", "calculate_qc"], [5, 1, 1, "", "cellwise_qc"], [6, 1, 1, "", "clusterwise_qc"], [7, 1, 1, "", "generate_qc_clusters"]], "sctk._pipeline": [[3, 1, 1, "", "fit_gaussian"]]}, "objtypes": {"0": "py:module", "1": "py:function"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "function", "Python function"]}, "titleterms": {"api": 0, "refer": 0, "qc": 0, "pipelin": 0, "tabl": 1, "content": 1, "singl": 2, "cell": 2, "analysi": 2, "tool": 2, "kit": 2, "sctk": [3, 4, 5, 6, 7], "_pipelin": 3, "fit_gaussian": 3, "calculate_qc": 4, "cellwise_qc": 5, "clusterwise_qc": 6, "generate_qc_clust": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.todo": 2, "sphinx": 57}, "alltitles": {"API Reference": [[0, "api-reference"]], "QC pipeline": [[0, "module-sctk"]], "Table of Contents": [[1, null]], "Single Cell analysis Tool Kit": [[2, "single-cell-analysis-tool-kit"]], "sctk._pipeline.fit_gaussian": [[3, "sctk-pipeline-fit-gaussian"]], "sctk.calculate_qc": [[4, "sctk-calculate-qc"]], "sctk.cellwise_qc": [[5, "sctk-cellwise-qc"]], "sctk.clusterwise_qc": [[6, "sctk-clusterwise-qc"]], "sctk.generate_qc_clusters": [[7, "sctk-generate-qc-clusters"]]}, "indexentries": {"module": [[0, "module-sctk"], [0, "module-sctk._pipeline"]], "sctk": [[0, "module-sctk"]], "sctk._pipeline": [[0, "module-sctk._pipeline"]], "fit_gaussian() (in module sctk._pipeline)": [[3, "sctk._pipeline.fit_gaussian"]], "calculate_qc() (in module sctk)": [[4, "sctk.calculate_qc"]], "cellwise_qc() (in module sctk)": [[5, "sctk.cellwise_qc"]], "clusterwise_qc() (in module sctk)": [[6, "sctk.clusterwise_qc"]], "generate_qc_clusters() (in module sctk)": [[7, "sctk.generate_qc_clusters"]]}})