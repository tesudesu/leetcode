# https://leetcode.com/problems/reshape-data-concatenate/

import pandas as pd

def concatenateTables(df1: pd.DataFrame, df2: pd.DataFrame) -> pd.DataFrame:
    concatenated = pd.concat(objs=[df1, df2], axis=0)
    return concatenated